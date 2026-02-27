import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Button, Input } from '../components';
import { Colors } from '../constants';

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Profile</Text>
        
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          containerStyle={styles.input}
        />
        
        <Input
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          containerStyle={styles.input}
        />
        
        <Input
          label="Phone"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          containerStyle={styles.input}
        />
        
        <Input
          label="Location"
          placeholder="Enter your location"
          containerStyle={styles.input}
        />
        
        <Button
          title="Save Profile"
          onPress={() => console.log('Save Profile')}
          style={styles.saveButton}
        />
        
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Resume Stats</Text>
          <Text style={styles.cardText}>Resumes: 0</Text>
          <Text style={styles.cardText}>Applications: 0</Text>
          <Text style={styles.cardText}>Interviews: 0</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
  },
  input: {
    marginHorizontal: 0,
  },
  saveButton: {
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    marginHorizontal: 0,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
});
