import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, FONTS } from '../constants';

const { width } = Dimensions.get('window');

interface PerformanceCardProps {
  activeImpactPercentage?: number;
  applicationsSent?: number;
  interviewRate?: number | null;
  isLoading?: boolean;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  activeImpactPercentage = 0,
  applicationsSent = 0,
  interviewRate = null,
  isLoading = false,
}) => {
  // Calculate the circle progress (0 to 1)
  const progress = Math.min(Math.max(activeImpactPercentage / 100, 0), 1);
  const circumference = 2 * Math.PI * 70; // radius = 70
  const strokeDashoffset = circumference * (1 - progress);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.gradientBackground}>
          <ActivityIndicator size="large" color="#6c63ff" />
          <Text style={styles.loadingText}>Loading performance data...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Performance Overview</Text>
          <Text style={styles.subtitle}>
            Tracking your metrics for success.
          </Text>
        </View>

        {/* Circular Progress Section */}
        <View style={styles.progressSection}>
          <View style={styles.circularProgressContainer}>
            {/* Background Circle */}
            <View style={styles.circleBackground}>
              <View style={styles.circleInner} />
            </View>

            {/* Progress Circle with SVG-like drawing using absolute positioned border */}
            <View style={styles.progressRingWrapper}>
              <View
                style={[
                  styles.progressRing,
                  {
                    borderTopColor: progress > 0.25 ? '#6c63ff' : 'transparent',
                    borderRightColor:
                      progress > 0.5 ? '#6c63ff' : 'transparent',
                    borderBottomColor:
                      progress > 0.75 ? '#6c63ff' : 'transparent',
                    borderLeftColor: progress > 0 ? '#6c63ff' : 'transparent',
                    transform: [{ rotate: '-45deg' }],
                  },
                ]}
              />
            </View>

            {/* Percentage Text */}
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageValue}>
                {Math.round(activeImpactPercentage)}%
              </Text>
              <Text style={styles.percentageLabel}>Active Impact</Text>
            </View>
          </View>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsContainer}>
          <View style={styles.metricCard}>
            <View style={styles.metricIconContainer}>
              <Icon name="send" size={24} color="#6c63ff" />
            </View>
            <Text style={styles.metricValue}>
              {applicationsSent} this month
            </Text>
            <Text style={styles.metricLabel}>Applications Sent</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.metricCard}>
            <View style={styles.metricIconContainer}>
              <Icon name="bar-chart-2" size={24} color="#6c63ff" />
            </View>
            <Text style={styles.metricValue}>
              {interviewRate !== null && interviewRate !== undefined
                ? `${interviewRate}%`
                : 'No data available'}
            </Text>
            <Text style={styles.metricLabel}>Interview Rate</Text>
          </View>
        </View>

        {/* Empty State Message */}
        {applicationsSent === 0 && interviewRate === null && (
          <View style={styles.emptyStateContainer}>
            <View style={styles.emptyStateIconContainer}>
              <Icon name="bar-chart-2" size={48} color="#6c63ff" />
            </View>
            <Text style={styles.emptyStateTitle}>No data yet.</Text>
            <Text style={styles.emptyStateMessage}>
              Start tracking to see your progress and unlock insights.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    alignSelf: 'center',
    borderRadius: 28,
    overflow: 'hidden',
    marginVertical: 16,
    // Shadow for iOS
    shadowColor: '#898989',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    // Shadow for Android
    elevation: 6,
  },
  gradientBackground: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#1a1a2e',
    // backgroundColor: '#f1e9ff',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.fontFamily.medium,
    color: '#ffffff',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#848494',
    letterSpacing: 0.3,
  },
  progressSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
  },
  circularProgressContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleBackground: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 122,
    height: 122,
    borderRadius: 70,
    backgroundColor: '#1a1a2e',
    // backgroundColor: '#f5f0ff',
    // paddingVertical:9
  },
  progressRingWrapper: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressRing: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 12,
    borderColor: '#6c63ff',
    position: 'absolute',
  },
  percentageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  percentageValue: {
    fontSize: 40,
    fontFamily: FONTS.fontFamily.medium,
    color: Colors.purpleSoft,
    letterSpacing: 1,
    padding:0,
    // borderWidth:0.8,
    height:50
  },
  percentageLabel: {
    fontSize: 9,
    fontFamily: FONTS.fontFamily.medium,
    color: '#848494',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  metricsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    // backgroundColor: 'rgb(232, 222, 253)',
    borderRadius: 20,
    marginTop: 24,
    marginBottom: 8,
    paddingVertical: 16,
  },
  metricCard: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  metricIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(108, 99, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  metricValue: {
    fontSize: 16,
    fontFamily: FONTS.fontFamily.medium,
    color: Colors.purpleSoft,
    textAlign: 'center',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    fontFamily: FONTS.fontFamily.medium,
    color: '#848494',
    textAlign: 'center',
  },
  divider: {
    width: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    // backgroundColor: 'rgba(6, 1, 23, 0.07)',
    marginVertical: 8,
  },
  emptyStateContainer: {
    alignItems: 'center',
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  emptyStateIconContainer: {
    marginBottom: 12,
    opacity: 0.7,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  emptyStateMessage: {
    fontSize: 13,
    color: '#8a8a9e',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#8a8a9e',
    textAlign: 'center',
  },
});

export default PerformanceCard;
