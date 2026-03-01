import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const JobsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    // paddingHorizontal: 15,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addButtonText: {
    color: Colors.textDark,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
    marginLeft: 6,
  },
  toggleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  toggleContainer: {
    flexDirection: 'row',
    // backgroundColor: Colors.primarySoft,
    borderRadius: 10,
    padding: 4,
    // marginTop: 20,
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: Colors.border,
    gap: 5,
  },

  toggleButton: {
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 10,
  },

  activeToggle: {
    backgroundColor: Colors.primarySoft,
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
    backgroundColor: Colors.textPrimary,
  },

  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 0.4,
    borderColor: Colors.border,
    // elevation: 1,

    // iOS shadow
    shadowColor: '#0000005e',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 2,
  },

  title: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  company: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: Colors.textSecondary,
    // marginTop: 4,
  },

  meta: {
    marginTop: 6,
    gap: 14,
    flexDirection: 'row',
  },
  metaText: {
    color: Colors.textSecondary,
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
    gap: 5,
  },

  boardColumn: {
    width: 300,
    marginRight: 16,
    // backgroundColor: '#f0f0f0',
    backgroundColor: Colors.primarySoft,
    borderWidth: 0.5,

    borderRadius: 14,
    // padding: 12,
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
    // borderWidth: 0.4,
    borderColor: Colors.border,

    // iOS shadow
    shadowColor: '#0000005e',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 2,
    // elevation: 1,
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
    marginTop: 6,
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
    paddingVertical: 10,
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
  },

  // Jobs FlatList Content
  jobsListContent: {
    paddingBottom: 100,
    paddingTop: 10,
    paddingHorizontal: 15,
    // backgroundColor:Colors.primarySoft
  },

  // Board ScrollView Content
  boardScrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  // Board Column Header
  boardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 15,
    padding: 12,
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
    fontSize: FONTS.sizes.sm,
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
  statusText: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },
});

export const getStatusBadgeStyle = (status: string): ViewStyle => ({
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 15,
  backgroundColor:
    status === 'Offer'
      ? '#D1FAE5'
      : status === 'Interview'
      ? '#FEF3C7'
      : status === 'Rejected'
      ? '#FFEAEA'
      : status === 'Applied'
      ? '#E6F7F5'
      : '',
});

export const getStatusTextStyle = (status: string): TextStyle => ({
  fontSize: FONTS.sizes.xs,
  fontFamily: FONTS.fontFamily.medium,
  // color: "black"
  color:
    status === 'Offer'
      ? '#11bc63'
      : status === 'Interview'
      ? '#e7961d'
      : status === 'Rejected'
      ? '#F15555'
      : status === 'Applied'
      ? '#14c0ac'
      : '',
});

export const getBoardCountBadge = (status: string): ViewStyle => ({
  // backgroundColor: Colors.primary,
  padding: 2,
  borderRadius: 15,
  width: 25,
  height: 25,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:
    status === 'Offer'
      ? '#11bc63'
      : status === 'Interview'
      ? '#e7961d'
      : status === 'Rejected'
      ? '#F15555'
      : status === 'Applied'
      ? '#14c0ac'
      : '',
});
