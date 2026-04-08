import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, FONTS } from '../constants';

const { width } = Dimensions.get('window');

interface OverviewItem {
  icon: string;
  title: string;
  value: string;
  trend?: number; // Optional trend percentage
  color?: string; // Optional custom color
}

const OverviewView = ({
  icon,
  title,
  value,
  trend,
  color,
}: {
  icon: string;
  title: string;
  value: string;
  trend?: number;
  color?: string;
}) => {
  const getIconColor = () => {
    if (color) return color;
    if (title === 'Offers') return '#ff4757';
    if (title === 'Interview Rate') return '#6c63ff';
    if (title === 'Applications') return '#4ecdc4';
    return '#8a8a9e';
  };

  const getValueColor = () => {
    if (color) return color;
    if (title === 'Offers') return '#ff4757';
    if (title === 'Interview Rate') return '#6c63ff';
    return '#ffffff';
  };

  const isPositiveTrend = trend && trend > 0;

  return (
    <View style={styles.overviewCard}>
      {/* Icon Container */}
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: `${getIconColor()}15` },
        ]}
      >
        <Icon name={icon} size={22} color={getIconColor()} />
      </View>

      {/* Value and Title */}
      <Text style={[styles.value, { color: getValueColor() }]}>{value}</Text>
      <Text style={styles.title}>{title}</Text>

      {/* Optional Trend Indicator */}
      {trend !== undefined && (
        <View style={styles.trendContainer}>
          <Icon
            name={isPositiveTrend ? 'trending-up' : 'trending-down'}
            size={12}
            color={isPositiveTrend ? '#4ecdc4' : '#ff4757'}
          />
          <Text
            style={[
              styles.trendText,
              { color: isPositiveTrend ? '#4ecdc4' : '#ff4757' },
            ]}
          >
            {Math.abs(trend)}%
          </Text>
        </View>
      )}
    </View>
  );
};

// Grid Container Component
const OverviewGrid = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.gridContainer}>{children}</View>
);

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    marginVertical: 16,
    gap: 15,
    // padding: 16,
    borderRadius: 20,
    // backgroundColor: Colors.purpleSoft,
     // Shadow for iOS
    // shadowColor: '#10073a5c',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.3,
    // shadowRadius: 12,
    // elevation: 10,
  },
  overviewCard: {
    // width: (width - 82) / 2,
    width: '48%',
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    // backdropFilter: 'blur(10px)',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Shadow for Android
    elevation: 2,
    // borderWidth:0.8
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  value: {
    fontSize: FONTS.sizes.xxl,
    fontFamily: FONTS.fontFamily.semibold,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.semibold,
    color: '#8a8a9e',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  trendText: {
    fontSize: 11,
    fontWeight: '600',
  },
});

export { OverviewView, OverviewGrid };
