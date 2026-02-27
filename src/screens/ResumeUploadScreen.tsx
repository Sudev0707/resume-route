import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants';
import { ResumeUploadStyles as styles } from './styles/ResumeUploadStyles';

export const ResumeUploadScreen: React.FC = () => {
  const navigation = useNavigation();
  const [resumeTitle, setResumeTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSelectFile = () => {
    // In a real app, this would open a file picker
    // For now, we'll simulate file selection
    setSelectedFile('resume_sample.pdf');
    Alert.alert('File Selected', 'resume_sample.pdf has been selected');
  };

  const handleUpload = () => {
    if (!resumeTitle.trim()) {
      Alert.alert('Error', 'Please enter a resume title');
      return;
    }
    if (!selectedFile) {
      Alert.alert('Error', 'Please select a file to upload');
      return;
    }

    // Simulate upload success
    Alert.alert('Success', 'Resume uploaded successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar
          backgroundColor={Colors.background}
          barStyle="dark-content"
          translucent
        />
        <SafeAreaView
          style={styles.container}
          edges={['top', 'right', 'bottom', 'left']}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
              style={styles.backButton}
            >
              <Feather name="chevron-left" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Upload Resume</Text>
          </View>

          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* File Drop Zone */}
            <TouchableOpacity
              style={styles.dropZone}
              onPress={handleSelectFile}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>
                <Feather name="upload-cloud" size={48} color={Colors.primary} />
              </View>
              <Text style={styles.dropZoneTitle}>
                {selectedFile ? selectedFile : 'Tap to select file'}
              </Text>
              <Text style={styles.dropZoneSubtitle}>
                {selectedFile
                  ? 'Tap to change file'
                  : 'PDF, DOC, or DOCX up to 10MB'}
              </Text>
            </TouchableOpacity>

            {/* Resume Title Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Resume Title</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Software Engineer Resume 2024"
                placeholderTextColor={Colors.textSecondary}
                value={resumeTitle}
                onChangeText={setResumeTitle}
              />
            </View>

            {/* Tips Section */}
            <View style={styles.tipsContainer}>
              <Text style={styles.tipsTitle}>Tips for better results:</Text>
              <View style={styles.tipItem}>
                <Feather name="check-circle" size={16} color={Colors.success} />
                <Text style={styles.tipText}>
                  Use a clean, professional format
                </Text>
              </View>
              <View style={styles.tipItem}>
                <Feather name="check-circle" size={16} color={Colors.success} />
                <Text style={styles.tipText}>
                  Include relevant keywords for ATS
                </Text>
              </View>
              <View style={styles.tipItem}>
                <Feather name="check-circle" size={16} color={Colors.success} />
                <Text style={styles.tipText}>Keep it to 1-2 pages</Text>
              </View>
            </View>
          </ScrollView>

          {/* Upload Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleUpload}
              activeOpacity={0.8}
            >
              <Feather name="upload" size={20} color={Colors.background} />
              <Text style={styles.uploadButtonText}>Upload Resume</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};
