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
import { LoginStyles } from "./styles/LoginStyles";

const LoginScreen = () => {
  const [showLogin, setShowLogin] = useState(true);

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
        <View style={{ height: 500, overflow: "hidden", position: 'relative' }}>
          {/* LOGIN FORM */}
          <Animated.View style={[LoginStyles.form, loginStyle, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: showLogin ? 1 : 0 }]}>
            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="alex@example.com"
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

            <TouchableOpacity style={LoginStyles.signInBtn}>
              <Text style={LoginStyles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <View style={LoginStyles.orWrapper}>
              <View style={LoginStyles.line} />
              <Text style={LoginStyles.orText}>or</Text>
              <View style={LoginStyles.line} />
            </View>

            <TouchableOpacity style={LoginStyles.guestBtn}>
              <Text style={LoginStyles.guestText}>Continue as Guest</Text>
            </TouchableOpacity>

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