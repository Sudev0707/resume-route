import React from 'react';
import { View, StatusBar } from 'react-native';
import { Colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnalyticsStyles } from './styles/AnalyticsStyles';

export const AnalyticsScreen:React.FC = () => {
  return (
    <>
         <View style={{ flex: 1, backgroundColor: Colors.background }}>
           <StatusBar
             backgroundColor={Colors.background}
             barStyle="dark-content"
             translucent
           />
           <SafeAreaView
             style={AnalyticsStyles.container}
             edges={['top', 'right', 'bottom', 'left']}
           >
             <View style={AnalyticsStyles.contentContainer}>
               
             </View>
           </SafeAreaView>
         </View>
       </>
  )
}
