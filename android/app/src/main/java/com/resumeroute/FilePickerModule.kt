package com.resumeroute

import android.app.Activity
import android.content.Intent
import android.database.Cursor
import android.net.Uri
import android.provider.OpenableColumns
import android.webkit.MimeTypeMap
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.PermissionListener

class FilePickerModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext),
    ActivityEventListener,
    PermissionListener {

    private var pendingPromise: Promise? = null

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String {
        return "FilePicker"
    }

    @ReactMethod
    fun pickFile(promise: Promise) {
        pendingPromise = promise

        val activity = reactContext.currentActivity
        if (activity == null) {
            promise.reject("NO_ACTIVITY", "Activity doesn't exist")
            return
        }

        // Use Intent.ACTION_OPEN_DOCUMENT for better file access
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT)
        
        // Restrict to PDF, DOC, and DOCX files (matching iOS implementation)
        val mimeTypes = arrayOf(
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
        intent.type = "*/*"
        intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes)
        intent.addCategory(Intent.CATEGORY_OPENABLE)

        try {
            activity.startActivityForResult(Intent.createChooser(intent, "Select Resume"), 1001)
        } catch (e: Exception) {
            // Fallback to general file picker if specific types not supported
            val fallbackIntent = Intent(Intent.ACTION_GET_CONTENT)
            fallbackIntent.type = "*/*"
            fallbackIntent.addCategory(Intent.CATEGORY_OPENABLE)
            activity.startActivityForResult(Intent.createChooser(fallbackIntent, "Select File"), 1001)
        }
    }

    // -----------------------------
    // ACTIVITY EVENT LISTENER
    // -----------------------------
    override fun onActivityResult(
        activity: Activity,
        requestCode: Int,
        resultCode: Int,
        data: Intent?
    ) {
        if (requestCode == 1001) {
            if (resultCode == Activity.RESULT_OK && data != null) {
                val uri = data.data
                if (uri != null) {
                    // Take persistable URI permission for future access
                    try {
                        reactContext.contentResolver.takePersistableUriPermission(
                            uri,
                            Intent.FLAG_GRANT_READ_URI_PERMISSION
                        )
                    } catch (e: SecurityException) {
                        // Some providers don't support persistent permissions
                    }
                    
                    val fileInfo = getFileInfo(uri)
                    pendingPromise?.resolve(fileInfo)
                } else {
                    pendingPromise?.reject("E_NO_URI", "No file URI found")
                }
            } else {
                pendingPromise?.reject("E_CANCELLED", "User cancelled file picking")
            }
        }
    }

    private fun getFileInfo(uri: Uri): WritableMap {
        val result = Arguments.createMap()
        
        // Get URI
        result.putString("uri", uri.toString())
        
        // Get file name and size from content resolver
        var fileName = "unknown"
        var fileSize: Int = 0
        
        val cursor: Cursor? = reactContext.contentResolver.query(
            uri,
            arrayOf(OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE),
            null,
            null,
            null
        )
        
        cursor?.use {
            if (it.moveToFirst()) {
                val nameIndex = it.getColumnIndex(OpenableColumns.DISPLAY_NAME)
                val sizeIndex = it.getColumnIndex(OpenableColumns.SIZE)
                
                if (nameIndex >= 0) {
                    fileName = it.getString(nameIndex) ?: "unknown"
                }
                if (sizeIndex >= 0) {
                    fileSize = it.getInt(sizeIndex)
                }
            }
        }
        
        result.putString("name", fileName)
        result.putDouble("size", fileSize.toDouble())
        
        // Get MIME type
        val mimeType = reactContext.contentResolver.getType(uri) ?: getMimeTypeFromUri(uri)
        result.putString("type", mimeType ?: "application/octet-stream")
        
        return result
    }

    private fun getMimeTypeFromUri(uri: Uri): String? {
        val mimeTypeMap = MimeTypeMap.getSingleton()
        val extension = MimeTypeMap.getFileExtensionFromUrl(uri.toString())
        return mimeTypeMap.getMimeTypeFromExtension(extension)
    }

    override fun onNewIntent(intent: Intent) {
        // No implementation needed
    }

    // -----------------------------
    // PERMISSION LISTENER
    // -----------------------------
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ): Boolean {
        return true
    }
}
