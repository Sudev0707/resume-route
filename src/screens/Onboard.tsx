import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardStyles } from './styles/OnboardStyles';

//
type navProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: 'Manage Your Resumes',
    desc: 'Upload, track, and share multiple resumes.\nSee who views your resume in real-time.',
    // icon: require("../assets/resume.png"),
  },
  {
    id: 2,
    title: 'Track Job Applications',
    desc: 'Never lose track of a job application. Manage your pipeline from applied to offer.',
    // icon: require("../assets/job.png"),
  },
  {
    id: 3,
    title: 'Get Hired Faster',
    desc: 'Smart suggestions & resume score.\nBoost your chances with insights.',
    // icon: require("../assets/hire.png"),
  },
];

const Onboard = () => {
  const flatRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<navProp>();

  const handleNext = () => {
    if (index < slides.length - 1) {
      flatRef.current?.scrollToIndex({ index: index + 1 });
      setIndex(index + 1);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? '#f8fafc' : 'transparent'}
        barStyle="dark-content"
        translucent={Platform.OS === 'ios'}
      />
      <SafeAreaView style={OnboardStyles.container}>
        <TouchableOpacity
          style={OnboardStyles.skipBtn}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={OnboardStyles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={OnboardStyles.flatListWrapper}>
          <FlatList
            data={slides}
            ref={flatRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
                listener: (event: any) => {
                  const x = event.nativeEvent.contentOffset.x;
                  setIndex(Math.round(x / width));
                },
              },
            )}
            renderItem={({ item }) => (
              <View style={OnboardStyles.slide}>
                <Text style={OnboardStyles.title}>{item.title}</Text>
                <Text style={OnboardStyles.desc}>{item.desc}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={OnboardStyles.flatListContent}
          />
        </View>

        <View style={OnboardStyles.dotsWrapper}>
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const outputRange = [8, 22, 8];
            const widthAnim = scrollX.interpolate({
              inputRange,
              outputRange,
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[OnboardStyles.dot, { width: widthAnim }]}
              />
            );
          })}
        </View>

        <TouchableOpacity onPress={handleNext} style={OnboardStyles.nextBtn} activeOpacity={0.7} >
          <Text style={OnboardStyles.nextText}>
            {index === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export { Onboard };
