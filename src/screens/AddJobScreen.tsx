import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Switch,
  Modal,
  Platform,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import { JobStatus } from '../data/jobs';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, FONTS } from '../constants';
import { AddJobStyles } from './styles/AddJobStyles';
import { resumes } from '../data/resumes';

type AddJobRouteProp = RouteProp<RootStackParamList, 'AddJob'>;

export const AddJobScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<AddJobRouteProp>();
  const { job, isEdit = false } = route.params || {};

  const [status, setStatus] = useState('Applied');
  const [remote, setRemote] = useState(false);
  const [appliedDate, setAppliedDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedResume, setSelectedResume] = useState(resumes[0]);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    salary: '',
    jobLink: '',
    notes: '',
    appliedOn: '',
    experience: '',
  });

  useEffect(() => {
    if (job) {
      const parsedDate = job.appliedOn ? new Date(job.appliedOn) : undefined;
      setAppliedDate(parsedDate);
      setFormData({
        company: job.company || '',
        title: job.title || '',
        location: job.location || '',
        salary: job.salary || '',
        jobLink: job.jobLink || '',
        notes: job.notes || '',
        appliedOn: job.appliedOn || '',
        experience: job.experience || '',
      });
      setStatus(job.status);
      setRemote((job.location || '').toLowerCase().includes('remote'));
    }
  }, [job]);

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setAppliedDate(selectedDate);
    }
  };

  const handleDonePress = () => {
    setShowDatePicker(false);
  };

  const handleSaveJob = () => {
    console.log(isEdit ? `Updated job ${job?.id}` : 'Added new job:', {
      ...formData,
      status,
      remote,
      appliedDate: appliedDate ? formatDate(appliedDate) : '',
      resumeId: selectedResume.id,
    });
    navigation.goBack();
  };

  const handleResumeSelect = (resume: any) => {
    setSelectedResume(resume);
    setShowResumeDropdown(false);
  };

  const renderResumeItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[
        AddJobStyles.resumeItem,
        selectedResume.id === item.id && AddJobStyles.selectedResumeItem,
      ]}
      onPress={() => handleResumeSelect(item)}
      activeOpacity={0.7}
    >
      <View style={AddJobStyles.resumeItemContent}>
        <View style={AddJobStyles.resumeItemLeft}>
          <Text
            style={[
              AddJobStyles.resumeItemTitle,
              selectedResume.id === item.id && AddJobStyles.selectedResumeItemTitle,
            ]}
          >
            {item.title}
          </Text>
          <Text style={AddJobStyles.resumeItemSubtitle}>{item.date}</Text>
        </View>
        <View style={[AddJobStyles.scoreBadge, { backgroundColor: item.color }]}>
          <Text style={AddJobStyles.scoreBadgeText}>{item.score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={AddJobStyles.container}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
        translucent
      />

      <SafeAreaView style={AddJobStyles.container}>
        <View style={AddJobStyles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={AddJobStyles.backButton}
          >
            <Feather name="chevron-left" size={24} />
          </TouchableOpacity>
          <Text style={AddJobStyles.headerTitle}>{isEdit ? 'Edit Job' : 'Add Job'}</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={AddJobStyles.keyboardView}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
          <ScrollView
            style={AddJobStyles.scrollViewContent}
            contentContainerStyle={AddJobStyles.scrollContentContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
          >
            <Text style={AddJobStyles.label}>Company *</Text>
<TextInput
              placeholder="Stripe, Vercel, etc."
              value={formData.company}
              onChangeText={(text) => setFormData({...formData, company: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Job Title *</Text>
<TextInput
              placeholder="Senior Frontend Engineer"
              value={formData.title}
              onChangeText={(text) => setFormData({...formData, title: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Location</Text>
<TextInput
              placeholder="San Francisco, CA"
              value={formData.location}
              onChangeText={(text) => setFormData({...formData, location: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Salary Range</Text>
            <TextInput
              placeholder="$120k - $160k"
              value={formData.salary}
              onChangeText={(text) => setFormData({...formData, salary: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Experience</Text>
            <TextInput
              placeholder="3+ years"
              value={formData.experience}
              onChangeText={(text) => setFormData({...formData, experience: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Job Link</Text>
            <TextInput
              placeholder="https://company.com/careers"
              value={formData.jobLink}
              onChangeText={(text) => setFormData({...formData, jobLink: text})}
              style={AddJobStyles.input}
              placeholderTextColor="#8E8E93"
            />

            <Text style={AddJobStyles.label}>Applied Date</Text>
            <TouchableOpacity
              style={AddJobStyles.dobInputWrapper}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.8}
            >
              <Text
                style={{
                  flex: 1,
                  color: appliedDate ? Colors.textPrimary : '#8E8E93',
                  fontSize: FONTS.sizes.sm,
                  fontFamily: FONTS.fontFamily.regular,
                }}
              >
                {appliedDate ? formatDate(appliedDate) : '27-02-2026'}
              </Text>
              <Feather name="calendar" size={16} color="#8E8E93" />
            </TouchableOpacity>

            {showDatePicker && Platform.OS === 'ios' && (
              <Modal
                transparent
                animationType="fade"
                visible={showDatePicker}
                onRequestClose={() => setShowDatePicker(false)}
              >
                <View style={AddJobStyles.modalOverlay}>
                  <View style={AddJobStyles.modalContent}>
                    <View style={AddJobStyles.modalHeader}>
                      <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                        <Text style={AddJobStyles.modalCancel}>Cancel</Text>
                      </TouchableOpacity>
                      <Text style={AddJobStyles.modalTitle}>Select Date</Text>
                      <TouchableOpacity onPress={handleDonePress}>
                        <Text style={AddJobStyles.modalDone}>Done</Text>
                      </TouchableOpacity>
                    </View>
                    <DateTimePicker
                      value={appliedDate || new Date()}
                      mode="date"
                      display="spinner"
                      onChange={handleDateChange}
                      style={AddJobStyles.datePicker}
                    />
                  </View>
                </View>
              </Modal>
            )}

            {showDatePicker && Platform.OS === 'android' && (
              <DateTimePicker
                value={appliedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

            {/* Resume Used - Dropdown */}
            <Text style={AddJobStyles.label}>Resume Used</Text>
            <TouchableOpacity
              style={AddJobStyles.inputWithIcon}
              onPress={() => setShowResumeDropdown(true)}
              activeOpacity={0.8}
            >
              <Text style={AddJobStyles.inputWithIconText}>
                {selectedResume.title}
              </Text>
              <Feather name="chevron-down" size={18} color="#8E8E93" />
            </TouchableOpacity>

            {/* Resume Dropdown Modal */}
            <Modal
              transparent
              animationType="fade"
              visible={showResumeDropdown}
              onRequestClose={() => setShowResumeDropdown(false)}
            >
              <View style={AddJobStyles.modalOverlay}>
                <View style={AddJobStyles.dropdownModalContent}>
                  <View style={AddJobStyles.modalHeader}>
                    <TouchableOpacity
                      onPress={() => setShowResumeDropdown(false)}
                    >
                      <Text style={AddJobStyles.modalCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={AddJobStyles.modalTitle}>Select Resume</Text>
                    <View style={{ width: 50 }} />
                  </View>
                  <FlatList
                    data={resumes}
                    keyExtractor={item => item.id}
                    renderItem={renderResumeItem}
                    contentContainerStyle={AddJobStyles.resumeListContent}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </Modal>

            {/* Status */}
            <Text style={AddJobStyles.label}>Status</Text>
            <View style={AddJobStyles.statusContainer}>
              {['Applied', 'Interview', 'Offer', 'Rejected'].map(item => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={item}
                  onPress={() => setStatus(item)}
                  style={[
                    AddJobStyles.statusButton,
                    status === item && AddJobStyles.activeStatus,
                  ]}
                >
                  <Text
                    style={[
                      AddJobStyles.statusText,
                      status === item && AddJobStyles.activeStatusText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Remote Toggle */}
            <View style={AddJobStyles.remoteContainer}>
              <Text style={AddJobStyles.remoteText}>Remote position</Text>
              <Switch value={remote} onValueChange={setRemote} />
            </View>

            {/* Notes */}
            <Text style={AddJobStyles.label}>Notes</Text>
            <TextInput
              placeholder="Any notes about this application..."
              value={formData.notes}
              onChangeText={(text) => setFormData({...formData, notes: text})}
              style={AddJobStyles.notesInput}
              multiline
              numberOfLines={5}
              placeholderTextColor="#8E8E93"
            />

            <View style={AddJobStyles.buttonContainer}>
              <TouchableOpacity
                style={AddJobStyles.uploadButton}
                onPress={handleSaveJob}
                activeOpacity={0.8}
              >
                <Feather name="upload" size={20} color={Colors.background} />
                <Text style={AddJobStyles.uploadButtonText}>
                  {isEdit ? 'Update Job Application' : 'Add Job Application'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

