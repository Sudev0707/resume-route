import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const ResumeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    paddingHorizontal: 20,
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 80,
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
    backgroundColor: '#2563eb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  uploadText: {
    color: 'white',
    fontWeight: '600',
  },

  card: {
    backgroundColor: Colors.background,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,

    // iOS shadow
    shadowColor: '#0000005e',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 4,
  },

  cardHeader: {
    flexDirection: 'row',
  },

  title: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },

  subtitle: {
    color: '#6b7280',
    marginTop: 4,
    fontSize: FONTS.sizes.sm,
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
  },

  scoreText: {
    position: 'absolute',
    color: '#374151',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
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
    marginTop: 16,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 7,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  secondaryButtonText: {
    color: '#374151',
    fontSize: FONTS.sizes.xs,
    fontFamily: FONTS.fontFamily.regular,
  },
});
