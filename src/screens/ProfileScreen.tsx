import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen: React.FC = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar
          backgroundColor={Colors.background}
          barStyle="dark-content"
          translucent
        />
        <SafeAreaView
          style={styles.container}
          edges={['top', 'right', 'bottom', 'left']}
        >
          <View style={styles.contentContainer}></View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.offWhite,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
});
