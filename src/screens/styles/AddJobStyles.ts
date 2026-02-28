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
    backgroundColor: Colors.offWhite,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 0.7,
    borderColor: Colors.border,
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  dobInputWrapper: {
    backgroundColor: Colors.offWhite,
    borderRadius: 12,
    paddingHorizontal: 14,
     paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.7,
    borderColor: Colors.border,
  },
  inputWithIcon: {
    backgroundColor: Colors.offWhite,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.7,
    borderColor: Colors.border,
  },
  inputWithIconText: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statusButton: {
    width: '48%',
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#ECECEF',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeStatus: {
    backgroundColor: '#DDE6F3',
  },
  statusText: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  activeStatusText: {
    color: '#2F6FED',
  },
  remoteContainer: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  remoteText: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  notesInput: {
    backgroundColor: '#F1F1F4',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
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
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  uploadButtonText: {
    color: Colors.background,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  // Modal styles for date picker
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalCancel: {
    color: '#8E8E93',
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
  },
  modalTitle: {
    color: Colors.textPrimary,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.semibold,
  },
  modalDone: {
    color: Colors.primary,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.semibold,
  },
  datePicker: {
    height: 200,
  },
});
