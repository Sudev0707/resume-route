import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  Animated,
  Easing,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { LoginStyles } from "./styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type LoginNavProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginNavProp>();
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showLogin ? 0 : 1,
      duration: 400,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [showLogin]);

  // Animations for both forms
  const loginStyle = {
    opacity: slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 40],
        }),
      },
    ],
  };

  const createStyle = {
    opacity: slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [80, 0],
        }),
      },
    ],
  };

  // ====================
  const handleLogin = () => {
    // Placeholder for login logic
    navigation.navigate("Tabs");
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login logic
    console.log('Google login pressed');
  };

  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === "android" ? "#1A73E8" : "transparent"}
        barStyle="light-content"
        translucent={Platform.OS === "ios"}
      />

      {/* HEADER */}
      <View style={LoginStyles.header}>
        {showLogin ? (
          <>
            <Text style={LoginStyles.title}>Welcome back</Text>
            <Text style={LoginStyles.subtitle}>Sign in to CareerVault</Text>
          </>
        ) : (
          <>
            <Text style={LoginStyles.title}>Create Account</Text>
            <Text style={LoginStyles.subtitle}>Start your career journey</Text>
          </>
        )}
      </View>

      <SafeAreaView style={LoginStyles.safe}>
        {/* CONTAINER WITH FIXED HEIGHT + OVERFLOW HIDDEN (IMPORTANT) */}
        <View style={{ height: 700, overflow: "hidden", position: 'relative', }}>
          {/* LOGIN FORM */}
          <Animated.View  style={[LoginStyles.form, loginStyle, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: showLogin ? 1 : 0 }]}>
            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="alex@example.com"
              placeholderTextColor="#9BA4B5"
              style={LoginStyles.input}
            />

            <Text style={LoginStyles.label}>Password</Text>
            <View style={LoginStyles.passwordContainer}>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#9BA4B5"
                secureTextEntry={!showLoginPassword}
                style={LoginStyles.input}
              />
              <TouchableOpacity
                style={LoginStyles.eyeIcon}
                onPress={() => setShowLoginPassword(!showLoginPassword)}
              >
                <Icon 
                  name={showLoginPassword ? "eye-off" : "eye"} 
                  size={20} 
                  color="#6A7483" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={LoginStyles.signInBtn} onPress={handleLogin}>
              <Text style={LoginStyles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <View style={LoginStyles.orWrapper}>
              <View style={LoginStyles.line} />
              <Text style={LoginStyles.orText}>or</Text>
              <View style={LoginStyles.line} />
            </View>

            <TouchableOpacity style={LoginStyles.googleBtn} onPress={handleGoogleLogin}>
              <Svg width={20} height={20} viewBox="0 0 48 48">
                <Path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <Path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <Path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <Path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </Svg>
              <Text style={LoginStyles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={LoginStyles.guestBtn}>
              <Text style={LoginStyles.guestText}>Continue as Guest</Text>
            </TouchableOpacity> */}

            <View style={LoginStyles.footer}>
              <Text style={LoginStyles.footerText}>No account?</Text>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  setShowLogin(false);
                }}
              >
                <Text style={LoginStyles.create}>Create one →</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* CREATE FORM */}
          <Animated.View style={[LoginStyles.form, createStyle, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: showLogin ? 0 : 1 }]}>
            <Text style={LoginStyles.label}>Full Name</Text>
            <TextInput
              placeholder="Alex Morgan"
              placeholderTextColor="#9BA4B5"
              style={LoginStyles.input}
            />

            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor="#9BA4B5"
              style={LoginStyles.input}
            />

            <Text style={LoginStyles.label}>Password</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#9BA4B5"
              secureTextEntry
              style={LoginStyles.input}
            />

            <TouchableOpacity style={LoginStyles.createBtn}>
              <Text style={LoginStyles.createBtnText}>Create Account</Text>
            </TouchableOpacity>

            <View style={LoginStyles.footer}>
              <Text style={LoginStyles.footerText}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  setShowLogin(true);
                }}
              >
                <Text style={LoginStyles.create}>Sign in →</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    </>
  );
};

export { LoginScreen };