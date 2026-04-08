
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, FONTS } from '../constants';

const { width } = Dimensions.get('window');

interface NextInterviewProps {
  companyName?: string;
  position?: string;
  date?: string;
  time?: string;
  interviewType?: string;
  onStartPrep?: () => void;
  onScheduleInterview?: () => void;
  hasUpcomingInterview?: boolean;
}

const NextInterview = ({
  companyName = "Spotify",
  position = "Senior Product Designer",
  date = "Tomorrow",
  time = "10:00 AM",
  interviewType = "Technical Interview",
  onStartPrep,
  onScheduleInterview,
  hasUpcomingInterview = true,
}: NextInterviewProps) => {
  
  // Empty State Component
  if (!hasUpcomingInterview) {
    return (
      <View style={styles.emptyContainer}>
        {/* Decorative Elements */}
        <View style={styles.emptyDecorativeCircle1} />
        <View style={styles.emptyDecorativeCircle2} />
        
        {/* Icon */}
        <View style={styles.emptyIconContainer}>
          <Icon name="calendar" size={40} color="#6c63ff" />
        </View>
        
        {/* Title */}
        <Text style={styles.emptyTitle}>No Upcoming Interviews</Text>
        
        {/* Description */}
        <Text style={styles.emptyDescription}>
          You don't have any interviews scheduled yet. Start applying to jobs and track your interviews here.
        </Text>
        
        {/* Action Button */}
        <TouchableOpacity 
          style={styles.emptyButton} 
          onPress={onScheduleInterview}
          activeOpacity={0.8}
        >
          <Icon name="plus" size={20} color="#ffffff" />
          <Text style={styles.emptyButtonText}>Schedule Interview</Text>
        </TouchableOpacity>
        
        {/* Alternative Action */}
        <TouchableOpacity 
          style={styles.emptySecondaryButton} 
          onPress={onScheduleInterview}
          activeOpacity={0.7}
        >
          <Text style={styles.emptySecondaryButtonText}>Browse Jobs →</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  // Loaded State (with interview data)
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconContainer}>
            <Icon name="calendar" size={16} color="#ffffff" />
          </View>
          <Text style={styles.headerTitle}>NEXT INTERVIEW</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Upcoming</Text> 
        </View>
      </View>

      {/* Company Info */}

        <View style={styles.companyDetails}>
          <Text style={styles.companyName}>Get Ready For Your <Text style={{color: Colors.greenSoft}} > {companyName}</Text> Interview</Text>
        </View>
      
      {/* Position */}
     

      {/* Date and Time */}
      <View style={styles.datetimeContainer}>
        <View style={styles.datetimeItem}>
          <Icon name="clock" size={16} color={Colors.offWhite} />
          <Text style={styles.datetimeText}>
            {date} at {time} - <Text style={styles.position}> {position}</Text>
          </Text> 
        </View>
      </View>
    </View>
  );
};

// Alternative: Animated Empty State with Illustration

