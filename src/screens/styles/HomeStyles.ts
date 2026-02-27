import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C9FFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
    paddingHorizontal: 15,
  },
  header: {
    padding: 20,
    backgroundColor: '#4C9FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: { color: '#fff', fontSize: 14 },
  userName: { color: '#fff', fontSize: FONTS.sizes.xl , fontWeight: '700', marginTop: 4 },
  userRole: { color: '#e6f5ff', marginTop: 2 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 22,
    marginBottom: 10,
    marginLeft: 18,
  },

  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // paddingHorizontal: 15,
  },
  overviewView: {
    width: '47%',
    padding: 20,
    marginBottom: 15,
    alignItems: 'flex-start',
    backgroundColor: Colors.background,
    shadowColor: '#848484',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 10,
  },
  overviewValue: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  overviewLabel: { fontSize: 14, color: Colors.textSecondary },

  trendView: { marginTop: 10, },
  ViewTitle: { fontSize: 16, fontWeight: '700', marginBottom: 10 },
  trendValue: { fontSize: 32, fontWeight: '700' },
  trendPercent: { color: 'green', marginBottom: 10 },
  fakeGraph: {
    height: 70,
    backgroundColor: '#d8eaff',
    borderRadius: 10,
    opacity: 0.8,
  },

  goalView: { marginTop: 14 },
  goalTitle: { fontSize: 15, fontWeight: '700' },
  goalPercent: { position: 'absolute', right: 0, top: 0, fontWeight: '700' },
  progressBar: {
    height: 10,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4C9FFF',
    borderRadius: 10,
  },
  goalHint: { color: Colors.textSecondary, marginTop: 8 },

  insightView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginHorizontal: 15,
    marginBottom: 12,
  },
  insightHighlight: {
    backgroundColor: '#e8f2ff',
  },
  insightTitle: { fontSize: 15, fontWeight: '700' },
  insightSubtitle: { fontSize: 13, color: Colors.textSecondary },

  // Floating Button Styles
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
