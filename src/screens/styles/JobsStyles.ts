import { StyleSheet, ViewStyle } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const JobsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    paddingHorizontal: 15,
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

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },

  subHeading: {
    color: Colors.textSecondary,
    marginTop: 4,
  },

  addButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.primarySoft,
    borderRadius: 12,
    padding: 6,
    marginTop: 20,
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: Colors.border,
    gap: 5,
  },

  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 10,
  },

  activeToggle: {
    backgroundColor: Colors.background,
    elevation: 1,
  },

  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: Colors.border,
    // elevation: 1,
  },

  activeFilterTab: {
    backgroundColor: Colors.primary,
  },

  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 0.4,
    borderColor: Colors.border,
    elevation: 1,
  },

  title: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  company: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 4,
  },

  meta: {
    marginTop: 6,
    color: Colors.textSecondary,
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  statusText: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  boardColumn: {
    width: 300,
    marginRight: 16,
    // backgroundColor: '#f0f0f0',
    backgroundColor: Colors.primarySoft,
    borderWidth: 0.5,

    borderRadius: 14,
    padding: 12,
    // maxHeight: 450,
    // borderWidth: 1,
    borderColor: '#a5cfff',
  },

  boardTitle: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.medium,
    marginBottom: 10,
    color: Colors.primary,
  },

  boardCard: {
    backgroundColor: Colors.background,
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,

    shadowColor: '#a9a9a9fa',
    borderWidth: 0.4,
    borderColor: Colors.border,
    elevation: 1,
  },

  // Job Card Row Container
  jobCardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },

  // Applied Date Text
  appliedDate: {
    color: Colors.textSecondary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    marginTop: 8,
  },

  // Toggle Button Label
  toggleLabel: {
    marginLeft: 8,
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  // Filter FlatList Content
  filterListContent: {
    marginVertical: 10,
  },

  // Jobs FlatList Content
  jobsListContent: {
    paddingBottom: 100,
    paddingTop: 10,
    // backgroundColor:Colors.primarySoft
  },

  // Board ScrollView Content
  boardScrollContent: {
    paddingVertical: 20,
  },

  // Board Column Header
  boardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  // Board Count Badge
  boardCountBadge: {
    backgroundColor: Colors.primary,
    padding: 2,
    borderRadius: 15,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Board Count Text
  boardCountText: {
    color: Colors.offWhite,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.medium,
  },

  // Filter Tab Text
  filterTabText: {
    color: Colors.textSecondary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
  },

  // Active Filter Tab Text
  activeFilterTabText: {
    color: '#fff',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
  },
});

export const getStatusBadgeStyle = (status: string): ViewStyle => ({
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 10,
  backgroundColor:
    status === 'Offer'
      ? '#D1FAE5'
      : status === 'Interview'
      ? '#FEF3C7'
      : '#E5E7EB',
});
