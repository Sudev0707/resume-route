import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.text,
  },
  card: {
    backgroundColor: Colors.background,
    borderColor: Colors.border,
    borderWidth: 1,
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  text: {
    color: Colors.textDark,
  },
  card: {
    backgroundColor: Colors.backgroundDark,
    borderColor: Colors.borderDark,
    borderWidth: 1,
  },
});
