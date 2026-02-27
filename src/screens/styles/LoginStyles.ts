import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: '#E9F1FF',
  },

  form: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  label: {
    fontSize: 15,
    color: '#2B3A4A',
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E1E8EF',
  },

  signInBtn: {
    backgroundColor: '#1A73E8',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 28,
    alignItems: 'center',
  },

  createBtn: {
    backgroundColor: '#1A73E8',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 28,
    alignItems: 'center',
  },

  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  createBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signInLinkWrapper: {},
  signInLink: {
    color: '#1A73E8',
    fontWeight: '600',
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
    fontSize: 14,
  },

  guestBtn: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6DFEA',
    alignItems: 'center',
  },

  guestText: {
    fontSize: 16,
    color: '#1A1A1A',
  },

  footer:{
    flexDirection:'row',
    justifyContent:'center',
     marginTop: 20,
     gap:6,
  },
  footerText: {
    textAlign: 'center',
    color: '#707A88',
    alignItems:'center',
  },
  createLinkWrapper:{
    alignSelf:'center',
  },

  create: {
    color: '#1A73E8',
    fontWeight: '600',
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
});
