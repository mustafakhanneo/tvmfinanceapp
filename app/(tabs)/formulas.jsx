import { View, Text, TouchableOpacity,
  ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { equate, icons } from '../../constants';

const formulas = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);
  const [isCollapsed6, setIsCollapsed6] = useState(true);
  const [isCollapsed7, setIsCollapsed7] = useState(true);
  const [isCollapsed8, setIsCollapsed8] = useState(true);
  const [isCollapsed9, setIsCollapsed9] = useState(true);
  const [isCollapsed10, setIsCollapsed10] = useState(true);
  
  return (
    <SafeAreaView className="bg-[#1D232A] h-full">
      <ScrollView className="flex flex-col px-2 space-y-4">
      <View className="flex flex-col justify-start pb-4 mt-5 items-start">
        <Text className="text-md font-bold text-[#A6ADBB]">Formulas</Text>
        <Text className="text-[#A6ADBB]">
        All formulas are listed. Tap on formula name to view formula.
        </Text>
        </View>
        {/*Simple Present Future Value 1*/}
        
        <View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Simple Present Future Value</Text>
              <Image
                source={!isCollapsed ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed ? "hidden" : ""}`}>
             <Image className="h-4 w-1/2" source={equate.simple} />
            </View>
            <View className={`${isCollapsed ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

          {/*Future Value of Ordinary Annuity 2*/}
        
        <View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed2(!isCollapsed2)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Future Value of Ordinary Annuity</Text>
              <Image
                source={!isCollapsed2 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed2 ? "hidden" : ""}`}>
             <Image className="h-9 w-1/2" source={equate.fori} />
            </View>
            <View className={`${isCollapsed2 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

  {/*Present Value of Ordinary Annuity 3*/}
        
  <View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed3(!isCollapsed3)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value of Ordinary Annuity</Text>
              <Image
                source={!isCollapsed3 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed3 ? "hidden" : ""}`}>
             <Image className="h-9 w-1/2" source={equate.pori} />
            </View>
            <View className={`${isCollapsed3 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

  {/*Future Value of Annuity Due 4*/}
        
  <View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed4(!isCollapsed4)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Future Value of Annuity Due</Text>
              <Image
                source={!isCollapsed4 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed4 ? "hidden" : ""}`}>
             <Image className="h-9 w-3/4" source={equate.fdue} />
            </View>
            <View className={`${isCollapsed4 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

{/*Present Value of Annuity Due 5*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed5(!isCollapsed5)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value of Annuity Due</Text>
              <Image
                source={!isCollapsed5 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed5 ? "hidden" : ""}`}>
             <Image className="h-9 w-3/4" source={equate.pdue} />
            </View>
            <View className={`${isCollapsed5 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = CashFlow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

          {/*Present Value of Growing Annuity 6*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed6(!isCollapsed6)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value of Growing Annuity</Text>
              <Image
                source={!isCollapsed6 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed6 ? "hidden" : ""}`}>
             <Image className="h-[80px] w-[240px]" source={equate.gannuity} />
            </View>
            <View className={`${isCollapsed6 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = CashFlow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">g =  Growth Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View>
          </View>

          {/*Effective Annual Rate 7*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed7(!isCollapsed7)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Effective Annual Rate</Text>
              <Image
                source={!isCollapsed7 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed7 ? "hidden" : ""}`}>
             <Image className="h-[50px] w-[230px]" source={equate.efer} />
            </View>
            <View className={`${isCollapsed7 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">EAR = Effective Rate</Text>
              <Text className=" text-[#A6ADBB]">QR =  Quote Rate</Text>
              <Text className=" text-[#A6ADBB]">m = Compounding per Year</Text>
            </View>
          </View>

          {/*Prepetual Investment Return 8*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed8(!isCollapsed8)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Prepetual Investment Return</Text>
              <Image
                source={!isCollapsed8 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed8 ? "hidden" : ""}`}>
             <Image className="h-[65px] w-[120px]" source={equate.prepr} />
            </View>
            <View className={`${isCollapsed8 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C =  Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i = Interest Rate</Text>
            </View>
          </View>

          {/*Growing Prepetual Investment Return 9*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed9(!isCollapsed9)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Growing Prepetual Investment Return</Text>
              <Image
                source={!isCollapsed9 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed9 ? "hidden" : ""}`}>
             <Image className="h-14 w-2/5" source={equate.gprepr} />
            </View>
            <View className={`${isCollapsed9 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C =  Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i = Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">g = Growth Rate</Text>
            </View>
          </View>

          {/*Bond Value 10*/}
        
<View className="flex bg-[#191E24] rounded mt-1 h-auto w-full p-4">
          <TouchableOpacity onPress={() => setIsCollapsed10(!isCollapsed10)}>
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Bond Value</Text>
              <Image
                source={!isCollapsed10 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex justify-center items-center mt-4 mb-2 ${isCollapsed10 ? "hidden" : ""}`}>
             <Image className="h-9 w-4/5" source={equate.bondv} />
            </View>
            <View className={`${isCollapsed10 ? "hidden" : ""}`}>
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">BV = Bond Value</Text>
              <Text className=" text-[#A6ADBB]">FV=  Face Value</Text>
              <Text className=" text-[#A6ADBB]">C = Coupon Amount</Text>
              <Text className=" text-[#A6ADBB]">i = Yeild Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Maturity Period</Text>
            </View>
          </View>
     
     
    </ScrollView>
    <StatusBar backgroundColor="#1D232A" style='light'/>
    </SafeAreaView>
  )
}

export default formulas