import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../constants';

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
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#eee',
    borderRadius: 12,
    padding: 6,
    marginTop: 20,
    alignSelf: 'flex-start', 
    // borderWidth: 1,

  },

  toggleButton: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },

  activeToggle: {
    backgroundColor: '#fff',
  },

  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.background,
    borderRadius: 20,
    marginRight: 10,
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

  
    elevation:1,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  company: {
    color: Colors.textSecondary,
    marginTop: 4,
  },

  meta: {
    marginTop: 6,
    color: Colors.textSecondary,
    fontSize: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },

  boardColumn: {
    width: 300,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 14,
    padding: 12,
    // maxHeight: 450,
    // borderWidth: 1,
    borderColor: Colors.border,
  },

  boardTitle: {
    fontWeight: '700',
    marginBottom: 10,
  },

  boardCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
});

export const getStatusBadgeStyle = (status: string): ViewStyle => ({
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 20,
  backgroundColor:
    status === 'Offer'
      ? '#D1FAE5'
      : status === 'Interview'
      ? '#FEF3C7'
      : '#E5E7EB',
});
