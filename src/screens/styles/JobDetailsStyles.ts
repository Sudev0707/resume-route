import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const JobDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 32,
    paddingTop: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },

  jobRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoBox: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: FONTS.sizes.lg,
    fontFamily: FONTS.fontFamily.medium,
    color: '#1A1A1A',
  },
  company: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
    color: '#6B7280',
    marginBottom: 6,
  },
  statusBadge: {
    backgroundColor: '#D1FADF',
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderRadius: 12,
  },
  statusText: {
    color: '#10B981',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.semibold,
  },

  detailRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '50%',
  },
  detailText: {
    marginLeft: 6,
    color: '#555',
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  sectionTitle: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.semibold,
    marginBottom: 10,
    color: '#1A1A1A',
  },

  /* Pipeline */
  pipelineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 22,
    backgroundColor: Colors.offWhiteSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusStepsCircle: {
    backgroundColor: '#3B82F6',
  },
  // New styles for dynamic status
  completedStepCircle: {
    backgroundColor: '#34C759', // Green for completed
  },
  activeStepCircle: {
    backgroundColor: '#3B82F6', // Blue for current active
  },
  inactiveStepCircle: {
    backgroundColor: '#D1D5DB', // Gray for future steps
  },
  stepText: {
    marginTop: 6,
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
    color: '#444',
  },

  /* Resume */
  resumeName: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#444',
  },

  /* Timeline */
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    // borderWidth:0.6
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
    marginTop: 4,
  },
  timelineLine: {
    width: 2,
    height: 25,
    backgroundColor: '#D1D5DB',
    marginLeft: 5,
    marginBottom: 10,
  },
  timelineTitle: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
  },
  timelineDate: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#6B7280',
    marginBottom: 4,
  },
  timelineNote: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
    color: '#6B7280',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  // Rejection timeline styles
  timelineItemRejected: {
    backgroundColor: '#FFF5F5',
    marginHorizontal: -8,
    marginVertical: -4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timelineDotRejected: {
    backgroundColor: '#FF3B30',
  },
  timelineTitleRejected: {
    color: '#FF3B30',
  },
  timelineNoteRejected: {
    backgroundColor: '#FEE2E2',
    color: '#DC2626',
  },

  /* Notes */
  notesText: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#444',
  },

  /* Event */
  eventRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  eventTitle: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  eventDate: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: '#777',
  },
});
