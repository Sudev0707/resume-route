import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { Card, Header } from '../components';
import { Colors, FONTS } from '../constants';

export const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
        translucent
      />
      <Header title="Settings" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={{marginBottom:40}} >
          <Text style={styles.sectionTitle}>App Preferences</Text>
          <MenuCard>
            <DarkModeToggle />
          </MenuCard>
        </View>

        <Text style={styles.sectionTitle}>DATA & PRIVACY</Text>

        <MenuCard>
          <MenuItem
            icon="download"
            iconColor="#C7C7CC "
            title="Export Data"
            subtitle="Download your career history (.json)"
          />

          <MenuItem
            icon="trash-2"
            iconColor="#FF3B30"
            title="Delete Account"
            subtitle="Permanently remove all data"
            danger
          />
        </MenuCard>

        <MenuCard>
          <MenuItem
            icon="Help"
            title="Help Center"
            subtitle="Tutorials and FAQ"
          />
        </MenuCard>
        <MenuCard>
          <MenuItem
            icon="message-square"
            title="Contact Us"
            subtitle="24/7 Priority Support"
          />
        </MenuCard>

        <View style={{marginTop:30, justifyContent:'center', display:'flex', alignItems:'center'}}>
          <Text style={styles.sectionTitle}>ResumeRoute</Text>
          <Text style={styles.aboutText}>Version: 1.0.0</Text>
          <View style={{flexDirection:'row', gap:15}}>
            <TouchableOpacity><Text>Privacy Policy</Text></TouchableOpacity>
            <TouchableOpacity><Text>Terms of Service</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuCard = ({ children }: any) => (
  <View style={styles.menuCard}>{children}</View>
);

const MenuItem = ({
  icon,
  iconColor,
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
        <Feather name={icon} size={18} color={iconColor} />
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
          name={isDarkMode ? 'moon' : 'sun'}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    backgroundColor: Colors.offWhite,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
  },
  card: {
    marginHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
    // marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  settingDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  aboutText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },

  // Menu Card
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
    marginTop: 16,
    shadowColor:'#787878'
  },

  menuItem: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F4',
  },

  menuTitle: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  menuSubtitle: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
    color: '#6E6E73',
    // marginTop: 2,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F4F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleContainer: {
    flexDirection: 'row',
    // backgroundColor: '#1E1E1E',
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 10,
    // elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },
});
