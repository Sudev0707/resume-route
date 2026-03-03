import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors, FONTS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  JobsStyles,
  getBoardCountBadge,
  getStatusBadgeStyle,
  getStatusTextStyle,
} from './styles/JobsStyles';
import { Header } from '../components';
import { Job, JobStatus, JOBS } from '../data/jobs';

export const JobsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [viewMode, setViewMode] = useState<'list' | 'board'>('list');
  const [filter, setFilter] = useState<JobStatus | 'All'>('All');

  const filteredJobs =
    filter === 'All' ? JOBS : JOBS.filter(j => j.status === filter);

  const groupedJobs = {
    Applied: JOBS.filter(j => j.status === 'Applied'),
    Interview: JOBS.filter(j => j.status === 'Interview'),
    Offer: JOBS.filter(j => j.status === 'Offer'),
    Rejected: JOBS.filter(j => j.status === 'Rejected'),
  };

  const handleMoveStatus = (status: JobStatus) => {
    console.log('status:', status);
    if (status === 'Applied') {
      // move to interview
    } else if (status === 'Interview') {
      // move to offer
    }
  };

  const renderJobCard = (job: Job) => (
    <TouchableOpacity
      style={JobsStyles.card}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('JobDetails', { job })}
    >
      <View style={JobsStyles.jobCardRow}>
        <View style={{ flex: 1 }}>
          <Text style={JobsStyles.title}>{job.title}</Text>
          <Text style={JobsStyles.company}>{job.company}</Text>
          <View style={JobsStyles.meta}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="map-pin" size={14} color={Colors.textSecondary} />
              <Text style={[JobsStyles.metaText, { marginLeft: 5 }]}>
                {job.location}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather
                name="dollar-sign"
                size={14}
                color={Colors.textSecondary}
              />
              <Text style={[JobsStyles.metaText, { marginLeft: 5 }]}>
                {job.salary}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather
                name="briefcase"
                size={14}
                color={Colors.textSecondary}
              />
              <Text style={[JobsStyles.metaText, { marginLeft: 5 }]}>
                {job.experience}
              </Text>
            </View>
          </View>
        </View>
        <View style={getStatusBadgeStyle(job.status)}>
          <Text style={getStatusTextStyle(job.status)}>{job.status}</Text>
        </View>
      </View>

      <View style={JobsStyles.separator} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="calendar" size={14} color={Colors.textSecondary} />
            <Text style={[JobsStyles.appliedDate, { marginLeft: 5 }]}>
              Applied on {job.appliedOn}
            </Text>
          </View>

          {/* Interview Scheduled Indicator */}
          {job.interviewDate && (
            <View style={JobsStyles.interviewIndicator}>
              <Feather name="calendar" size={12} color="#D97706" />
              <Text style={JobsStyles.interviewIndicatorText}>
                Interview: {job.interviewDate}
              </Text>
            </View>
          )}

          {/* Schedule Interview Button for Interview status without date */}
          {job.status === 'Interview' && !job.interviewDate && (
            <TouchableOpacity
              style={JobsStyles.scheduleInterviewButton}
              onPress={() => navigation.navigate('JobDetails', { job })}
              activeOpacity={0.7}
            >
              <Feather name="calendar-plus" size={12} color="#4F46E5" />
              <Text style={JobsStyles.scheduleInterviewText}>
                Schedule Interview
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {(job.status === 'Interview' || job.status === 'Applied') && (
          <TouchableOpacity
            style={JobsStyles.Movebutton}
            activeOpacity={0.7}
            onPress={() => handleMoveStatus(job.status)}
          >
            <View style={JobsStyles.row}>
              <Text style={JobsStyles.text}>Move</Text>
              <Feather name="chevron-right" size={16} color="#1E74FF" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar
          backgroundColor={Colors.background}
          barStyle="dark-content"
          translucent
        />

        <SafeAreaView
          style={JobsStyles.container}
          edges={['top', 'right', 'bottom', 'left']}
        >
          <Header title="My Jobs" showBackButton />
          {/* content */}

          <View style={JobsStyles.toggleHeader}>
            <View style={JobsStyles.toggleContainer}>
              <TouchableOpacity
                style={[
                  JobsStyles.toggleButton,
                  viewMode === 'list' && JobsStyles.activeToggle,
                ]}
                onPress={() => setViewMode('list')}
              >
                <Feather
                  name="menu"
                  size={18}
                  color={
                    viewMode === 'list' ? Colors.primary : Colors.textSecondary
                  }
                />
                <Text style={JobsStyles.toggleLabel}>List</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  JobsStyles.toggleButton,
                  viewMode === 'board' && JobsStyles.activeToggle,
                ]}
                onPress={() => setViewMode('board')}
              >
                <Feather
                  name="grid"
                  size={17}
                  color={
                    viewMode === 'board' ? Colors.primary : Colors.textSecondary
                  }
                />
                <Text style={JobsStyles.toggleLabel}>Board</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={JobsStyles.addButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('AddJob')}
            >
              <Feather name="plus" size={18} color={Colors.textDark} />
              <Text style={JobsStyles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={JobsStyles.contentContainer}>
            {/* Header */}

            {/* LIST VIEW */}
            {viewMode === 'list' && (
              <>
                {/* Filter Tabs */}
                <View>
                  <FlatList
                    data={['All', 'Applied', 'Interview', 'Offer', 'Rejected']}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={JobsStyles.filterListContent}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[
                          JobsStyles.filterTab,
                          filter === item && JobsStyles.activeFilterTab,
                        ]}
                        onPress={() => setFilter(item as any)}
                      >
                        <Text
                          style={
                            filter === item
                              ? JobsStyles.activeFilterTabText
                              : JobsStyles.filterTabText
                          }
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>

                <FlatList
                  data={filteredJobs}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => renderJobCard(item)}
                  contentContainerStyle={JobsStyles.jobsListContent}
                />
              </>
            )}

            {/* BOARD VIEW */}
            {viewMode === 'board' && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={JobsStyles.boardScrollContent}
              >
                {(
                  ['Applied', 'Interview', 'Offer', 'Rejected'] as JobStatus[]
                ).map(column => (
                  <View key={column} style={JobsStyles.boardColumn}>
                    <View style={JobsStyles.boardHeader}>
                      <Text
                        style={[
                          getStatusTextStyle(column),
                          { fontSize: FONTS.sizes.md },
                        ]}
                      >
                        {column}
                      </Text>

                      <View style={getBoardCountBadge(column)}>
                        <Text style={JobsStyles.boardCountText}>
                          {groupedJobs[column].length}
                        </Text>
                      </View>
                    </View>

                    <FlatList
                      data={groupedJobs[column]}
                      keyExtractor={job => job.id}
                      renderItem={({ item: job }) => (
                        <TouchableOpacity
                          style={JobsStyles.boardCard}
                          activeOpacity={0.8}
                          onPress={() =>
                            navigation.navigate('JobDetails', { job })
                          }
                        >
                          <Text style={JobsStyles.title}>{job.title}</Text>
                          <Text style={JobsStyles.company}>{job.company}</Text>
                          <View style={JobsStyles.meta}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                            >
                              <Feather
                                name="map-pin"
                                size={14}
                                color={Colors.textSecondary}
                              />
                              <Text
                                style={[JobsStyles.metaText, { marginLeft: 5 }]}
                              >
                                {job.location}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                            >
                              <Feather
                                name="dollar-sign"
                                size={14}
                                color={Colors.textSecondary}
                              />
                              <Text
                                style={[JobsStyles.metaText, { marginLeft: 5 }]}
                              >
                                {job.salary}
                              </Text>
                            </View>
                          </View>

                          {/* Interview Indicator for Board View */}
                          {job.interviewDate && (
                            <View
                              style={[
                                JobsStyles.interviewIndicator,
                                { marginTop: 8 },
                              ]}
                            >
                              <Feather
                                name="calendar"
                                size={10}
                                color="#D97706"
                              />
                              <Text
                                style={[
                                  JobsStyles.interviewIndicatorText,
                                  { fontSize: 10 },
                                ]}
                              >
                                {job.interviewDate}
                              </Text>
                            </View>
                          )}

                          {/* Schedule Interview Button for Board View */}
                          {job.status === 'Interview' && !job.interviewDate && (
                            <TouchableOpacity
                              style={[
                                JobsStyles.scheduleInterviewButton,
                                { marginTop: 8 },
                              ]}
                              onPress={() =>
                                navigation.navigate('JobDetails', { job })
                              }
                              activeOpacity={0.7}
                            >
                              <Feather
                                name="calendar-plus"
                                size={10}
                                color="#4F46E5"
                              />
                              <Text
                                style={[
                                  JobsStyles.scheduleInterviewText,
                                  { fontSize: 10 },
                                ]}
                              >
                                Schedule
                              </Text>
                            </TouchableOpacity>
                          )}
                        </TouchableOpacity>
                      )}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                    />
                  </View>
                ))}
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default JobsScreen;
