# ResumeRoute Backend Implementation Guide

## Project Overview
ResumeRoute is a React Native mobile application for tracking job applications and managing resumes. The app currently uses Firebase Authentication but lacks a proper backend for persistent data storage.

## Current State
- **Authentication**: ✅ Firebase Auth already integrated (email/password login with email verification)
- **Data Storage**: ❌ Using static mock data in TypeScript files
- **File Upload**: ❌ Sends to placeholder API endpoint

## Required Backend Implementation

### 1. Firebase Firestore Database
Store persistent data in NoSQL cloud database.

#### Database Structure
```
users/
  {userId}/
    - email: string
    - displayName: string
    - createdAt: timestamp
    - profileComplete: boolean

jobs/
  {jobId}/
    - userId: string
    - title: string
    - company: string
    - location: string
    - salary: string
    - status: "Applied" | "Interview" | "Offer" | "Rejected"
    - appliedOn: timestamp
    - interviewDate?: timestamp
    - interviewStatus?: string
    - experience?: string
    - jobLink?: string
    - notes?: string
    - timeline?: array
    - createdAt: timestamp
    - updatedAt: timestamp

resumesId}/
   /
  {resume - userId: string
    - title: string
    - fileName: string
    - fileUrl: string (Firebase Storage URL)
    - tags: array
    - views: number
    - downloads: number
    - score: number
    - createdAt: timestamp
    - updatedAt: timestamp
```

### 2. Firebase Storage
Store uploaded resume files securely.

#### Storage Structure
```
resumes/
  {userId}/
    {resumeId}/
      {fileName}
```

## Where to Store Resume Files - Detailed Comparison

### Option 1: Firebase Storage (RECOMMENDED ✅)

**What it is:** Firebase Storage (built on Google Cloud Storage) is a cloud storage service specifically designed for storing user-generated content like files, images, and documents.

**Storage Path:**
```
resumes/
  {userId}/
    {timestamp}_{originalFileName}
```

**Example:**
```
resumes/
  user123abc/
    1709234567890_Sudev_Majhi_Resume.pdf
    1709245678901_Frontend_Developer_CV.pdf
```

**Why it's BEST for this app:**
| Feature | Benefit |
|---------|---------|
| Built-in Firebase Auth integration | Automatic security - users can only access their own files |
| Free tier (5GB storage, 1GB download/day) | Cost-effective for personal apps |
| Automatic CDN | Fast downloads globally |
| Mobile SDK support | Perfect for React Native apps |
| Automatic image resizing | Optional optimization features |
| Handles large files | Up to 5TB per file |

**Implementation:**
```typescript
import storage from '@react-native-firebase/storage';

// Upload resume
const uploadResume = async (userId: string, fileUri: string, fileName: string) => {
  const storageRef = storage().ref(`resumes/${userId}/${Date.now()}_${fileName}`);
  await storageRef.putFile(fileUri);
  const downloadUrl = await storageRef.getDownloadURL();
  return downloadUrl;
};
```

