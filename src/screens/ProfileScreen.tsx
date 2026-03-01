import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants';
import { ProfileStyles as styles } from './styles/ProfileStyles';
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
                  <Text style={styles.name}>Sudev</Text>
                  <Text style={styles.email}>alex@example.com</Text>

                  <View style={styles.roleBadge}>
                    <Text style={styles.roleText}>
                      Senior Frontend Engineer
                    </Text>
                  </View>
                </View>
              </View>
              {/* <View style={styles.divider} /> */}

              {/* <Text style={styles.skillsTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {skills.map(skill => (
                  <View key={skill} style={styles.skillChip}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View> */}
            </View>
            {/*  */}
            <View style={styles.statsContainer}>
              <StatBox number="4" label="Resumes" />
              <StatBox number="8" label="Applications" />
              <StatBox number="5" label="Interviews" />
              <StatBox number="2" label="Offers" />
            </View>

            {/* ===== ACCOUNT SECTION ===== */}

               <DarkModeToggle/> 
            <Text style={styles.sectionTitle}>ACCOUNT</Text>
            <MenuCard>
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
            </MenuCard>

          

            {/*  */}
             <Text style={styles.sectionTitle}>PREFERENCES</Text>
            <MenuCard>
              <MenuItem
                icon="bell"
                title="Notifications"
                subtitle="Application reminders"
              />

              <MenuItem
                icon="lock"
                title="Privacy"
                subtitle="Manage your data"
                isLast
              />
            </MenuCard>

            {/*  */}
            <MenuCard>
              <MenuItem icon="log-out" title="Log Out" danger isLast />
            </MenuCard>
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
const MenuCard = ({ children }: any) => (
  <View style={styles.menuCard}>{children}</View>
);

const MenuItem = ({
  icon,
  title,
  subtitle,
  rightComponent,
  isLast,
  danger,
  onPress,
}: any) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast && { borderBottomWidth: 0 }]}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <View style={styles.menuLeft}>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={18} color="#333" />
      </View>

      <View style={{ marginLeft: 14 }}>
        <Text style={[styles.menuTitle, danger && { color: '#FF3B30' }]}>
          {title}
        </Text>

        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
    </View>

    {rightComponent ? (
      rightComponent
    ) : (
      <Feather name="chevron-right" size={18} color="#C7C7CC" />
    )}
  </TouchableOpacity>
);



const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={styles.toggleContainer}>
      <View style={styles.left}>
        <Feather
          name={isDarkMode? 'moon' : 'sun'}
          size={20}
          color={isDarkMode ? '#4DD0A9' : '#ffa536'}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.text}>Dark Mode</Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#4DD0A9' }}
        thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

