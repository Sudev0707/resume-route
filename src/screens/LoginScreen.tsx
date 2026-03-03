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
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { LoginStyles } from "./styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Colors } from "../constants";

type LoginNavProp = NativeStackNavigationProp<RootStackParamList>;

// Validation functions
const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

const validatePassword = (password: string): string => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  return "";
};

const validateFullName = (name: string): string => {
  if (!name.trim()) {
    return "Full name is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  return "";
};

const LoginScreen = () => {
  const navigation = useNavigation<LoginNavProp>();
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  // Form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupFullName, setSignupFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Error state
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [signupFullNameError, setSignupFullNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");

  // Touch state for validation on blur
  const [loginEmailTouched, setLoginEmailTouched] = useState(false);
  const [loginPasswordTouched, setLoginPasswordTouched] = useState(false);
  const [signupFullNameTouched, setSignupFullNameTouched] = useState(false);
  const [signupEmailTouched, setSignupEmailTouched] = useState(false);
  const [signupPasswordTouched, setSignupPasswordTouched] = useState(false);

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
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* CONTAINER WITH FIXED HEIGHT + OVERFLOW HIDDEN (IMPORTANT) */}
            <View style={{ height: 700, overflow: "hidden", position: 'relative', }}>
          {/* LOGIN FORM */}
          <Animated.View  style={[LoginStyles.form, loginStyle, { position: 'absolute', top: 0, left: 0, right: 0, zIndex: showLogin ? 1 : 0 }]}>
            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="alex@example.com"
              placeholderTextColor="#9BA4B5"
              style={[
                LoginStyles.input,
                loginEmailTouched && loginEmailError ? LoginStyles.inputError : null,
              ]}
              value={loginEmail}
              onChangeText={(text) => {
                setLoginEmail(text);
                if (loginEmailTouched) {
                  setLoginEmailError(validateEmail(text));
                }
              }}
              onBlur={() => {
                setLoginEmailTouched(true);
                setLoginEmailError(validateEmail(loginEmail));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {loginEmailTouched && loginEmailError ? (
              <Text style={LoginStyles.errorText}>{loginEmailError}</Text>
            ) : null}

            <Text style={LoginStyles.label}>Password</Text>
            <View style={LoginStyles.passwordContainer}>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#9BA4B5"
                secureTextEntry={!showLoginPassword}
                style={[
                  LoginStyles.input,
                  loginPasswordTouched && loginPasswordError ? LoginStyles.inputError : null,
                ]}
                value={loginPassword}
                onChangeText={(text) => {
                  setLoginPassword(text);
                  if (loginPasswordTouched) {
                    setLoginPasswordError(validatePassword(text));
                  }
                }}
                onBlur={() => {
                  setLoginPasswordTouched(true);
                  setLoginPasswordError(validatePassword(loginPassword));
                }}
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
            {loginPasswordTouched && loginPasswordError ? (
              <Text style={LoginStyles.errorText}>{loginPasswordError}</Text>
            ) : null}

            <TouchableOpacity 
              style={[
                LoginStyles.signInBtn, 
                (!loginEmail || !loginPassword || !!loginEmailError || !!loginPasswordError) && LoginStyles.signInBtnDisabled
              ]} 
              onPress={handleLogin}
              disabled={!loginEmail || !loginPassword || !!loginEmailError || !!loginPasswordError}
            >
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
              style={[
                LoginStyles.input,
                signupFullNameTouched && signupFullNameError ? LoginStyles.inputError : null,
              ]}
              value={signupFullName}
              onChangeText={(text) => {
                setSignupFullName(text);
                if (signupFullNameTouched) {
                  setSignupFullNameError(validateFullName(text));
                }
              }}
              onBlur={() => {
                setSignupFullNameTouched(true);
                setSignupFullNameError(validateFullName(signupFullName));
              }}
              autoCapitalize="words"
              autoCorrect={false}
            />
            {signupFullNameTouched && signupFullNameError ? (
              <Text style={LoginStyles.errorText}>{signupFullNameError}</Text>
            ) : null}

            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor="#9BA4B5"
              style={[
                LoginStyles.input,
                signupEmailTouched && signupEmailError ? LoginStyles.inputError : null,
              ]}
              value={signupEmail}
              onChangeText={(text) => {
                setSignupEmail(text);
                if (signupEmailTouched) {
                  setSignupEmailError(validateEmail(text));
                }
              }}
              onBlur={() => {
                setSignupEmailTouched(true);
                setSignupEmailError(validateEmail(signupEmail));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {signupEmailTouched && signupEmailError ? (
              <Text style={LoginStyles.errorText}>{signupEmailError}</Text>
            ) : null}

            <Text style={LoginStyles.label}>Password</Text>
            <View style={LoginStyles.passwordContainer}>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#9BA4B5"
                secureTextEntry={!showCreatePassword}
                style={[
                  LoginStyles.input,
                  signupPasswordTouched && signupPasswordError ? LoginStyles.inputError : null,
                ]}
                value={signupPassword}
                onChangeText={(text) => {
                  setSignupPassword(text);
                  if (signupPasswordTouched) {
                    setSignupPasswordError(validatePassword(text));
                  }
                }}
                onBlur={() => {
                  setSignupPasswordTouched(true);
                  setSignupPasswordError(validatePassword(signupPassword));
                }}
              />
              <TouchableOpacity
                style={LoginStyles.eyeIcon}
                onPress={() => setShowCreatePassword(!showCreatePassword)}
              >
                <Icon 
                  name={showCreatePassword ? "eye-off" : "eye"} 
                  size={20} 
                  color="#6A7483" 
                />
              </TouchableOpacity>
            </View>
            {signupPasswordTouched && signupPasswordError ? (
              <Text style={LoginStyles.errorText}>{signupPasswordError}</Text>
            ) : null}

            <TouchableOpacity 
              style={[
                LoginStyles.createBtn, 
                (!signupFullName || !signupEmail || !signupPassword || !!signupFullNameError || !!signupEmailError || !!signupPasswordError) && LoginStyles.signInBtnDisabled
              ]}
              disabled={!signupFullName || !signupEmail || !signupPassword || !!signupFullNameError || !!signupEmailError || !!signupPasswordError}
            >
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export { LoginScreen };
