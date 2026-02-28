import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const AddJobStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,

    // ONLY bottom shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },

    // Android (bottom only)
    elevation: 6,
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
  label: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    marginTop: 18,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F1F1F4',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth:0.7,
    borderColor:Colors.border
  },
  inputWithIcon: {
    backgroundColor: '#F1F1F4',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputWithIconText: {
    color: '#111',
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statusButton: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#ECECEF',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeStatus: {
    backgroundColor: '#DDE6F3',
  },
  statusText: {
    fontWeight: '500',
    color: '#444',
  },
  activeStatusText: {
    color: '#2F6FED',
    fontWeight: '600',
  },
  remoteContainer: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  remoteText: {
    fontSize: 15,
    fontWeight: '500',
  },
  notesInput: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    textAlignVertical: 'top',
    marginTop: 6,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  uploadButtonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});
