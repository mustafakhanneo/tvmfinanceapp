import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { icons } from "../../constants";
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { Modal, Portal, PaperProvider } from 'react-native-paper';

const about = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isupdate, setIsupdate] = useState(true);
  const [closeText, setCloseText] = useState("")
  const [updateText, setUpdateText] = useState("");

  const closeModal = () => {
    setModalVisible(false)
  }

  async function checkUpdates() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        setUpdateText("Update is Available for version 1.0.1");
        setCloseText("Later")
        setIsupdate(true);
        setModalVisible(true);
      } else {
        setUpdateText("You are using TVM Finance Updated version 1.0.1");
        setCloseText("Close")
        setIsupdate(false);
        setModalVisible(true);
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Ops! Check your internet connection`);
    }
  }

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
        setModalVisible(false);
      } else {
        alert("You are Running TVM Finance Updated version")
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Check your internet connection: ${error}`);
    }
  }

  return (
    <SafeAreaView className="bg-[#1D232A] h-full">
      <ScrollView>
        
      <View className="flex flex-col p-2 mt-4 space-y-4">
      <PaperProvider>
      <View className="flex flex-col justify-start space-y-2">
      
      <Portal>
        <Modal visible={modalVisible} onDismiss={() => {setModalVisible(false)} } className="">
          <View
        className="flex flex-col bg-[#191E24] justify-center border border-[#383F47] items-center rounded-lg h-auto px-2 pt-2 pb-4 space-y-4">
          <Text className="text-[#A6ADBB] text-md font-medium" >{updateText}</Text>
          <View className="flex flex-row space-x-4 justify-stretch">
          <TouchableOpacity
          className={`flex justify-center rounded-lg items-center ${isupdate ? "w-auto"  : "w-full"} border border-[#383F47] px-4 pt-2 pb-2`}
          onPress={closeModal}
        >
          <Text className=" text-[#A6ADBB]">{closeText}</Text>
        </TouchableOpacity>
        {isupdate && ( 

        <TouchableOpacity
          className="flex justify-center rounded-lg items-center w-auto border border-[#383F47] px-4 pt-2 pb-2"
          onPress={onFetchUpdateAsync}
        >
          <Text className=" text-[#A6ADBB] font-medium">Update Now</Text>
        </TouchableOpacity>
        )}
          </View>
          
      </View>
          </Modal>
          </Portal>
          
      <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={checkUpdates}
        >
          
          <Text className=" text-[#A6ADBB] font-archivo">Check for updates</Text>
        </TouchableOpacity>
        <View className="flex flex-col pt-4">
        <Text className="font-medium text-[#A6ADBB] font-tanker text-xl mb-1">
          Developer Profile
        </Text>
        <Text className="font-medium text-sm text-[#A6ADBB] font-archivo">
          I'm <Text className="font-tanker text-yellow-500">Mustafa Khan</Text>,
          a developer with a strong background in Economics and Finance from NED
          University. My passion for coding complements my expertise, allowing
          me to create tailored solutions for finance websites. Proficient in
          React, NextJS, Dart, React Native, JavaScript, and SQL.
        </Text>
        <Text className="font-medium text-[#A6ADBB] text-sm font-archivo">
          With a passion for continuous learning and staying updated with the
          latest developments in both finance and technology, I am dedicated to
          staying at the forefront of innovation and driving success for your
          finance website. Let's collaborate to build a digital platform that
          empowers users to make informed financial decisions and achieve their
          goals with confidence.
        </Text>
        </View>
      </View>
      </PaperProvider>
      <View className="grid sm:grid-cols-6 grid-cols-1 gap-2">
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://github.com/mustafakhanneo')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.github} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://linkedin.com/in/mustafakhanneo')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.linkedin} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://x.com/mustafakhanneo')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.x} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://youtube.com/@mustafakhanneo')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.youtube} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://instagram.com/mustafakhanneo')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.instagram} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
          onPress={() => { Linking.openURL('https://facebook.com/mustafakhanne')}}
        >
          <Image className="w-[24px] h-[24px]" source={icons.facebook} />
          <Text className=" text-[#A6ADBB]"> Mustafa Khan</Text>
        </TouchableOpacity>
      </View>
      
      <View className="flex flex-col justify-start space-y-2 pt-4">
        <Text className="font-medium text-[#A6ADBB] font-tanker text-xl mb-2">
          Website Limitations
        </Text>
        <Text className="font-bold text-[#A6ADBB] text-md font-pilcrow">
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