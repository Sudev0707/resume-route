import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants';

interface ScreenContainerProps {
  children: React.ReactNode;
  barBgColor: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  barBgColor,
  barStyle = 'light-content',
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={barBgColor}
        barStyle={barStyle}
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        {children}
      </SafeAreaView>
    </>
  );
};
