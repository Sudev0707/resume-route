import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, FONTS } from '../constants';
import { JobDetailsStyles as styles } from './styles/JobDetailsStyles';
import { Header } from '../components';
import { JobsStyles } from './styles/JobsStyles';
import orgIcon from '../assets/icons/icons8-company-60.png';

type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

interface TimelineEntry {
  title: string;
  date: string;
  note: string;
  isRejection?: boolean;
}

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  status: JobStatus;
  appliedOn: string;
  jobLink?: string;
  notes?: string;
  timeline?: TimelineEntry[];
  interviewDate?: string;
}

type JobDetailsRouteProp = RouteProp<
  { JobDetails: { job: Job } },
  'JobDetails'
>;

const getStatusBadgeStyle = (status: JobStatus) => {
  const colors: Record<JobStatus, { bg: string; text: string }> = {
    Applied: { bg: '#E0F2FE', text: '#007AFF' },
    Interview: { bg: '#FFF3E0', text: '#FF9500' },
    Offer: { bg: '#D1FADF', text: '#10B981' },
    Rejected: { bg: '#FEE2E2', text: '#EF4444' },
  };
  return colors[status];
};

// Generate timeline data based on job status
const getTimelineData = (
  status: JobStatus,
  appliedOn: string,
): TimelineEntry[] => {
  const timeline: TimelineEntry[] = [];

  // Always add the Applied entry
  timeline.push({
    title: 'Applied',
    date: appliedOn,
    note: 'Submitted application online',
  });

  // Add intermediate stages based on status
  if (status === 'Interview' || status === 'Offer' || status === 'Rejected') {
    timeline.push({
      title: 'Recruiter Screen',
      date: 'Mar 14, 2024',
      note: 'Quick 15-min phone screen with Sarah',
    });
  }

  if (status === 'Offer' || status === 'Rejected') {
    timeline.push({
      title: 'Technical Interview',
      date: 'Mar 25, 2024',
      note: 'Scheduled with engineering team',
    });
  }

  // Add final stage based on status
  if (status === 'Offer') {
    timeline.push({
      title: 'Offer Received',
      date: 'Apr 1, 2024',
      note: 'Received offer with competitive compensation',
    });
  }

  // Add rejection entry
  if (status === 'Rejected') {
    timeline.push({
      title: 'Rejected',
      date: 'Apr 5, 2024',
      note: 'Application was not moved forward after interview',
      isRejection: true,
    });
  }

  return timeline;
};