**Firebase Console Setup:**
1. Go to Firebase Console → Storage
2. Click "Get Started" (it's free, even without Blaze plan)
3. Set region closest to your users
4. Configure security rules (provided below)

---

### Option 2: AWS S3 (Alternative)

**What it is:** Amazon S3 is a scalable object storage service from AWS.

**Storage Path:**
```
resume-route-bucket/
  resumes/
    {userId}/
      {timestamp}_{fileName}
```

**Pros:**
- Very mature and reliable
- Free tier: 5GB storage, 20,000 GET requests
- Powerful lifecycle policies

**Cons:**
- More complex setup than Firebase
- Requires AWS SDK or API gateway
- Need to manage your own security

**Not recommended** for this project unless you already have AWS infrastructure.

---

### Option 3: Cloudinary (Alternative - for images only)

**What it is:** Cloud storage optimized for images and videos with transformation features.

**Best for:** If resumes were primarily images/scans needing optimization.

**Not recommended** for PDF resumes.

---

### Option 4: Local Device Storage (NOT RECOMMENDED ❌)

Storing files locally on the device using `react-native-fs` or AsyncStorage.

**Why NOT to use:**
- Data lost when user uninstalls app or clears data
- No cross-device sync
- Cannot share resumes easily
- Limited storage on mobile devices
- No backup capability

---

### Comparison Summary

| Feature | Firebase Storage | AWS S3 | Cloudinary | Local Storage |
|---------|-----------------|--------|------------|---------------|
| **Setup Time** | 5 minutes | 30 minutes | 15 minutes | 5 minutes |
| **Cost** | Free (5GB) | Free (5GB) | Free (25GB) | Free |
| **Security** | ✅ Built-in | ⚠️ Manual | ✅ Built-in | ❌ None |
| **Cross-device** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Mobile SDK** | ✅ Excellent | ⚠️ Good | ✅ Good | ✅ Good |
| **Recommended** | ✅ **YES** | ⚠️ Optional | ❌ No | ❌ No |

---

## Final Recommendation

**Use Firebase Storage** - It's the best choice because:

1. ✅ Already using Firebase Auth (seamless integration)
2. ✅ Same ecosystem = easier maintenance
3. ✅ Free tier sufficient for personal use
4. ✅ Built-in security rules
5. ✅ Excellent React Native SDK

The file path structure should be:
```
Firebase Storage
  └── resumes/
        └── {userId}/
              └── {timestamp}_{originalFileName}

Example:
  resumes/
    abc123user/
      1709234567890_Sudev_Majhi_Resume.pdf
      1709245678901_Tech_Resume_2024.pdf
```

This ensures:
- Each user can only access their own files (security)
- Unique filenames prevent overwrites (timestamp prefix)
- Files are organized by user (easy management)

### 3. Implementation Steps

#### Step 1: Install Firebase Firestore Package
```bash
npm install @react-native-firebase/firestore @react-native-firebase/storage
```

#### Step 2: Create Firestore Service
Create file: `src/services/firestore.ts`

```typescript
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Job, Resume } from '../data/jobs';

// Job Collection Reference
const jobsCollection = firestore().collection('jobs');
const resumesCollection = firestore().collection('resumes');

// ============ JOBS ============

export const createJob = async (userId: string, jobData: Omit<Job, 'id'>) => {
  const docRef = jobsCollection.doc();
  await docRef.set({
    ...jobData,
    userId,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
  return docRef.id;
};

export const getJobs = async (userId: string): Promise<Job[]> => {
  const snapshot = await jobsCollection
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .get();
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    appliedOn: doc.data().appliedOn?.toDate?.()?.toISOString() || doc.data().appliedOn,
    interviewDate: doc.data().interviewDate?.toDate?.()?.toISOString() || doc.data().interviewDate,
  })) as Job[];
};

export const updateJob = async (jobId: string, jobData: Partial<Job>) => {
  await jobsCollection.doc(jobId).update({
    ...jobData,
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const deleteJob = async (jobId: string) => {
  await jobsCollection.doc(jobId).delete();
};

// ============ RESUMES ============

export const uploadResume = async (
  userId: string,
  file: { uri: string; name: string; type: string },
  title: string,
  tags: string[] = []
): Promise<string> => {
  // 1. Upload file to Firebase Storage
  const storageRef = storage().ref(`resumes/${userId}/${Date.now()}_${file.name}`);
  await storageRef.putFile(file.uri, {
    contentType: file.type,
  });
  
  // 2. Get download URL
  const downloadUrl = await storageRef.getDownloadURL();
  
  // 3. Save metadata to Firestore
  const docRef = resumesCollection.doc();
  await docRef.set({
    userId,
    title,
    fileName: file.name,
    fileUrl: downloadUrl,
    tags,
    views: 0,
    downloads: 0,
    score: 0,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
  
  return docRef.id;
};

export const getResumes = async (userId: string): Promise<Resume[]> => {
  const snapshot = await resumesCollection
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .get();
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt,
  })) as Resume[];
};

export const deleteResume = async (resumeId: string) => {
  // Get file URL first to delete from storage
  const doc = await resumesCollection.doc(resumeId).get();
  const data = doc.data();
  
  if (data?.fileUrl) {
    try {
      const storageRef = storage().refFromURL(data.fileUrl);
      await storageRef.delete();
    } catch (e) {
      console.log('Storage file already deleted or not found');
    }
  }
  
  await resumesCollection.doc(resumeId).delete();
};
```

#### Step 3: Update Resume Upload Screen
Modify `src/screens/ResumeUploadScreen.tsx`:

```typescript
// Replace the placeholder API call with:
import { uploadResume } from '../services/firestore';
import { auth } from '../utils/firebase';

const handleUpload = async () => {
  // ... existing validation code ...

  setIsLoading(true);

  try {
    const user = auth().currentUser;
    if (!user) {
      toast.error('Please login to upload resume');
      return;
    }

    await uploadResume(
      user.uid,
      {
        uri: selectedFile.uri,
        name: selectedFile.name,
        type: selectedFile.type,
      },
      resumeTitle.trim()
    );

    toast.success('Resume uploaded successfully!');
    setResumeTitle('');
    setSelectedFile(null);
    navigation.goBack();
  } catch (error) {
    console.error('Upload error:', error);
    toast.error('Failed to upload resume. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

#### Step 4: Create Custom Hooks for Data Management

Create file: `src/hooks/useJobs.ts`
```typescript
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { getJobs, createJob, updateJob, deleteJob } from '../services/firestore';
import { Job } from '../data/jobs';

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const user = auth().currentUser;
    if (!user) return;
    
    try {
      const userJobs = await getJobs(user.uid);
      setJobs(userJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (jobData: Omit<Job, 'id'>) => {
    const user = auth().currentUser;
    if (!user) return;
    
    const jobId = await createJob(user.uid, jobData);
    await fetchJobs();
    return jobId;
  };

  const editJob = async (jobId: string, jobData: Partial<Job>) => {
    await updateJob(jobId, jobData);
    await fetchJobs();
  };

  const removeJob = async (jobId: string) => {
    await deleteJob(jobId);
    await fetchJobs();
  };

  return { jobs, loading, addJob, editJob, removeJob, refresh: fetchJobs };
};
```

Create file: `src/hooks/useResumes.ts`
```typescript
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { getResumes, deleteResume } from '../services/firestore';
import { Resume } from '../data/jobs';

export const useResumes = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchResumes = async () => {
    const user = auth().currentUser;
    if (!user) return;
    
    try {
      const userResumes = await getResumes(user.uid);
      setResumes(userResumes);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const removeResume = async (resumeId: string) => {
    await deleteResume(resumeId);
    await fetchResumes();
  };

  return { resumes, loading, removeResume, refresh: fetchResumes };
};
```

#### Step 5: Security Rules (Firebase Console)

**Firestore Rules:**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Jobs - users can only access their own data
    match /jobs/{jobId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    
    // Resumes - users can only access their own data
    match /resumes/{resumeId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    
    // User profiles
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**Storage Rules:**
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. File Storage Locations

Create the following directory structure for the backend services:

```
src/
  services/
    firestore.ts      # Firestore database operations
    storage.ts        # Firebase Storage operations (optional - can be in firestore.ts)
  hooks/
    useJobs.ts        # Job data management hook
    useResumes.ts     # Resume data management hook
```

### 5. Environment Variables

Create `.env` file (add to `.gitignore`):
```
# Firebase Config (already in firebase.js but can use env vars)
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

### 6. Migration from Static Data

To migrate from static mock data to backend:

1. **One-time data migration script** - For existing users
2. **Hybrid approach** - Keep static data as fallback when offline

Example offline handling:
```typescript
export const getJobsWithFallback = async (userId: string): Promise<Job[]> => {
  try {
    const userJobs = await getJobs(userId);
    if (userJobs.length > 0) {
      return userJobs;
    }
    // Return mock data if no user data exists yet
    return JOBS;
  } catch (error) {
    console.log('Offline - using mock data');
    return JOBS;
  }
};
```

## Summary of Files to Create/Modify

### New Files:
1. `src/services/firestore.ts` - Database operations
2. `src/hooks/useJobs.ts` - Job management hook
3. `src/hooks/useResumes.ts` - Resume management hook
4. `.env` - Environment variables (optional)

### Files to Modify:
1. `src/screens/ResumeUploadScreen.tsx` - Use Firestore for uploads
2. `src/screens/HomeScreen.tsx` - Use hook for jobs
3. `src/screens/JobsScreen.tsx` - Use hook for jobs
4. `src/screens/ResumeScreen.tsx` - Use hook for resumes

## Firebase Console Setup Checklist

1. ✅ Firebase project already exists: `resume-route`
2. ⬜ Enable Firestore Database
3. ⬜ Configure Firestore security rules
4. ⬜ Configure Storage security rules
5. ⬜ Set up authentication providers (Email/Password already enabled)

## Testing the Backend

After implementation, test:
- [ ] User registration creates Firestore document
- [ ] Jobs are saved to user's collection
- [ ] Resume uploads work correctly
- [ ] Data persists across app restarts
- [ ] Security rules prevent access to other users' data
- [ ] Offline behavior works correctly

