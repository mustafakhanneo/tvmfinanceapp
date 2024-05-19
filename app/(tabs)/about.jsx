import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { icons } from "../../constants";
import { StatusBar } from 'expo-status-bar';


const about = () => {
  return (
    <SafeAreaView className="bg-[#1D232A] h-full">
      <ScrollView>
      <View className="flex flex-col p-2 mt-4 space-y-4">
      <View className="flex flex-col justify-start space-y-2">
        <Text className="font-medium text-[#A6ADBB] font-tanker text-2xl mb-2">
          Developer Profile
        </Text>
        <Text className="font-medium text-lg text-[#A6ADBB] font-archivo">
          I'm <Text className="font-tanker text-yellow-500">Mustafa Khan</Text>,
          a developer with a strong background in Economics and Finance from NED
          University. My passion for coding complements my expertise, allowing
          me to create tailored solutions for finance websites. Proficient in
          React, NextJS, Dart, React Native, JavaScript, and SQL.
        </Text>
        <Text className="font-medium text-[#A6ADBB] text-lg font-archivo">
          With a passion for continuous learning and staying updated with the
          latest developments in both finance and technology, I am dedicated to
          staying at the forefront of innovation and driving success for your
          finance website. Let's collaborate to build a digital platform that
          empowers users to make informed financial decisions and achieve their
          goals with confidence.
        </Text>
      </View>
      <View className="grid sm:grid-cols-6 grid-cols-1 gap-2">
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://github.com/mustafakhanneo')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.github} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://linkedin.com/in/mustafakhanneo')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.linkedin} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://x.com/mustafakhanneo')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.x} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://youtube.com/@mustafakhanneo')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.youtube} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://instagram.com/mustafakhanneo')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.instagram} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://facebook.com/mustafakhanne')}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-[24px] h-[24px]" source={icons.facebook} />
          <Text className=" text-[#A6ADBB]">Mustafa Khan</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col justify-start space-y-2 pt-4">
        <Text className="font-medium text-[#A6ADBB] font-tanker text-2xl mb-2">
          Website Limitations
        </Text>
        <Text className="font-bold text-[#A6ADBB] text-lg font-pilcrow">
          TVM Finance can't calculate
        </Text>
        <View className="flex flex-col">
          <Text className="font-archivo text-[#A6ADBB]">
            1. Interest rate for Ordinary Annuity
          </Text>
          <Text className="font-archivo text-[#A6ADBB]">2. Interest rate for Annuity Due</Text>
          <Text className="font-archivo text-[#A6ADBB]">
            3. No of compounding per year for Effective Annual Rate
          </Text>
          <Text className="font-archivo text-[#A6ADBB]">
            4. Interest and Growth rate for Growing Annuity
          </Text>
          <Text className="font-archivo text-[#A6ADBB]">
            5. Yeild Rate and Maturity period of Bond Value
          </Text>
        </View>
      </View>
    </View>

      </ScrollView>
    <StatusBar backgroundColor="#1D232A" style='light'/>
    </SafeAreaView>
  )
}

export default about