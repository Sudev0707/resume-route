import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '../../constants';

export const LoginStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    backgroundColor: '#1A73E8',
    paddingVertical: 70,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  title: {
    fontSize: FONTS.sizes.xxl,
    fontFamily: FONTS.fontFamily.medium,
    color: Colors.offWhite,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.regular,
    color: Colors.offWhite,
  },

  form: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  label: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
    color: Colors.textPrimary,
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    height: 46,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingRight: 45,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    borderWidth: 1,
    borderColor: Colors.border,
    color: Colors.textPrimary,
  },

  signInBtn: {
    backgroundColor: '#1A73E8',
    paddingVertical: 9,
    borderRadius: 12,
    marginTop: 28,
    alignItems: 'center',
  },

  createBtn: {
    backgroundColor: '#1A73E8',
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 28,
    alignItems: 'center',
    marginBottom: 12,
  },

  signInText: {
    color: Colors.offWhite,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.medium,
  },
  createBtnText: {
    color: Colors.offWhite,
    fontSize: FONTS.sizes.md,
    fontFamily: FONTS.fontFamily.medium,
  },
  signInLinkWrapper: {},
  signInLink: {
    color: Colors.primary,
    fontFamily: FONTS.fontFamily.medium,
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D5DCE5',
  },

  orText: {
    marginHorizontal: 8,
    color: '#6A7483',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },

  guestBtn: {
    backgroundColor: '#fff',
    paddingVertical: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6DFEA',
    alignItems: 'center',
  },

  guestText: {
    fontSize: 16,
    color: '#1A1A1A',
  },

  googleBtn: {
    backgroundColor: '#fff',
    paddingVertical: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },

  googleText: {
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
    color: Colors.textPrimary,
    marginLeft: 8,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 6,
  },
  footerText: {
    textAlign: 'center',
    color: Colors.textSecondary,
    alignItems: 'center',
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.regular,
  },
  createLinkWrapper: {
    alignSelf: 'center',
  },

  create: {
    color: Colors.primary,
    fontSize: FONTS.sizes.sm,
    fontFamily: FONTS.fontFamily.medium,
  },

  demoBox: {
    marginTop: 25,
    padding: 12,
    backgroundColor: '#E9F3FF',
    borderRadius: 10,
  },

  demoText: {
    textAlign: 'center',
    color: '#1A73E8',
    fontSize: 13,
  },

  passwordContainer: {
    position: 'relative',
  },

  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
    padding: 5,
  },

  eyeIconText: {
    fontSize: 20,
  },
});
