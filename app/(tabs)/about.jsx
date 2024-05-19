import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const about = () => {
  return (
    <SafeAreaView className="bg-[#1D232A] h-full">
    <View>
      <Text>about</Text>
    </View>
    <StatusBar backgroundColor="#1D232A" style='light'/>
    </SafeAreaView>
  )
}

export default about