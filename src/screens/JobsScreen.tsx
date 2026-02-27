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
  appliedOn: string;
}

const JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$180k - $220k',
    status: 'Offer',
    appliedOn: '2025-12-10',
  },
  {
    id: '2',
    title: 'React Engineer',
    company: 'Vercel',
    location: 'Remote',
    salary: '$160k - $200k',
    status: 'Offer',
    appliedOn: '2026-01-05',
  },
  {
    id: '3',
    title: 'Product Engineer',
    company: 'Linear',
    location: 'Remote',
    salary: '$150k - $180k',
    status: 'Interview',
    appliedOn: '2026-02-01',
  },
  {
    id: '4',
    title: 'UI Engineer',
    company: 'Loom',
    location: 'Remote',
    salary: '$130k - $160k',
    status: 'Applied',
    appliedOn: '2026-02-20',
  },

  // --------------------------
  //        NEW JOBS
  // --------------------------

  {
    id: '5',
    title: 'Mobile Engineer (React Native)',
    company: 'Shopify',
    location: 'Toronto, Canada',
    salary: '$140k - $180k',
    status: 'Applied',
    appliedOn: '2026-02-22',
  },
  {
    id: '6',
    title: 'Full Stack Developer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    salary: '$180k - $230k',
    status: 'Interview',
    appliedOn: '2026-01-28',
  },
  {
    id: '7',
    title: 'Backend Engineer',
    company: 'Airbnb',
    location: 'Remote',
    salary: '$160k - $210k',
    status: 'Applied',
    appliedOn: '2026-02-12',
  },
  {
    id: '8',
    title: 'Systems Engineer',
    company: 'Cloudflare',
    location: 'Remote',
    salary: '$140k - $175k',
    status: 'Rejected',
    appliedOn: '2025-12-18',
  },
  {
    id: '9',
    title: 'Frontend Developer',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    salary: '$120k - $150k',
    status: 'Applied',
    appliedOn: '2026-02-10',
  },
  {
    id: '10',
    title: 'Android Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$170k - $220k',
    status: 'Interview',
    appliedOn: '2026-01-14',
  },
  {
    id: '11',
    title: 'iOS Engineer',
    company: 'Apple',
    location: 'Cupertino, CA',
    salary: '$180k - $230k',
    status: 'Applied',
    appliedOn: '2026-02-05',
  },
  {
    id: '12',
    title: 'Software Engineer II',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: '$150k - $190k',
    status: 'Offer',
    appliedOn: '2026-01-03',
  },
  {
    id: '13',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: '$155k - $195k',
    status: 'Interview',
    appliedOn: '2026-02-15',
  },
  {
    id: '14',
    title: 'SDE 1',
    company: 'Uber',
    location: 'Remote',
    salary: '$130k - $160k',
    status: 'Applied',
    appliedOn: '2026-02-25',
  },
  {
    id: '15',
    title: 'AI Engineer',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    salary: '$200k - $300k',
    status: 'Applied',
    appliedOn: '2026-02-26',
  },
  {
    id: '16',
    title: 'ML Engineer',
    company: 'Nvidia',
    location: 'Remote',
    salary: '$180k - $250k',
    status: 'Rejected',
    appliedOn: '2026-01-11',
  },
  {
    id: '17',
    title: 'Security Engineer',
    company: 'GitHub',
    location: 'Remote',
    salary: '$150k - $190k',
    status: 'Applied',
    appliedOn: '2026-02-08',
  },
  {
    id: '18',
    title: 'Site Reliability Engineer',
    company: 'Datadog',
    location: 'Remote',
    salary: '$145k - $185k',
    status: 'Interview',
    appliedOn: '2026-01-22',
  },
  {
    id: '19',
    title: 'Junior Frontend Developer',
    company: 'Figma',
    location: 'San Francisco, CA',
    salary: '$110k - $140k',
    status: 'Applied',
    appliedOn: '2026-02-27',
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
    <TouchableOpacity style={JobsStyles.card} activeOpacity={0.9}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={JobsStyles.title}>{job.title}</Text>
          <Text style={JobsStyles.company}>{job.company}</Text>
          <Text style={JobsStyles.meta}>
            <Feather name="map-pin" size={15} color={Colors.red}  /> {job.location} <Feather name="dollar-sign" size={14} color={Colors.green} /> {job.salary}
          </Text>
        </View>
        <View style={getStatusBadgeStyle(job.status)}>
          <Text style={JobsStyles.statusText}>{job.status}</Text>
        </View>
      </View>

      <Text style={{ color: Colors.textSecondary, marginTop: 8 }}>
        Applied on {job.appliedOn}
      </Text>
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
                <Feather name="list" size={16} color={Colors.textSecondary} />
                <Text style={{ marginLeft: 8, color: Colors.textSecondary }}>List</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  JobsStyles.toggleButton,
                  viewMode === 'board' && JobsStyles.activeToggle,
                ]}
                onPress={() => setViewMode('board')}
              >
                <Feather name="grid" size={15} color={Colors.textSecondary} />
                <Text style={{ marginLeft: 8, color: Colors.textSecondary }}>Board</Text>
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
                {(
                  ['Applied', 'Interview', 'Offer', 'Rejected'] as JobStatus[]
                ).map(column => (
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

                      <View
                        style={{
                          backgroundColor: Colors.background,
                          padding: 2,
                          borderRadius: 15,
                          width: 25,
                          height: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
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

                    <FlatList
                      data={groupedJobs[column]}
                      keyExtractor={job => job.id}
                      renderItem={({ item: job }) => (
                        <TouchableOpacity style={JobsStyles.boardCard} activeOpacity={0.6}>
                          <Text style={JobsStyles.title}>{job.title}</Text>
                          <Text style={JobsStyles.company}>{job.company}</Text>
                          <Text style={JobsStyles.meta} numberOfLines={1}  >
                              <Feather name="map-pin" size={15} color={Colors.red}  /> {job.location} <Feather name="dollar-sign" size={14} color={Colors.green} /> {job.salary}
                          </Text>
                        </TouchableOpacity>
                      )}
                      showsVerticalScrollIndicator={false}
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
