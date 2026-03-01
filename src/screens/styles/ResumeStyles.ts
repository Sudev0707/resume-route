import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const ResumeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    // paddingHorizontal: 15,
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 80,
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

  headerSubtitle: {
    color: '#6b7280',
    marginTop: 4,
  },

  uploadButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2563eb',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    // iOS shadow
    shadowColor: '#2563eb',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // Android shadow
    elevation: 4,
  },

  uploadText: {
    color: 'white',
    fontWeight: '600',
  },

  card: {
    backgroundColor: Colors.background,
    borderRadius: 18,
    // paddingVertical: 15,
    marginBottom: 10,

    // iOS shadow
    shadowColor: '#0000005e',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 2,
    overflow: 'hidden',
  },
  touchableCard: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    // paddingBottom: 14,
    // borderWidth: 0.8,
  },

  cardHeader: {
    flexDirection: 'row',
  },
  meta: {
    flexDirection: 'row',
    gap: 7,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#deecfc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  subtitle: {
    color: '#6b7280',
    // marginTop: 4,
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  tagRow: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: '#e0edff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
  },

  tagText: {
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
    color: Colors.primary,
  },

  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
  },

  scoreText: {
    position: 'absolute',
    color: '#374151',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },

  statsRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 18,
    marginTop: 10,
  },

  statText: {
    color: '#374151',
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  expiry: {
    color: '#374151',
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 16,
    // borderWidth: 0.7,
    paddingHorizontal: 15,
    paddingBottom: 14,
    paddingTop: 4,
  },
  QRIcon: {
    width: 16,
    height: 16,
    tintColor: '#686868'
  },

  secondaryButton: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  secondaryButtonDelete: {
    backgroundColor: '#ffeae9',
    // paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    // alignSelf:'flex-end'
  },

  secondaryButtonText: {
    color: '#374151',
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.medium,
    paddingTop: 2,
  },

  // PDF Viewer Styles - LinkedIn Style
  pdfContainer: {
    width: '100%',
    height: 500,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfLoadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  pdfView: {
    flex: 1,
    width: '100%',
    height: 400,
    backgroundColor: Colors.offWhite,
  },
  pdfIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});
