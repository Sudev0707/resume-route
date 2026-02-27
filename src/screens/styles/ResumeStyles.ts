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
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },

  cardHeader: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  subtitle: {
    color: '#6b7280',
    marginTop: 4,
  },

  tagRow: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: '#e0edff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
  },

  tagText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '500',
  },

  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scoreText: {
    position: 'absolute',
    fontWeight: '700',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  statText: {
    color: '#374151',
    fontSize: 13,
  },

  expiry: {
    fontSize: 13,
    fontWeight: '600',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  secondaryButtonText: {
    fontWeight: '600',
    color: '#374151',
  },
});
