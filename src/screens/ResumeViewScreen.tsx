import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Pdf from 'react-native-pdf';
import { Colors } from '../constants';
import { Header } from '../components';
import { resumes } from '../data/resumes';
import { ResumeStyles as styles } from './styles/ResumeStyles';

type ResumeViewRouteProp = RouteProp<
  { ResumeView: { resumeId: string } },
  'ResumeView'
>;

const { width: screenWidth } = Dimensions.get('window');

export const ResumeViewScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<ResumeViewRouteProp>();
  const { resumeId } = route.params;
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  const resume = resumes.find(r => r.id === resumeId);

  if (!resume) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Resume not found</Text>
      </SafeAreaView>
    );
  }

  // Get the PDF source - for assets in React Native bundle
  const getPdfSource = () => {
    if (resume.pdfUri) {
      return require('../assets/file/Sudev_Majhi__CV.pdf');
    }
    return null;
  };

  const pdfSource = getPdfSource();

  return (
    <>
      <View style={styles.mainContainer}>
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
            style={[styles.contentContainer]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {/* PDF Viewer Section - LinkedIn Style */}
            {pdfSource && (
              <View style={[styles.card, styles.cardMarginTop]}>
                <View style={styles.pdfContainer}>
                  {isPdfLoading && (
                    <View style={styles.pdfLoadingContainer}>
                      <ActivityIndicator size="large" color={Colors.primary} />
                      <Text style={[styles.subtitle, styles.pdfLoadingText]}>
                        Loading PDF...
                      </Text>
                    </View>
                  )}
                  <Pdf
                    source={pdfSource}
                    style={styles.pdfView}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`PDF loaded: ${numberOfPages} pages`);
                      setIsPdfLoading(false);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                      console.log(`Current page: ${page}/${numberOfPages}`);
                    }}
                    onError={error => {
                      console.log('PDF load error:', error);
                      setIsPdfLoading(false);
                    }}
                    enablePaging={true}
                    horizontal={false}
                    enableAntialiasing={true}
                    fitPolicy={0}
                    spacing={0}
                  />
                </View>

                {/* PDF Page Indicator */}
                <View style={styles.pdfIndicator}>
                  <Feather
                    name="file-text"
                    size={16}
                    color={Colors.textSecondary}
                  />
                  <Text style={[styles.subtitle, { marginLeft: 6 }]}>
                    PDF Document
                  </Text>
                </View>
              </View>
            )}

            {/* Resume Details Section */}
            <View style={styles.card}>
              <View style={styles.qrSectionContainer}>
                <View style={styles.qrColumn}>
                  <Text style={styles.qrTitle}>QR Code</Text>
                  <Text style={styles.qrSubtitle}>
                    Share your resume via QR
                  </Text>
                </View>

                <View style={styles.meta}>
                  <TouchableOpacity style={styles.showQRButton}>
                    <Text
                      style={[
                        styles.secondaryButtonText,
                        { color: Colors.primary },
                      ]}
                    >
                      Show QR
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* generated or container*/}
              <View style={styles.qrCodeContainer}>
                {/* generated pdf link */}

                <Text>https://careervault.app/r/tech-2024</Text>

                <TouchableOpacity style={styles.copyLinkButton}>
                  <Feather name="link-2" size={18} color={Colors.green} />
                  <Text
                    style={[
                      styles.secondaryButtonText,
                      { color: Colors.green, marginLeft: 7 },
                    ]}
                  >
                    Copy Link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={styles.editResumeButton}>
                <Feather name="edit" size={18} color="white" />
                <Text style={[styles.secondaryButtonText, styles.buttonIcon, { color: 'white' }]}>
                  Update Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.shareResumeButton}>
                <Feather
                  name="share-2"
                  size={18}
                  color={Colors.textSecondary}
                />
                <Text style={[styles.secondaryButtonText, styles.buttonIcon]}>
                  Share Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.downloadPdfButton}>
                <Feather
                  name="download"
                  size={18}
                  color={Colors.textSecondary}
                />
                <Text style={[styles.secondaryButtonText, styles.buttonIcon]}>
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
