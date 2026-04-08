import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../constants';
import { FloatingButton } from '../components/FloatingButton';
import { HomeStyles } from './styles/HomeStyles';
import PerformanceCard from '../components/PerformanceCard';
import { OverviewGrid, OverviewView } from '../components/OverviewView';

export const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle="light-content"
          translucent
        />
        <SafeAreaView
          style={HomeStyles.container}
          edges={['top', 'right', 'bottom', 'left']}
        >
          {/* ========= TOP HEADER ========= */}
          <View style={HomeStyles.header}>
              <Text style={HomeStyles.appName}>Resumeroute</Text>
            {/* <Text style={HomeStyles.greeting}>Good morning 👋</Text> */}
            {/* <Text style={HomeStyles.userName}>Alex Morgan</Text> */}
            {/* <Text style={HomeStyles.userRole}>Senior Frontend Engineer</Text> */}
          </View>
          <ScrollView
            style={HomeStyles.contentContainer}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
            showsVerticalScrollIndicator={true}
            bounces={true}
            keyboardShouldPersistTaps="handled"
          >
            {/* ========= OVERVIEW SECTION ========= */}
          <View style={HomeStyles.welcomeSection}>
  <Text style={HomeStyles.headerText}>
    Welcome to Your Sanctuary,{' '}
    <Text style={HomeStyles.userNameHighlight}>Sudev</Text>
  </Text>
  
  <View style={HomeStyles.subtitleWrapper}>
    <View style={HomeStyles.quoteMark}>
      <Text style={HomeStyles.quoteSymbol}>"</Text>
    </View>
    <Text style={HomeStyles.headerTextSecond}>
      Your career journey starts here. Add your first job or upload a resume to see your momentum grow.
    </Text>
  </View>
</View>
           
            {/* <View style={HomeStyles.overviewGrid}>
              <OverviewView icon="people" title="Interview Rate" value="63%" />
              <OverviewView icon="briefcase" title="Applications" value="8" />
              <OverviewView icon="document-text" title="Interviewa" value="8" />
              <OverviewView icon="trophy" title="Offers" value="2" />
            </View> */}

            <PerformanceCard
              activeImpactPercentage={63}
              applicationsSent={8}
              interviewRate={8}
              isLoading={isLoading}
            />

             {/* <View style={HomeStyles.sectionRow}>
              <Feather name="trending-up" size={20} color={Colors.primary} />
              <Text style={HomeStyles.sectionTitle}>Performance Overview</Text>
            </View> */}

            <OverviewGrid>
              <OverviewView
                icon="send"
                title="Applications Sent"
                value="24"
                color="#4ecdc4"
              />
              <OverviewView
                icon="message-circle"
                title="Responses"
                value="12"
                color="#6c63ff"
              />
              <OverviewView
                icon="users"
                title="Interviews"
                value="8"
                color="#f9ca24"
              />
              <OverviewView
                icon="award"
                title="Offers"
                value="2"
                color="#ff4757"
              />
            </OverviewGrid>

            <View style={HomeStyles.Card}>
              <View style={HomeStyles.cardIconContainer}>
                <Feather name="folder-plus" size={28} color={Colors.primary} />
              </View>
              <Text style={HomeStyles.cardTitle}>Add Your First Job</Text>
              <Text style={HomeStyles.cardDescription}>
                Track application status, interviews, and follow-ups in one
                place.
              </Text>
              <TouchableOpacity style={HomeStyles.button}>
                <Text style={HomeStyles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>

            <View style={HomeStyles.Card}>
              <View
                style={[
                  HomeStyles.cardIconContainer,
                  { backgroundColor: Colors.purpleSoft },
                ]}
              >
                <Feather name="file-plus" size={28} color={Colors.purple} />
              </View>
              <Text style={HomeStyles.cardTitle}>Upload Resume</Text>
              <Text style={HomeStyles.cardDescription}>
                Let us analyze your resume to suggest relevant career paths.
              </Text>
              <TouchableOpacity style={HomeStyles.uploadButton}>
                <Text style={HomeStyles.uploadButtonText}>Upload File</Text>
              </TouchableOpacity>
            </View>

            <View style={HomeStyles.sectionRow}>
              <Feather name="clock" size={20} color={Colors.primary} />
              <Text style={HomeStyles.sectionTitle}>Recent Activity</Text>
            </View>

            <View style={HomeStyles.recentActivityBlank}>
              <View style={HomeStyles.ActivityBlankIcon}>
                <Feather
                  name="clipboard"
                  size={28}
                  color={Colors.textSecondary}
                />
              </View>
              <Text style={HomeStyles.ActivityBlankText}>
                Your activity will appear here once you start applying.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <FloatingButton />
    </>
  );
};

/* ========================= COMPONENTS ========================= */

interface OverviewItem {
  icon: string;
  title: string;
  value: string;
  trend?: number; // Optional trend percentage
  color?: string; // Optional custom color
}

const OverviewViewss = ({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) => (
  <View
    style={[
      HomeStyles.overviewView,
      { borderLeftWidth: title === 'offers' ? 4 : 0, borderColor: 'red' },
    ]}
  >
    <Text
      style={[
        HomeStyles.overviewValue,
        { color: title === 'Offers' ? 'red' : 'black' },
      ]}
    >
      {value}
    </Text>
    <Text style={HomeStyles.overviewLabel}>{title}</Text>
  </View>
);

const InsightView = ({
  icon,
  title,
  subtitle,
  highlight = false,
}: {
  icon: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
}) => (
  <View
    style={[HomeStyles.insightView, highlight && HomeStyles.insightHighlight]}
  >
    {/* <Feather name={icon} size={26} color={Colors.primary} /> */}
    <View style={{ marginLeft: 10 }}>
      <Text style={HomeStyles.insightTitle}>{title}</Text>
      <Text style={HomeStyles.insightSubtitle}>{subtitle}</Text>
    </View>
  </View>
);
