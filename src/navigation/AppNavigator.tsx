import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen, SettingsScreen, Onboard, LoginScreen } from '../screens';
import { RootStackParamList } from '../types';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            statusBarStyle: 'light',
            statusBarTranslucent: false,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
