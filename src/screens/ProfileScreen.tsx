import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Switch,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors, FONTS } from '../constants';
export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Figma'];
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar
          backgroundColor={Colors.background}
          barStyle="dark-content"
          translucent
        />

        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
              style={styles.backButton}
            >
              <Feather name="chevron-left" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={{ paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.profileCard}>
              <View style={styles.profileHeader}>
                {/* <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
              style={styles.avatar}
            /> */}

                <View style={{ marginLeft: 14 }}>
                  <Text style={styles.name}>Alex Morgan</Text>
                  <Text style={styles.email}>alex@example.com</Text>

                  <View style={styles.roleBadge}>
                    <Text style={styles.roleText}>
                      Senior Frontend Engineer
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />

              <Text style={styles.skillsTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {skills.map(skill => (
                  <View key={skill} style={styles.skillChip}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
            {/*  */}
            <View style={styles.statsContainer}>
              <StatBox number="4" label="Resumes" />
              <StatBox number="8" label="Applications" />
              <StatBox number="5" label="Interviews" />
              <StatBox number="2" label="Offers" />
            </View>

            {/* ===== ACCOUNT SECTION ===== */}
            <Text style={styles.sectionTitle}>ACCOUNT</Text>
            <View style={styles.menuCard}>
              <MenuItem
                icon="edit-2"
                title="Edit Profile"
                subtitle="Update your info"
              />

              <MenuItem
                icon="target"
                title="Target Role"
                subtitle="Senior Frontend Engineer"
              />
            </View>

            {/*  */}

            

            {/*  */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const StatBox = ({ number, label }: any) => (
  <View style={styles.statBox}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const MenuItem = ({ icon, title, subtitle }: any) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Feather name={icon} size={20} />
      <View style={{ marginLeft: 14 }}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubtitle}>{subtitle}</Text>
      </View>
    </View>

    <Feather name="chevron-right" size={20} color="#888" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F7F7F9',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    // borderWidth: 0.5
    paddingHorizontal: 16,
    // backgroundColor: Colors.offWhite,
  },
  backButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: Colors.offWhite,
    // borderWidth: 0.5,
  },
  headerTitle: {
    fontSize: FONTS.sizes.lg,
    fontFamily: FONTS.fontFamily.semibold,
    marginLeft: 10,
  },

  //

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    elevation: 1,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
  },

  email: {
    fontSize: 14,
    color: '#6E6E73',
    marginTop: 2,
  },

  roleBadge: {
    backgroundColor: '#E6F0FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
    alignSelf: 'flex-start',
  },

  roleText: {
    color: '#2F6FED',
    fontSize: 13,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 16,
  },

  skillsTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skillChip: {
    backgroundColor: '#F1F1F4',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  skillText: {
    fontSize: 13,
    fontWeight: '500',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  statBox: {
    backgroundColor: '#FFFFFF',
    width: '23%',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 2,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '700',
  },

  statLabel: {
    fontSize: 12,
    color: '#6E6E73',
    marginTop: 6,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6E6E73',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 2,
  },

  menuItem: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F4',
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  menuSubtitle: {
    fontSize: 13,
    color: '#6E6E73',
    marginTop: 2,
  },
});
