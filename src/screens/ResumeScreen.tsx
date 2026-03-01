import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../constants';
import { ResumeStyles as styles } from './styles/ResumeStyles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { resumes } from '../data/resumes';
import { Header } from '../components';
import QEIcon from '../assets/icons/icons8-qr-24.png'

const ProgressCircle = ({ score, color }: { score: number; color: string }) => {
  const radius = 20;
  const strokeWidth = 5;
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
    <View style={styles.card}>
      <TouchableOpacity style={styles.touchableCard} activeOpacity={0.8} >
        <View style={styles.cardHeader}>
          <View style={{ flex: 1 }}>
            <View style={styles.meta}>
              <View style={styles.iconBox}>
                <Feather name="file" size={20} color={Colors.primary} />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.date}</Text>
              </View>
            </View>

            {/* <View style={styles.tagRow}>
            {item.tags.map((tag: string) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View> */}
          </View>

          {/* <ProgressCircle score={item.score} color={item.color} /> */}
        </View>

        <View style={styles.statsRow}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Feather name="eye" size={15} color={Colors.textSecondary} />
            <Text style={[styles.statText, { marginLeft: 4 }]}>
              {item.views}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Feather name="download" size={15} color={Colors.textSecondary} />
            <Text style={[styles.statText, { marginLeft: 4 }]}>
              {item.downloads}{' '}
            </Text>
          </View>

          <Text style={styles.expiry}>{item.expiry}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.secondaryButton,
              { backgroundColor: Colors.greenSoft },
            ]}
          >
            <Feather name="link-2" size={15} color={Colors.green} />
            <Text
              style={[
                styles.secondaryButtonText,
                { marginLeft: 4, color: Colors.green },
              ]}
            >
              Copy Link
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Feather name="share-2" size={14} color={Colors.textSecondary} />
            <Text style={[styles.secondaryButtonText, { marginLeft: 4 }]}>
              Share
            </Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.secondaryButton}>
           <Image source ={QEIcon} style={styles.QRIcon} resizeMode='contain' />
            <Text style={[styles.secondaryButtonText, { marginLeft: 4 }]}>
              QR
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Analytics</Text>
        </TouchableOpacity> */}
        </View>

        <TouchableOpacity style={styles.secondaryButtonDelete}>
          <Feather name="trash-2" size={14} color={Colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ResumeScreen: React.FC = () => {
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
          <Header title="Resumes" showBackButton />
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
