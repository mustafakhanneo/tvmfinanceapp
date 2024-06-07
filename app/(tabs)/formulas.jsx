import { View, Text, TouchableOpacity,
  ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';


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
      <ScrollView showsVerticalScrollIndicator={false} className="flex flex-col px-2 space-y-4" >
      <View className="flex flex-col justify-start pb-4 mt-5 items-start">
        <Text className="text-md font-bold text-[#A6ADBB]">Formulas</Text>
        <Text className="text-[#A6ADBB]">
        All formulas are listed. Tap on formula name to view formula.
        </Text>
        </View>
        {/*Simple Present Future Value 1*/}
        
        <View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ FV = PV \\times \\left(1 + i\\right)^n$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

          {/*Future Value of Ordinary Annuity 2*/}
        
        <View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed2 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n - 1}{i}\\biggr]$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

  {/*Present Value of Ordinary Annuity 3*/}
        
  <View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed3 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr]$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

  {/*Future Value of Annuity Due 4*/}
        
  <View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed4 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ FV = C \\times \\biggl[\\dfrac{\\left(1 + i\\right)^n -1}{i}\\biggr] \\times \\left(1 + i\\right)$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">FV = Future Value</Text>
              <Text className=" text-[#A6ADBB]">C = Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

{/*Present Value of Annuity Due 5*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed5 && (
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ PV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr] \\times \\left(1 + i\\right)$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = CashFlow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

          {/*Present Value of Growing Annuity 6*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed6 && (
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ PV = C \\times \\Biggl[\\dfrac{1- \\left(\\dfrac{1+g}{1+i}\\right)^{n}}{i - g}\\Biggr]$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C = CashFlow</Text>
              <Text className=" text-[#A6ADBB]">i =  Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">g =  Growth Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Period</Text>
            </View></View>)}
          </View>

          {/*Effective Annual Rate 7*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed7 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ EAR = \\left(1 + \\dfrac{QR}{m}\\right)^m - 1$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">EAR = Effective Rate</Text>
              <Text className=" text-[#A6ADBB]">QR =  Quote Rate</Text>
              <Text className=" text-[#A6ADBB]">m = Compounding per Year</Text>
            </View></View>)}
          </View>

          {/*Prepetual Investment Return 8*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed8 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ PV = \\dfrac{C}{i}$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C =  Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i = Interest Rate</Text>
            </View></View>)}
          </View>

          {/*Growing Prepetual Investment Return 9*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed9 && ( 
              <View>
            <View className={"flex justify-center items-center mt-4 mb-2 "}>
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ PV = \\dfrac{C}{i-g}$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">PV = Present Value</Text>
              <Text className=" text-[#A6ADBB]">C =  Cash Flow</Text>
              <Text className=" text-[#A6ADBB]">i = Interest Rate</Text>
              <Text className=" text-[#A6ADBB]">g = Growth Rate</Text>
            </View></View>)}
          </View>

          {/*Bond Value 10*/}
        
<View className="flex bg-[#191E24] rounded-lg mt-1 h-auto w-full p-4">
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
            {!isCollapsed10 && ( 
              <View>
            <View className="flex justify-center items-center mt-4 mb-2 ">
            <MathJaxSvg 
  fontSize={16}
  color="white"
  fontCache={true}
>
  {`
$$ BV = C \\times \\biggl[\\dfrac{1- \\left(1 + i\\right)^{-n}}{i}\\biggr] + \\dfrac{FV}{\\left(1 + i\\right)^n}$$
  `}
</MathJaxSvg>
            </View>
            <View className="">
            <Text className=" text-[#A6ADBB]">Where:</Text>
              <Text className=" text-[#A6ADBB]">BV = Bond Value</Text>
              <Text className=" text-[#A6ADBB]">FV=  Face Value</Text>
              <Text className=" text-[#A6ADBB]">C = Coupon Amount</Text>
              <Text className=" text-[#A6ADBB]">i = Yeild Rate</Text>
              <Text className=" text-[#A6ADBB]">n = Maturity Period</Text>
            </View></View>)}
          </View>
     
     
    </ScrollView>
    <StatusBar backgroundColor="#1D232A" style='light'/>
    </SafeAreaView>
  )
}

export default formulas