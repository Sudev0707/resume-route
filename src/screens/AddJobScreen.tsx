import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants';
import { AddJobStyles } from './styles/AddJobStyles';

export const AddJobScreen: React.FC = () => {
  const navigation = useNavigation();

  const [status, setStatus] = useState('Applied');
  const [remote, setRemote] = useState(false);

  const handleAddJob = () => {
    // TODO: Implement job addition logic
    console.log('Add job pressed');
  };

  return (
    <View style={AddJobStyles.container}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
        translucent
      />

      <SafeAreaView style={AddJobStyles.container}>
        {/* Header */}
        <View style={AddJobStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={AddJobStyles.backButton}>
            <Feather name="chevron-left" size={24} />
          </TouchableOpacity>
          <Text style={AddJobStyles.headerTitle}>Add Job</Text>
        </View>
        <ScrollView
          style={AddJobStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Company */}
          <Text style={AddJobStyles.label}>Company *</Text>
          <TextInput
            placeholder="Stripe, Vercel, etc."
            style={AddJobStyles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Job Title */}
          <Text style={AddJobStyles.label}>Job Title *</Text>
          <TextInput
            placeholder="Senior Frontend Engineer"
            style={AddJobStyles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Location */}
          <Text style={AddJobStyles.label}>Location</Text>
          <TextInput
            placeholder="San Francisco, CA"
            style={AddJobStyles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Salary */}
          <Text style={AddJobStyles.label}>Salary Range</Text>
          <TextInput
            placeholder="$120k - $160k"
            style={AddJobStyles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Job Link */}
          <Text style={AddJobStyles.label}>Job Link</Text>
          <TextInput
            placeholder="https://company.com/careers"
            style={AddJobStyles.input}
            placeholderTextColor="#8E8E93"
          />

          {/* Applied Date */}
          <Text style={AddJobStyles.label}>Applied Date</Text>
          <View style={AddJobStyles.inputWithIcon}>
            <TextInput
              placeholder="27-02-2026"
              style={{ flex: 1 }}
              placeholderTextColor="#8E8E93"
            />
            <Feather name="calendar" size={18} color="#8E8E93" />
          </View>

          {/* Resume Used */}
          <Text style={AddJobStyles.label}>Resume Used</Text>
          <TouchableOpacity style={AddJobStyles.inputWithIcon}>
            <Text style={AddJobStyles.inputWithIconText}>Tech Resume 2024</Text>
            <Feather name="chevron-down" size={18} color="#8E8E93" />
          </TouchableOpacity>

          {/* Status */}
          <Text style={AddJobStyles.label}>Status</Text>
          <View style={AddJobStyles.statusContainer}>
            {['Applied', 'Interview', 'Offer', 'Rejected'].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setStatus(item)}
                style={[
                  AddJobStyles.statusButton,
                  status === item && AddJobStyles.activeStatus,
                ]}
              >
                <Text
                  style={[
                    AddJobStyles.statusText,
                    status === item && AddJobStyles.activeStatusText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Remote Toggle */}
          <View style={AddJobStyles.remoteContainer}>
            <Text style={AddJobStyles.remoteText}>Remote position</Text>
            <Switch value={remote} onValueChange={setRemote} />
          </View>

          {/* Notes */}
          <Text style={AddJobStyles.label}>Notes</Text>
          <TextInput
            placeholder="Any notes about this application..."
            style={AddJobStyles.notesInput}
            multiline
            numberOfLines={5}
            placeholderTextColor="#8E8E93"
          />

          <View style={AddJobStyles.buttonContainer}>
            <TouchableOpacity
              style={AddJobStyles.uploadButton}
              onPress={handleAddJob}
              activeOpacity={0.8}
            >
              <Feather name="upload" size={20} color={Colors.background} />
              <Text style={AddJobStyles.uploadButtonText}>Add Job Application</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
