import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { JobsStyles, getStatusBadgeStyle } from './styles/JobsStyles';

type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  status: JobStatus;
}

const JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$180k - $220k',
    status: 'Offer',
  },
  {
    id: '2',
    title: 'React Engineer',
    company: 'Vercel',
    location: 'Remote',
    salary: '$160k - $200k',
    status: 'Offer',
  },
  {
    id: '3',
    title: 'Product Engineer',
    company: 'Linear',
    location: 'Remote',
    salary: '$150k - $180k',
    status: 'Interview',
  },
  {
    id: '4',
    title: 'UI Engineer',
    company: 'Loom',
    location: 'Remote',
    salary: '$130k - $160k',
    status: 'Applied',
  },
];

export const JobsScreen: React.FC = () => {
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

  const renderJobCard = (job: Job) => (
    <View style={JobsStyles.card}>
      <View style={{ flex: 1 }}>
        <Text style={JobsStyles.title}>{job.title}</Text>
        <Text style={JobsStyles.company}>{job.company}</Text>
        <Text style={JobsStyles.meta}>
          📍 {job.location} 💰 {job.salary}
        </Text>
      </View>
      <View style={getStatusBadgeStyle(job.status)}>
        <Text style={JobsStyles.statusText}>{job.status}</Text>
      </View>
    </View>
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
          {/* content */}
          <View style={JobsStyles.contentContainer}>
            <View style={JobsStyles.header}>
              <View>
                <Text style={JobsStyles.heading}>Job Tracker</Text>
                <Text style={JobsStyles.subHeading}>
                  {JOBS.length} applications
                </Text>
              </View>

              <TouchableOpacity style={JobsStyles.addButton}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>
                  + Add Job
                </Text>
              </TouchableOpacity>
            </View>

            <View style={JobsStyles.toggleContainer}>
              <TouchableOpacity
                style={[
                  JobsStyles.toggleButton,
                  viewMode === 'list' && JobsStyles.activeToggle,
                ]}
                onPress={() => setViewMode('list')}
              >
                <Text>List</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  JobsStyles.toggleButton,
                  viewMode === 'board' && JobsStyles.activeToggle,
                ]}
                onPress={() => setViewMode('board')}
              >
                <Text>Board</Text>
              </TouchableOpacity>
            </View>

            {/* LIST VIEW */}
            {viewMode === 'list' && (
              <>
                {/* Filter Tabs */}
                <View>
                  <FlatList
                    data={['All', 'Applied', 'Interview', 'Offer', 'Rejected']}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginVertical: 10 }}
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
                          style={{
                            color:
                              filter === item ? '#fff' : Colors.textSecondary,
                          }}
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
                  contentContainerStyle={{ paddingBottom: 100 }}
                />
              </>
            )}

            {/* BOARD VIEW */}
            {viewMode === 'board' && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 20 }}
              >
                {(['Applied', 'Interview', 'Offer', 'Rejected'] as JobStatus[]).map(
                  column => (
                    <View key={column} style={JobsStyles.boardColumn}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 15,
                        }}
                      >
                        <Text style={JobsStyles.boardTitle}>{column}</Text>

                        <View style={{backgroundColor: Colors.background, padding: 2, borderRadius: 15, width: 25, height:  25, alignItems: 'center', justifyContent: 'center'}}>
                          <Text
                            style={{
                              color: Colors.textSecondary,
                              fontSize: 15,
                            
                            }}
                          >
                            {groupedJobs[column].length}
                          </Text>
                        </View>
                      </View>

                      {groupedJobs[column].map(job => (
                        <View key={job.id} style={JobsStyles.boardCard}>
                          <Text style={JobsStyles.title}>{job.title}</Text>
                          <Text style={JobsStyles.company}>{job.company}</Text>
                          <Text style={JobsStyles.meta}>{job.salary}</Text>
                        </View>
                      ))}
                    </View>
                  ),
                )}
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default JobsScreen;
