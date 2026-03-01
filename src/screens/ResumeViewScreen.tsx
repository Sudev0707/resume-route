import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../constants';
import { Header } from '../components';
import { resumes } from '../data/resumes';
import { ResumeStyles as styles } from './styles/ResumeStyles';

type ResumeViewRouteProp = RouteProp<{ ResumeView: { resumeId: string } }, 'ResumeView'>;

export const ResumeViewScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<ResumeViewRouteProp>();
  const { resumeId } = route.params;
  
  const resume = resumes.find(r => r.id === resumeId);

  if (!resume) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Resume not found</Text>
      </SafeAreaView>
    );
  }

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
          <Header 
            title={resume.title} 
            showBackButton 
            onBackPress={() => navigation.goBack()} 
          />
          <ScrollView 
            style={[styles.contentContainer, {paddingHorizontal: 15,}]}
            showsVerticalScrollIndicator={false}
          >
            {/* <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={{ flex: 1 }}>
                  <View style={styles.meta}>
                    <View style={styles.iconBox}>
                      <Feather name="file" size={24} color={Colors.primary} />
                    </View>
                    <View>
                      <Text style={styles.title}>{resume.title}</Text>
                      <Text style={styles.subtitle}>{resume.date}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <Feather name="eye" size={15} color={Colors.textSecondary} />
                  <Text style={[styles.statText, { marginLeft: 4 }]}>
                    {resume.views} views
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <Feather name="download" size={15} color={Colors.textSecondary} />
                  <Text style={[styles.statText, { marginLeft: 4 }]}>
                    {resume.downloads} downloads
                  </Text>
                </View>
                <Text style={styles.expiry}>{resume.expiry}</Text>
              </View>
            </View> */}

            {/* Resume Details Section */}
            <View style={[styles.card, { marginTop: 16, padding: 16}]}>
              <Text style={[styles.title, { marginBottom: 12 }]}>Resume Details</Text>
              <View style={styles.meta}>
                <Feather name="file-text" size={18} color={Colors.textSecondary} />
                <Text style={[styles.subtitle, { marginLeft: 8 }]}>
                  PDF Document
                </Text>
              </View>
              <View style={[styles.meta, { marginTop: 8 }]}>
                <Feather name="calendar" size={18} color={Colors.textSecondary} />
                <Text style={[styles.subtitle, { marginLeft: 8 }]}>
                  Uploaded on {resume.date}
                </Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={{ padding: 16, gap: 12 }}>
              <TouchableOpacity 
                style={[styles.secondaryButton, { backgroundColor: Colors.primary, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }]}
              >
                <Feather name="edit" size={18} color="white" />
                <Text style={[styles.secondaryButtonText, { marginLeft: 8, color: 'white' }]}>
                  Edit Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.secondaryButton, { backgroundColor: Colors.greenSoft, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }]}
              >
                <Feather name="link-2" size={18} color={Colors.green} />
                <Text style={[styles.secondaryButtonText, { marginLeft: 8, color: Colors.green }]}>
                  Copy Link
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.secondaryButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }]}
              >
                <Feather name="share-2" size={18} color={Colors.textSecondary} />
                <Text style={[styles.secondaryButtonText, { marginLeft: 8 }]}>
                  Share Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.secondaryButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }]}
              >
                <Feather name="download" size={18} color={Colors.textSecondary} />
                <Text style={[styles.secondaryButtonText, { marginLeft: 8 }]}>
                  Download PDF
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};
