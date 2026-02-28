import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../constants';
import { FloatingButton } from '../components/FloatingButton';
import { HomeStyles } from './styles/HomeStyles';

export const HomeScreen: React.FC = () => {
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
            {/* <Text style={HomeStyles.greeting}>Good morning 👋</Text> */}
            <Text style={HomeStyles.userName}>Alex Morgan</Text>
            <Text style={HomeStyles.userRole}>Senior Frontend Engineer</Text>
          </View>
          <ScrollView style={HomeStyles.contentContainer}contentContainerStyle={{ paddingBottom: 70 }} showsVerticalScrollIndicator={false}>
            {/* ========= OVERVIEW SECTION ========= */}
            <Text style={HomeStyles.sectionTitle}>Overview</Text>
            <View style={HomeStyles.overviewGrid}>
              <OverviewView icon="document-text" title="Resumes" value="4" />
              <OverviewView icon="briefcase" title="Applications" value="8" />
              <OverviewView icon="people" title="Interview Rate" value="63%" />
              <OverviewView icon="trophy" title="Offers" value="2" />
              <OverviewView icon="eye" title="Resume Views" value="583" />
              <OverviewView icon="download" title="Downloads" value="74" />
            </View>

            {/* <View style={HomeStyles.trendView}>
              <Text style={HomeStyles.ViewTitle}>Resume Views Trend</Text>
              <Text style={HomeStyles.trendValue}>583</Text>
              <Text style={HomeStyles.trendPercent}>↑ 12%</Text>

              <View style={HomeStyles.fakeGraph} />
            </View>

        
            <View style={HomeStyles.goalView}>
              <Text style={HomeStyles.ViewTitle}>Career Goal Progress</Text>
              <View style={{ marginTop: 10 }}>
                <Text style={HomeStyles.goalTitle}>
                  Senior Frontend Engineer
                </Text>
                <Text style={HomeStyles.goalPercent}>65%</Text>

                <View style={HomeStyles.progressBar}>
                  <View style={[HomeStyles.progressFill, { width: '45%' }]} />
                </View>
                <Text style={HomeStyles.goalHint}>
                  Keep applying! You're more than halfway there.
                </Text>
              </View>
            </View>

            <Text style={HomeStyles.sectionTitle}>Career Insights</Text>

            <InsightView
              icon="rocket"
              title="Tech Resume is your best performer"
              subtitle="It gets 30% more views than your other resumes."
            />  */}

          </ScrollView>
        </SafeAreaView>

        {/* ========= FLOATING BUTTON ========= */}
        <FloatingButton  />
      </View>
    </>
  );
};

/* ========================= COMPONENTS ========================= */

const OverviewView = ({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) => (
  <View style={HomeStyles.overviewView}>
    <Feather name={icon} size={20} color={Colors.primary} />
    <Text style={HomeStyles.overviewValue}>{value}</Text>
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
    <Feather name={icon} size={26} color={Colors.primary} />
    <View style={{ marginLeft: 10 }}>
      <Text style={HomeStyles.insightTitle}>{title}</Text>
      <Text style={HomeStyles.insightSubtitle}>{subtitle}</Text>
    </View>
  </View>
);
