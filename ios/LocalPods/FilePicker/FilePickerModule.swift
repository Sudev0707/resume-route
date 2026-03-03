import UIKit
import UniformTypeIdentifiers
import React

@objc(FilePicker)
class FilePickerModule: NSObject, UIDocumentPickerDelegate {
  
  private var resolveBlock: RCTPromiseResolveBlock?
  private var rejectBlock: RCTPromiseRejectBlock?
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func pickFile(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    self.resolveBlock = resolve
    self.rejectBlock = reject
    
    DispatchQueue.main.async {
      guard let rootViewController = UIApplication.shared.keyWindow?.rootViewController else {
        reject("NO_VIEW_CONTROLLER", "No root view controller found", nil)
        return
      }
      
      var documentPicker: UIDocumentPickerViewController
      
      if #available(iOS 14.0, *) {
        let pdfType = UTType.pdf
        let wordType = UTType(filenameExtension: "doc") ?? UTType.data
        let wordDocxType = UTType(filenameExtension: "docx") ?? UTType.data
        
        documentPicker = UIDocumentPickerViewController(forOpeningContentTypes: [pdfType, wordType, wordDocxType], asCopy: true)
      } else {
        // Fallback for older iOS versions
        documentPicker = UIDocumentPickerViewController(documentTypes: ["com.adobe.pdf", "com.microsoft.word.doc", "public.text"], in: .import)
      }
      
      documentPicker.delegate = self
      documentPicker.allowsMultipleSelection = false
      documentPicker.modalPresentationStyle = .formSheet
      
      rootViewController.present(documentPicker, animated: true, completion: nil)
    }
  }
  
  // MARK: - UIDocumentPickerDelegate
  
  func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
    guard let url = urls.first else {
      resolveBlock?(nil)
      return
    }
    
    let fileManager = FileManager.default
    var fileSize: Int64 = 0
    
    do {
      let attributes = try fileManager.attributesOfItem(atPath: url.path)
      fileSize = attributes[.size] as? Int64 ?? 0
    } catch {
      // Use resourceValues as fallback
      if let resourceValues = try? url.resourceValues(forKeys: [.fileSizeKey]) {
        fileSize = Int64(resourceValues.fileSize ?? 0)
      }
    }
    
    let fileName = url.lastPathComponent
    let fileExtension = url.pathExtension.lowercased()
    
    // Determine MIME type based on file extension
    var mimeType = "application/octet-stream"
    switch fileExtension {
    case "pdf":
      mimeType = "application/pdf"
    case "doc":
      mimeType = "application/msword"
    case "docx":
      mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    default:
      mimeType = "application/octet-stream"
    }
    
    // Get file URI
    let uri = url.absoluteString
    
    let result: [String: Any] = [
      "uri": uri,
      "name": fileName,
      "size": NSNumber(value: fileSize),
      "type": mimeType
    ]
    
    resolveBlock?(result)
  }
  
  func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
    resolveBlock?(nil)
  }
}

