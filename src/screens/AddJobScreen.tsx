import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors, FONTS } from '../constants';

export const AddJobScreen: React.FC = () => {
  const navigation = useNavigation();

  const [status, setStatus] = useState('Applied');
  const [remote, setRemote] = useState(false);

  const handleAddJob = () => {
    // TODO: Implement job addition logic
    console.log('Add job pressed');
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
        translucent
      />

      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={styles.backButton}>
            <Feather name="chevron-left" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Job</Text>
        </View>
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Company */}
          <Text style={styles.label}>Company *</Text>
          <TextInput
            placeholder="Stripe, Vercel, etc."
            style={styles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Job Title */}
          <Text style={styles.label}>Job Title *</Text>
          <TextInput
            placeholder="Senior Frontend Engineer"
            style={styles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Location */}
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="San Francisco, CA"
            style={styles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Salary */}
          <Text style={styles.label}>Salary Range</Text>
          <TextInput
            placeholder="$120k - $160k"
            style={styles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Job Link */}
          <Text style={styles.label}>Job Link</Text>
          <TextInput
            placeholder="https://company.com/careers"
            style={styles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Applied Date */}
          <Text style={styles.label}>Applied Date</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="27-02-2026"
              style={{ flex: 1 }}
              placeholderTextColor="#8E8E93"
            />
            <Feather name="calendar" size={18} color="#8E8E93" />
          </View>

          {/* Resume Used */}
          <Text style={styles.label}>Resume Used</Text>
          <TouchableOpacity style={styles.inputWithIcon}>
            <Text style={{ color: '#111' }}>Tech Resume 2024</Text>
            <Feather name="chevron-down" size={18} color="#8E8E93" />
          </TouchableOpacity>

          {/* Status */}
          <Text style={styles.label}>Status</Text>
          <View style={styles.statusContainer}>
            {['Applied', 'Interview', 'Offer', 'Rejected'].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setStatus(item)}
                style={[
                  styles.statusButton,
                  status === item && styles.activeStatus,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    status === item && styles.activeStatusText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Remote Toggle */}
          <View style={styles.remoteContainer}>
            <Text style={styles.remoteText}>Remote position</Text>
            <Switch value={remote} onValueChange={setRemote} />
          </View>

          {/* Notes */}
          <Text style={styles.label}>Notes</Text>
          <TextInput
            placeholder="Any notes about this application..."
            style={styles.notesInput}
            multiline
            numberOfLines={5}
            placeholderTextColor="#8E8E93"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleAddJob}
              activeOpacity={0.8}
            >
              <Feather name="upload" size={20} color={Colors.background} />
              <Text style={styles.uploadButtonText}>Add Job Application</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F7F7F9',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    // borderWidth: 0.5
    paddingHorizontal: 16,
    // backgroundColor: Colors.offWhite,
  },
  backButton:{
    padding: 6,
    borderRadius: 8,
    backgroundColor: Colors.offWhite,
    // borderWidth: 0.5,
  },
  headerTitle: {
    fontSize: FONTS.sizes.lg,
    fontFamily: FONTS.fontFamily.semibold,
    marginLeft: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 18,
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#F1F1F4',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
  },

  inputWithIcon: {
    backgroundColor: '#F1F1F4',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  statusButton: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#ECECEF',
    alignItems: 'center',
    marginBottom: 10,
  },

  activeStatus: {
    backgroundColor: '#DDE6F3',
  },

  statusText: {
    fontWeight: '500',
    color: '#444',
  },

  activeStatusText: {
    color: '#2F6FED',
    fontWeight: '600',
  },

  remoteContainer: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  remoteText: {
    fontSize: 15,
    fontWeight: '500',
  },

  notesInput: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    textAlignVertical: 'top',
    marginTop: 6,
  },

  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  },

  uploadButton: {
    backgroundColor: Colors.primary || '#2F6FED',
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  uploadButtonText: {
    color: Colors.background || '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
