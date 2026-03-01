import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const ProfileStyles = StyleSheet.create({
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
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: Colors.offWhite,
  },
  headerTitle: {
    fontSize: FONTS.sizes.lg,
    fontFamily: FONTS.fontFamily.semibold,
    marginLeft: 10,
  },

  // Profile Card
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
    fontSize: FONTS.sizes.xxl,
    fontFamily: FONTS.fontFamily.medium,
  },

  email: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.medium,
    color: '#6E6E73',
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

  // Skills Section
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

  // Stats Section
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
    fontSize: FONTS.sizes.xl,
    fontFamily: FONTS.fontFamily.medium,
  },

  statLabel: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.medium,
    color: '#6E6E73',
    marginTop: 6,
  },

  // Section Titles
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6E6E73',
    marginTop: 15,
    textTransform: 'uppercase',
  },

  // Menu Card
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 2,
    marginTop: 16,
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
    marginVertical: 10,
    elevation: 2,
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