export const AnimatedEmptyState = ({ onScheduleInterview }: { onScheduleInterview?: () => void }) => {
  const scale1 = useRef(new Animated.Value(1)).current;
  const opacity1 = useRef(new Animated.Value(0.3)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const opacity2 = useRef(new Animated.Value(0.3)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const opacity3 = useRef(new Animated.Value(0.3)).current;

  const pulseAnim = (scale: Animated.Value, opacity: Animated.Value) => {
    return Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1.6,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ])
    );
  };

  useEffect(() => {
    const startPulse1 = () => {
      scale1.setValue(1);
      opacity1.setValue(0.3);
      pulseAnim(scale1, opacity1).start();
    };

    const startPulse2 = () => {
      setTimeout(() => {
        scale2.setValue(1);
        opacity2.setValue(0.3);
        pulseAnim(scale2, opacity2).start();
      }, 500);
    };

    const startPulse3 = () => {
      setTimeout(() => {
        scale3.setValue(1);
        opacity3.setValue(0.3);
        pulseAnim(scale3, opacity3).start();
      }, 1000);
    };

    startPulse1();
    startPulse2();
    startPulse3();

    return () => {
      scale1.stopAnimation();
      scale2.stopAnimation();
      scale3.stopAnimation();
    };
  }, [scale1, opacity1, scale2, opacity2, scale3, opacity3]);

  return (
    <View style={styles.animatedEmptyContainer}>
      {/* Animated dots background */}
      <View style={styles.dotsContainer}>
        <Animated.View style={[
          styles.dot,
          {
            transform: [{ scale: scale1 }],
            opacity: opacity1,
          }
        ]} />
        <Animated.View style={[
          styles.dot,
          {
            transform: [{ scale: scale2 }],
            opacity: opacity2,
          }
        ]} />
        <Animated.View style={[
          styles.dot,
          {
            transform: [{ scale: scale3 }],
            opacity: opacity3,
          }
        ]} />
      </View>
      <View style={styles.emptyContent}>
        {/* Empty Calendar Illustration */}
        <View style={styles.calendarIllustration}>
          <View style={styles.calendarHeader}>
            <View style={styles.calendarHeaderDot} />
            <View style={styles.calendarHeaderLine} />
          </View>
          <View style={styles.calendarBody}>
            <View style={styles.calendarRow} />
            <View style={styles.calendarRow} />
            <View style={styles.calendarRowShort} />
          </View>
          <View style={styles.slashIcon}>
            <Icon name="slash" size={30} color="#6c63ff" />
          </View>
        </View>
        
        <Text style={styles.animatedEmptyTitle}>No interviews scheduled</Text>
        <Text style={styles.animatedEmptyDescription}>
          Ready to ace your next interview? Start applying to positions that match your skills.
        </Text>
        
        <TouchableOpacity style={styles.animatedEmptyButton} onPress={onScheduleInterview}>
          <Icon name="search" size={20} color="#ffffff" />
          <Text style={styles.animatedEmptyButtonText}>Find Jobs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Loaded State Styles
  container: {
    backgroundColor: Colors.blue,
    borderRadius: 24,
    padding: 20,
    // marginHorizontal: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(108, 99, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:0,
  },
  headerTitle: {
    fontSize: 12,
    fontFamily: FONTS.fontFamily.medium,
    color: Colors.offWhite,
    letterSpacing: 1,
  },
  badge: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    color: '#5226a9',
    fontFamily: FONTS.fontFamily.medium,
  },
  companySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  companyIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(108, 99, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  companyInitial: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6c63ff',
  },
  companyDetails: {
    flex: 1,
  },
  companyName: {
    fontSize: FONTS.sizes.xl,
    fontFamily: FONTS.fontFamily.medium,
    color: '#ffffff',
    marginBottom: 4,
  },
  interviewType: {
    fontSize: 12,
    color: '#8a8a9e',
  },
  position: {
    // fontSize: 16,
    // color: '#e0e0e0',
    // marginBottom: 16,
  
  },
  datetimeContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    gap: 16,
  },
  datetimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  datetimeText: {
    fontSize: FONTS.sizes.xs,
    fontFamily:FONTS.fontFamily.medium,
    color: Colors.offWhite
  },
  prepButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prepButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Empty State Styles
  emptyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  emptyDecorativeCircle1: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
  },
  emptyDecorativeCircle2: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 14,
    color: '#8a8a9e',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  emptyButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    marginBottom: 12,
  },
  emptyButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
  emptySecondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  emptySecondaryButtonText: {
    fontSize: 14,
    color: '#6c63ff',
    fontWeight: '500',
  },

  // Animated Empty State Styles
  animatedEmptyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    marginHorizontal: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
  },
  dotsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6c63ff',
  },

  emptyContent: {
    padding: 24,
    alignItems: 'center',
  },
  calendarIllustration: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
    borderRadius: 20,
    padding: 12,
    marginBottom: 24,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.2)',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  calendarHeaderDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6c63ff',
  },
  calendarHeaderLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(108, 99, 255, 0.3)',
    borderRadius: 1,
  },
  calendarBody: {
    gap: 6,
  },
  calendarRow: {
    height: 8,
    backgroundColor: 'rgba(108, 99, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 6,
  },
  calendarRowShort: {
    width: '60%',
    height: 8,
    backgroundColor: 'rgba(108, 99, 255, 0.2)',
    borderRadius: 4,
  },
  slashIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
    transform: [{ rotate: '-15deg' }],
  },
  animatedEmptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  animatedEmptyDescription: {
    fontSize: 13,
    color: '#8a8a9e',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
  },
  animatedEmptyButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  animatedEmptyButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default NextInterview;