export const JobDetailsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<JobDetailsRouteProp>();
  const { job } = route.params;

  // State for interview date
  const [interviewDate, setInterviewDate] = useState<Date | null>(
    job.interviewDate ? new Date(job.interviewDate) : null,
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  console.log(job);

  const handleOpenJobLink = () => {
    if (job.jobLink) {
      Linking.openURL(job.jobLink);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // Format date for display
  const formatInterviewDate = (date: Date): string => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    return `${dayName}, ${monthName} ${day}`;
  };

  // Format date for storage (YYYY-MM-DD)
  const formatDateForStorage = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setInterviewDate(selectedDate);
      // Here you would typically save the date to your backend/state
      console.log('Interview date set to:', formatDateForStorage(selectedDate));
    }
  };

  const handleDonePress = () => {
    setShowDatePicker(false);
  };

  const handleClearDate = () => {
    setInterviewDate(null);
    setShowDatePicker(false);
    console.log('Interview date cleared');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
        translucent
      />

      <SafeAreaView
        style={JobsStyles.container}
        edges={['top', 'right', 'bottom', 'left']}
      >
        <Header title={job.company} showBackButton />
        <View style={JobsStyles.contentContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <View style={styles.jobRow}>
                <View style={styles.logoBox}>
                  {/* <MaterialCommunityIcons name="credit-card-chip" size={30} color="#5A67D8" /> */}
                  <Image
                    source={orgIcon}
                    style={styles.OrgIcon}
                    resizeMode="contain"
                  />
                </View>

                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.company}>{job.company}</Text>

                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusBadgeStyle(job.status).bg },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        { color: getStatusBadgeStyle(job.status).text },
                      ]}
                    >
                      ● {job.status}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={JobsStyles.separator} />

              <View style={styles.detailRowContainer}>
                <View style={styles.detailRow}>
                  <Feather name="map-pin" size={16} color="#777" />
                  <Text style={styles.detailText}>{job.location}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Feather name="dollar-sign" size={16} color="#777" />
                  <Text style={styles.detailText}>{job.salary}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Feather name="calendar" size={16} color="#777" />
                  <Text style={styles.detailText}>{job.appliedOn}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Feather name="briefcase-outline" size={16} color="#777" />
                  <Text style={styles.detailText}>{'job.type'}</Text>
                </View>
              </View>
            </View>

            {/* ----------- Scheduled Event ----------- */}
            {/* Show "Past Interview" for Rejected/Offer status, "Interview Scheduled" otherwise */}
            {job.status === 'Rejected' || job.status === 'Offer' ? (
              <View style={styles.card}>
                <View style={styles.eventRow}>
                  <Feather name="calendar" size={26} color="#6B46C1" />
                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={styles.eventTitle}>Past Interview</Text>
                    {interviewDate ? (
                      <Text style={styles.eventDate}>
                        {formatInterviewDate(interviewDate)}
                      </Text>
                    ) : (
                      <Text style={styles.noEventText}>No date recorded</Text>
                    )}
                  </View>
                  {interviewDate && (
                    <TouchableOpacity
                      onPress={handleClearDate}
                      activeOpacity={0.7}
                      style={styles.clearEventButton}
                    >
                      <Feather name="x" size={18} color="#EF4444" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    activeOpacity={0.7}
                    style={styles.addDateButton}
                  >
                    <Feather
                      name={interviewDate ? 'edit-2' : 'plus'}
                      size={18}
                      color="#6B46C1"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.card}>
                <View style={styles.eventRow}>
                  <Feather name="calendar" size={26} color="#6B46C1" />
                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={styles.eventTitle}>Interview Scheduled</Text>
                    {interviewDate ? (
                      <Text style={styles.eventDate}>
                        {formatInterviewDate(interviewDate)}
                      </Text>
                    ) : (
                      <Text style={styles.noEventText}>No date scheduled</Text>
                    )}
                  </View>
                  {interviewDate && (
                    <TouchableOpacity
                      onPress={handleClearDate}
                      activeOpacity={0.7}
                      style={styles.clearEventButton}
                    >
                      <Feather name="x" size={18} color="#EF4444" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    activeOpacity={0.7}
                    style={styles.addDateButton}
                  >
                    <Feather
                      name={interviewDate ? 'edit-2' : 'plus'}
                      size={18}
                      color="#6B46C1"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {/* mark not scheduled button */}
            <TouchableOpacity
              style={styles.markNotScheduledButton}
              onPress={handleClearDate}
              activeOpacity={0.7}
            >
              <Feather name="x-circle" size={18} color="#6B46C1" />
              <Text style={styles.markNotScheduledText}>
                Mark Not Scheduled
              </Text>
            </TouchableOpacity>

            {/* Date Picker Modal for iOS */}
            {showDatePicker && Platform.OS === 'ios' && (
              <Modal
                transparent
                animationType="fade"
                visible={showDatePicker}
                onRequestClose={() => setShowDatePicker(false)}
              >
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                      <TouchableOpacity
                        onPress={() => setShowDatePicker(false)}
                      >
                        <Text style={styles.modalCancel}>Cancel</Text>
                      </TouchableOpacity>
                      <Text style={styles.modalTitle}>
                        Select Interview Date
                      </Text>
                      <TouchableOpacity onPress={handleDonePress}>
                        <Text style={styles.modalDone}>Done</Text>
                      </TouchableOpacity>
                    </View>
                    <DateTimePicker
                      value={interviewDate || new Date()}
                      mode="date"
                      display="spinner"
                      onChange={handleDateChange}
                      style={styles.datePicker}
                      minimumDate={new Date()}
                    />
                    {interviewDate && (
                      <TouchableOpacity
                        style={styles.clearButton}
                        onPress={handleClearDate}
                        activeOpacity={0.7}
                      >
                        <Feather name="trash-2" size={18} color="#EF4444" />
                        <Text style={styles.clearButtonText}>
                          Clear Interview Date
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </Modal>
            )}

            {/* Date Picker for Android */}
            {showDatePicker && Platform.OS === 'android' && (
              <DateTimePicker
                value={interviewDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

            {/* ----------- Application Pipeline ----------- */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Application Pipeline</Text>

              <View style={styles.pipelineRow}>
                {['Applied', 'Interview', 'Offer', 'Rejected'].map(
                  (step, index) => {
                    const statusOrder: JobStatus[] = [
                      'Applied',
                      'Interview',
                      'Offer',
                      'Rejected',
                    ];
                    const currentStatusIndex = statusOrder.indexOf(job.status);

                    let circleStyle;
                    let showCheckmark = false;

                    if (index < currentStatusIndex) {
                      // Completed steps
                      circleStyle = styles.completedStepCircle;
                      showCheckmark = true;
                    } else if (index === currentStatusIndex) {
                      // Current active step
                      circleStyle = styles.activeStepCircle;
                      showCheckmark = true;
                    } else {
                      // Future steps
                      circleStyle = styles.inactiveStepCircle;
                      showCheckmark = false;
                    }

                    return (
                      <View key={index} style={[styles.stepContainer]}>
                        <View style={[styles.stepCircle, circleStyle]}>
                          {showCheckmark ? (
                            <Feather
                              name="check-circle"
                              size={14}
                              color="#fff"
                            />
                          ) : null}
                        </View>
                        <Text style={styles.stepText}>{step}</Text>
                      </View>
                    );
                  },
                )}
              </View>
            </View>

            {/* ----------- Resume Used ----------- */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Resume Used</Text>
              <Text style={styles.resumeName}>Tech Resume 2024</Text>
            </View>

            {/* ----------- Timeline ----------- */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Timeline</Text>

              {getTimelineData(job.status, job.appliedOn).map(
                (entry, index) => (
                  <React.Fragment key={index}>
                    <View
                      style={[
                        styles.timelineItem,
                        entry.isRejection && styles.timelineItemRejected,
                      ]}
                    >
                      <View
                        style={[
                          styles.timelineDot,
                          entry.isRejection && styles.timelineDotRejected,
                        ]}
                      />
                      <View style={{ marginLeft: 12 }}>
                        <Text
                          style={[
                            styles.timelineTitle,
                            entry.isRejection && styles.timelineTitleRejected,
                          ]}
                        >
                          {entry.title}
                        </Text>
                        <Text style={styles.timelineDate}>{entry.date}</Text>
                        <Text
                          style={[
                            styles.timelineNote,
                            entry.isRejection && styles.timelineNoteRejected,
                          ]}
                        >
                          {entry.note}
                        </Text>
                      </View>
                    </View>
                    {index <
                      getTimelineData(job.status, job.appliedOn).length - 1 && (
                      <View style={styles.timelineLine} />
                    )}
                  </React.Fragment>
                ),
              )}
            </View>

            {/* ----------- Notes ----------- */}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Notes</Text>
              <Text style={styles.notesText}>{job.notes}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default JobDetailsScreen;
