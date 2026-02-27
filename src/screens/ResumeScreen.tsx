import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../constants';
import { ResumeStyles as styles } from './styles/ResumeStyles';
import Feather from 'react-native-vector-icons/Feather';

const resumes = [
  {
    id: '1',
    title: 'Tech Resume 2024',
    date: 'Updated Feb 10, 2024',
    tags: ['Frontend', 'React', 'TypeScript'],
    views: 247,
    downloads: 34,
    score: 92,
    expiry: 'No expiry',
    color: '#22c55e',
  },
  {
    id: '2',
    title: 'Full-Stack Developer',
    date: 'Updated Mar 5, 2024',
    tags: ['Full-Stack', 'Node.js', 'React'],
    views: 183,
    downloads: 21,
    score: 85,
    expiry: '30 days',
    color: '#f97316',
  },
  {
    id: '3',
    title: 'Startup-Ready CV',
    date: 'Updated Mar 18, 2024',
    tags: ['Startup', 'Leadership', 'Product'],
    views: 95,
    downloads: 12,
    score: 78,
    expiry: '7 days',
    color: '#f97316',
  },
];

const ProgressCircle = ({ score, color }: { score: number; color: string }) => {
  const radius = 28;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  return (
    <View style={styles.progressContainer}>
      <Svg width={70} height={70}>
        <Circle
          stroke="#e5e7eb"
          fill="none"
          cx="35"
          cy="35"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx="35"
          cy="35"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          rotation="-90"
          origin="35,35"
        />
      </Svg>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
};

const ResumeCard = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.cardHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.date}</Text>

          <View style={styles.tagRow}>
            {item.tags.map((tag: string) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <ProgressCircle score={item.score} color={item.color} />
      </View>

      <View style={styles.statsRow}>
        <Text style={styles.statText}>👁 {item.views} views</Text>
        <Text style={styles.statText}>⬇ {item.downloads} downloads</Text>
        <Text style={styles.expiry}>{item.expiry}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Copy Link</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Analytics</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const ResumeScreen: React.FC = () => {
  const navigation = useNavigation();

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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
              style={styles.backButton}
            >
              <Feather name="chevron-left" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Resumes</Text>
          </View>
          <View style={styles.contentContainer}>
            <FlatList
              data={resumes}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <ResumeCard item={item} />}
              contentContainerStyle={styles.flatListContent}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};
