import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

const { width } = Dimensions.get('window');

export const OnboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },

  skipBtn: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 8,
    // position: "absolute",
    // top: 45,
    // right: 20,
    // zIndex: 10,
  },
  skipText: {
    color: '#64748b',
    fontSize: 16,
  },
  flatListWrapper: {
    width: width,
    height: '70%',
    // borderWidth: 0.5,
  },
  flatListContent: {
    height: '100%',
  },

  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    // borderWidth: 0.5,
  },

  iconBox: {
    width: 160,
    height: 160,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },

  icon: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 10,
    textAlign: 'center',
  },

  desc: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
  },

  dotsWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    // borderWidth: 0.5,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#cbd5e1',
    marginHorizontal: 5,
  },

  activeDot: {
    width: 22,
    backgroundColor: '#2563eb',
  },

  nextBtn: {
    width: width * 0.8,
    paddingVertical: 15,
    borderRadius: 16,
    marginTop: 30,
    // marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#2563eb',
  },

  nextText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
