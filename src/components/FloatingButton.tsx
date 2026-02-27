import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Animated,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, FONTS } from '../constants';

interface FloatingButtonProps {
  onPress?: () => void;
  onUploadPress?: () => void;
  onAddJobPress?: () => void;
  icon?: React.ReactNode;
  iconColor?: string;
  style?: ViewStyle;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  onUploadPress,
  onAddJobPress,
  icon,
  iconColor = Colors.textDark,
  style,
}) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    Animated.spring(animation, {
      toValue: open ? 0 : 1,
      useNativeDriver: true,
      friction: 6,
    }).start();
    setOpen(!open);
  };

  const handleMainButtonPress = () => {
    if (onPress) {
      onPress();
    }
    toggleMenu();
  };

  const handleUploadPress = () => {
    if (onUploadPress) {
      onUploadPress();
    }
    navigation.navigate('ResumeUpload' as never);
     toggleMenu();
  };

  const handleAddJobPress = () => {
    if (onAddJobPress) {
      onAddJobPress();
    }
    navigation.navigate('AddJob' as never);
     toggleMenu();
  };

  const uploadTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  const addJobTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  // Opacity animation - buttons start hidden (opacity: 0) and become visible
  const uploadOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const addJobOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  // Scale animation - buttons start scaled down and grow to full size
  const uploadScale = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 0.5, 1],
  });

  const addJobScale = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 0.5, 1],
  });

  return (
    <>
      <View style={[styles.container, style]}>
        {/* Upload Resume Button */}
        <Animated.View
          style={[
            styles.optionContainer,
            {
              transform: [
                { translateY: uploadTranslate },
                { scale: uploadScale },
              ],
              opacity: uploadOpacity,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleUploadPress}
            activeOpacity={0.8}
          >
            <Feather
              name="file-text"
              size={FONTS.sizes.md}
               color={Colors.primary}
            />
            <Text style={styles.optionText}>Upload Resume</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Add Job Button */}
        <Animated.View
          style={[
            styles.optionContainer,
            {
              transform: [
                { translateY: addJobTranslate },
                { scale: addJobScale },
              ],
              opacity: addJobOpacity,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleAddJobPress}
            activeOpacity={0.8}
          >
            <Feather
              name="briefcase"
              size={FONTS.sizes.md}
              color={Colors.primary}
            />
            <Text style={styles.optionText}>Add Job</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Main Floating Button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={handleMainButtonPress}
          activeOpacity={0.8}
        >
          <Animated.View style={{ transform: [{ rotate }] }}>
            {icon || (
              <Feather
                name="plus"
                size={FONTS.sizes.xl}
                color={iconColor}
              />
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingRight: 20,
    zIndex: 999,
  },
  fab: {
    backgroundColor: '#1E88E5',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#bbbbbb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  optionContainer: {
    marginBottom: 5,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  optionText: {
    marginLeft: 10,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#333',
  },
});
