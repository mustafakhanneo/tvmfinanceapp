import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";

const home = () => {

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

  const [pvalue, setPvalue] = useState("");
  const [fvalue, setFvalue] = useState("");
  const [intr, setIntr] = useState("");
  const [period, setPeroid] = useState("");
  const [answersimp, setAnswersimp] = useState("");
  const [answerOrdinaryFuture, setAnswerOrdinaryFuture] = useState("");
  const [answerOrdinaryPresent, setAnswerOrdinaryPresent] = useState("");
  const [oriFvalue, setOriFvalue] = useState("");
  const [oriPvalue, setOriPvalue] = useState("");
  const [oriFcash, setOriFcash] = useState("");
  const [oriPcash, setOriPcash] = useState("");
  const [oriFintr, setOriFintr] = useState("");
  const [oriPintr, setOriPintr] = useState("");
  const [oriFperiod, setOriFperiod] = useState("");
  const [oriPperiod, setOriPperiod] = useState("");
  const [answerDueFuture, setAnswerDueFuture] = useState("");
  const [answerDuePresent, setAnswerDuePresent] = useState("");
  const [dueFvalue, setDueFvalue] = useState("");
  const [duePvalue, setDuePvalue] = useState("");
  const [dueFcash, setDueFcash] = useState("");
  const [duePcash, setDuePcash] = useState("");
  const [dueFintr, setDueFintr] = useState("");
  const [duePintr, setDuePintr] = useState("");
  const [dueFperiod, setDueFperiod] = useState("");
  const [duePperiod, setDuePperiod] = useState("");
  const [quoteRate, setQuoteRate] = useState("");
  const [freqComp, setFreqComp] = useState("");
  const [expar, setExpar] = useState("");
  const [answerEAR, setAnswerEAR] = useState("");
  const [prepCashflow, setPrepCashflow] = useState("");
  const [prepintr, setPrepintr] = useState("");
  const [prepFuture, setPrepFuture] = useState("");
  const [answerPrepsimp, setAnswerPrepsimp] = useState("");
  const [gPrepCashflow, setGPrepCashflow] = useState("");
  const [gPrepintr, setGPrepintr] = useState("");
  const [gPrepFuture, setGPrepFuture] = useState("");
  const [gRate, setGRate] = useState("");
  const [answerGPrepsimp, setAnswerGPrepsimp] = useState("");
  const [gPresentValue, setGPresentValue] = useState("");
  const [gCashflow, setGCashflow] = useState("");
  const [gIntr, setGIntr] = useState("");
  const [gRateAnnu, setGRateAnnu] = useState("");
  const [gPeriod, setGPeriod] = useState("");
  const [answerGAnnu, setAnswerGAnnu] = useState("");
  const [bondValue, setBondValue] = useState("");
  const [couponAmount, setCouponAmount] = useState("");
  const [yeildRate, setYeildRate] = useState("");
  const [faceValue, setFaceValue] = useState("");
  const [bondPeriod, setBondPeriod] = useState("");
  const [answerBondValue, setAnswerBondValue] = useState("");

  const simpleAnnuity = () => {
    if (pvalue === "") {
      const a = 1 + intr / 100;
      const b = fvalue / Math.pow(a, period);
      const c = b.toFixed(2);
      const d = parseFloat(c).toLocaleString();
      setAnswersimp(`$${d}`);
    } else if (fvalue === "") {
      const a = 1 + intr / 100;
      const b = pvalue * Math.pow(a, period);
      const c = b.toFixed(2);
      const d = parseFloat(c).toLocaleString();
      setAnswersimp(`$${d}`);
    } else if (intr === "") {
      const a = fvalue / pvalue;
      const b = Math.pow(a, 1 / period) - 1;
      const c = b * 100;
      setAnswersimp(`${c.toFixed(2)}%`);
    } else if (period === "") {
      const a = fvalue / pvalue;
      const b = 1 + intr / 100;
      const c = Math.log(a) / Math.log(b);
      setAnswersimp(c.toFixed(2));
    } else {
      setAnswersimp("All Already Known");
    }
  };

  const oriFuture = () => {
    if (oriFvalue === "") {
      const a = 1 + oriFintr / 100;
      const b = Math.pow(a, oriFperiod);
      const c = b - 1;
      const d = (c / oriFintr) * 100;
      const e = d * oriFcash;
      const f = e.toFixed(2);
      const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryFuture(`$${g}`);
    } else if (oriFcash === "") {
      const a = 1 + oriFintr / 100;
      const b = Math.pow(a, oriFperiod);
      const c = b - 1;
      const d = (c / oriFintr) * 100;
      const e = oriFvalue / d;
      const f = e.toFixed(2);
      const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryFuture(`$${g}`);
    } else if (oriFintr === "") {
      setAnswerOrdinaryFuture("Calculate Your Self");
    } else if (oriFperiod === "") {
      const a = oriFvalue / oriFcash;
      const b = 1 + oriFintr / 100;
      const c = (a * oriFintr) / 100;
      const d = c + 1;
      const e = Math.log(d) / Math.log(b);
      setAnswerOrdinaryFuture(e.toFixed(2));
    } else {
      setAnswerOrdinaryFuture("All Already Known");
    }
  };

  const oriPresent = () => {
    if (oriPvalue === "") {
      const a = 1 + oriPintr / 100;
      const z = -oriPperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c / oriPintr) * 100;
      const e = d * oriPcash;
      const f = e.toFixed(2);
      const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryPresent(`$${g}`);
    } else if (oriPcash === "") {
      const a = 1 + oriPintr / 100;
      const z = -oriPperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c / oriPintr) * 100;
      const e = oriPvalue / d;
      const f = e.toFixed(2);
      const g = parseFloat(f).toLocaleString();
      setAnswerOrdinaryPresent(`$${g}`);
    } else if (oriPintr === "") {
      setAnswerOrdinaryPresent("Calculate Your Self");
    } else if (oriPperiod === "") {
      const a = oriPvalue / oriPcash;
      const b = 1 + oriPintr / 100;
      const c = (a * oriPintr) / 100;
      const d = 1 - c;
      const e = Math.log(d) / Math.log(b);
      const f = -e;
      setAnswerOrdinaryPresent(f.toFixed(2));
    } else {
      setAnswerOrdinaryPresent("All Already Known");
    }
  };

  const dueFuture = () => {
    if (dueFvalue === "") {
      const a = 1 + dueFintr / 100;
      const b = Math.pow(a, dueFperiod);
      const c = b - 1;
      const d = (c / dueFintr) * 100;
      const e = d * dueFcash;
      const f = e * a;
      const g = f.toFixed(2);
      const h = parseFloat(g).toLocaleString();
      setAnswerDueFuture(`$${h}`);
    } else if (dueFcash === "") {
      const a = 1 + dueFintr / 100;
      const b = Math.pow(a, dueFperiod);
      const c = b - 1;
      const d = (c / dueFintr) * 100;
      const e = dueFvalue / d;
      const f = e / a;
      const g = f.toFixed(2);
      const h = parseFloat(g).toLocaleString();
      setAnswerDueFuture(`$${h}`);
    } else if (dueFintr === "") {
      setAnswerDueFuture("Calculate Your Self");
    } else if (dueFperiod === "") {
      const a = 1 + dueFintr / 100;
      const b = dueFcash * a;
      const c = dueFvalue * (dueFintr / 100);
      const d = c / b;
      const e = d + 1;
      const g = Math.log(e) / Math.log(a);
      setAnswerDueFuture(g.toFixed(2));
    } else {
      setAnswerDueFuture("All Already Known");
    }
  };

  const duePresent = () => {
    if (duePvalue === "") {
      const a = 1 + duePintr / 100;
      const z = -duePperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c / duePintr) * 100;
      const e = d * duePcash;
      const f = e * a;
      const g = f.toFixed(2);
      const h = parseFloat(g).toLocaleString();
      setAnswerDuePresent(`$${h}`);
    } else if (duePcash === "") {
      const a = 1 + duePintr / 100;
      const z = -duePperiod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = (c / duePintr) * 100;
      const e = duePvalue / d;
      const f = e / a;
      const g = f.toFixed(2);
      const h = parseFloat(g).toLocaleString();
      setAnswerDuePresent(`$${h}`);
    } else if (duePintr === "") {
      setAnswerDuePresent("Calculate Your Self");
    } else if (duePperiod === "") {
      const a = duePvalue / duePcash;
      const b = 1 + duePintr / 100;
      const c = (a * duePintr) / 100;
      const g = c / b;
      const d = 1 - g;
      const e = Math.log(d) / Math.log(b);
      const f = -e;
      setAnswerDuePresent(f.toFixed(2));
    } else {
      setAnswerDuePresent("All Already Known");
    }
  };

  const calGAnnu = () => {
    if (gPresentValue === "") {
      const a = 1 + gIntr / 100;
      const b = 1 + gRateAnnu / 100;
      const c = gIntr / 100 - gRateAnnu / 100;
      const d = b / a;
      const e = Math.pow(d, gPeriod);
      const f = 1 - e;
      const g = f / c;
      const h = g * gCashflow;
      const i = h.toFixed(2);
      const j = parseFloat(i).toLocaleString();
      setAnswerGAnnu(`$${j}`);
    } else if (gCashflow === "") {
      const a = 1 + gIntr / 100;
      const b = 1 + gRateAnnu / 100;
      const c = gIntr / 100 - gRateAnnu / 100;
      const d = b / a;
      const e = Math.pow(d, gPeriod);
      const f = 1 - e;
      const g = f / c;
      const h = gPresentValue / g;
      const i = h.toFixed(2);
      const j = parseFloat(i).toLocaleString();
      setAnswerGAnnu(`$${j}`);
    } else if (gIntr === "") {
      setAnswerGAnnu("Calculate Your Self");
    } else if (gRateAnnu === "") {
      setAnswerGAnnu("Calculate Your Self");
    } else if (gPeriod === "") {
      const a = 1 + gIntr / 100;
      const b = 1 + gRateAnnu / 100;
      const c = gIntr / 100 - gRateAnnu / 100;
      const d = b / a;
      const e = gPresentValue / gCashflow;
      const f = e * c;
      const g = 1 - f;
      const h = Math.log(g) / Math.log(d);
      setAnswerGAnnu(h.toFixed(2));
    } else {
      setAnswerDuePresent("All Already Known");
    }
  };

  const calEAR = () => {
    if (expar === "") {
      const f = quoteRate / 100;
      const a = 1 + f / freqComp;
      const b = Math.pow(a, freqComp);
      const c = b - 1;
      const d = c * 100;
      setAnswerEAR(`${d.toFixed(2)}%`);
    } else if (quoteRate === "") {
      const a = 1 + expar / 100;
      const b = Math.pow(a, 1 / freqComp);
      const c = b - 1;
      const d = c * freqComp;
      const f = d * 100;
      setAnswerEAR(`${f.toFixed(2)}%`);
    } else if (freqComp === "") {
      setAnswerEAR("Calculate yourself");
    } else {
      setAnswerEAR("All Already Known");
    }
  };

  const calPrep = () => {
    if (prepFuture === "") {
      const f = prepintr / 100;
      const a = prepCashflow / f;
      const b = a.toFixed(2);
      const c = parseFloat(b).toLocaleString();
      setAnswerPrepsimp(`$${c}`);
    } else if (prepCashflow === "") {
      const f = prepintr / 100;
      const a = prepFuture * f;
      const b = a.toFixed(2);
      const c = parseFloat(b).toLocaleString();
      setAnswerPrepsimp(`$${c}`);
    } else if (prepintr === "") {
      const a = prepCashflow / prepFuture;
      const f = a * 100;
      setAnswerPrepsimp(`${f.toFixed(2)}%`);
      setAnswerEAR("Calculate yourself");
    } else {
      setAnswerPrepsimp("All Already Known");
    }
  };

  const callGPrep = () => {
    if (gPrepFuture === "") {
      const a = gPrepintr / 100;
      const z = gRate / 100;
      const b = a - z;
      const c = gPrepCashflow / b;
      const d = c.toFixed(2);
      const e = parseFloat(d).toLocaleString();
      setAnswerGPrepsimp(`$${e}`);
    } else if (gPrepCashflow === "") {
      const a = gPrepintr / 100;
      const z = gRate / 100;
      const b = a - z;
      const c = gPrepFuture * b;
      const d = c.toFixed(2);
      const e = parseFloat(d).toLocaleString();
      setAnswerGPrepsimp(`$${e}`);
    } else if (gPrepintr === "") {
      const a = gRate / 100;
      const b = a * gPrepFuture;
      const c = b + gPrepCashflow / 1;
      const d = c / gPrepFuture;
      const e = d * 100;
      setAnswerGPrepsimp(`${e.toFixed(2)}%`);
      console.log(a, b, c, d, e);
    } else if (gRate === "") {
      const a = gPrepintr / 100;
      const b = a * gPrepFuture;
      const c = b - gPrepCashflow / 1;
      const d = c / gPrepFuture;
      const e = d * 100;
      setAnswerGPrepsimp(`${e.toFixed(2)}%`);
    } else {
      setAnswerGPrepsimp("All Already Known");
    }
  };

  const calBondValue = () => {
    if (bondValue === "") {
      const f = yeildRate / 100;
      const a = 1 + yeildRate / 100;
      const z = -bondPeriod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = c / f;
      const e = d * couponAmount;
      const g = faceValue / Math.pow(a, bondPeriod);
      const h = e + g;
      const i = h.toFixed(2);
      const j = parseFloat(i).toLocaleString();
      setAnswerBondValue(`$${j}`);
    } else if (faceValue === "") {
      const a = 1 + yeildRate / 100;
      const z = -bondPeriod;
      const b = yeildRate / 100;
      const c = Math.pow(a, bondPeriod);
      const d = c / b;
      const e = bondValue * b;
      const f = Math.pow(a, z);
      const g = 1 - f;
      const h = couponAmount * g;
      const i = e - h;
      const j = d * i;
      const k = j.toFixed(2);
      const l = parseFloat(k).toLocaleString();
      setAnswerBondValue(`$${l}`);
    } else if (couponAmount === "") {
      const f = yeildRate / 100;
      const a = 1 + yeildRate / 100;
      const z = -bondPeriod;
      const b = Math.pow(a, z);
      const c = 1 - b;
      const d = c / f;
      const g = faceValue / Math.pow(a, bondPeriod);
      const r = bondValue - g;
      const s = r / d;
      const t = s.toFixed(2);
      const u = parseFloat(t).toLocaleString();
      setAnswerBondValue(`$${u}`);
    } else if (yeildRate === "") {
      setAnswerBondValue("Calculate Your Self");
    } else if (bondPeriod === "") {
      setAnswerBondValue("Calculate Your Self");
    } else {
      setAnswerBondValue("All Already Known");
    }
  };

  return (
    <SafeAreaView className="bg-[#1D232A] h-full pt-2 pr-2 pl-2">
      <ScrollView className="flex flex-col space-y-4">

      <View className="flex flex-col justify-start pb-4 mt-5 items-start">
        <Text className="text-md font-bold text-[#A6ADBB]">Instructions</Text>
        <Text className="text-[#A6ADBB]">
          Just enter known values and left the unknown value empty and Click
          Calculate.
        </Text>
      </View>

    
        {/*Simple Present Future Value 1*/}
        
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed(!isCollapsed)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Simple Present Future Value</Text>
              <Image
                source={!isCollapsed ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setPvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Future Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setFvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setIntr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setPeroid(text)}
              />
              <TouchableOpacity onPress={simpleAnnuity} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answersimp || "Answer"}`}</Text>
              </View>
            </View>
          </View>
  
      
      {/*Future Value of ordinary Annuity 2*/}
      
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed2(!isCollapsed2)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Future Value Of Ordinary Annuity</Text>
              <Image
                source={!isCollapsed2 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed2 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Future Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriFvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriFcash(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriFintr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriFperiod(text)}
              />
              <TouchableOpacity onPress={oriFuture} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerOrdinaryFuture || "Answer"}`}</Text>
              </View>
            </View>
          </View>


        {/*Present Value of ordinary Annuity 3*/}
      
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed3(!isCollapsed3)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value Of Ordinary Annuity</Text>
              <Image
                source={!isCollapsed3 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed3 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriPvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriPcash(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriPintr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setOriPperiod(text)}
              />
              <TouchableOpacity onPress={oriPresent} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerOrdinaryPresent || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

              {/*Future Value of Annuity DUe4*/}
      
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed4(!isCollapsed4)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">future Value Of Annuity Due</Text>
              <Image
                source={!isCollapsed4 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed4 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Future Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDueFvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDueFcash(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDueFintr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDueFperiod(text)}
              />
              <TouchableOpacity onPress={dueFuture} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerDueFuture || "Answer"}`}</Text>
              </View>
            </View>
          </View>
       

        {/*Present Value of Annuity Due5*/}
      
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed5(!isCollapsed5)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value Of Annuity Due</Text>
              <Image
                source={!isCollapsed5 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed5 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDuePvalue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDuePcash(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDuePintr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDuePperiod(text)}
              />
              <TouchableOpacity onPress={duePresent} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerDuePresent || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

         {/*Present Value of Growing Annuity6*/}
      
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed6(!isCollapsed6)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Present Value Of Growing Annuity</Text>
              <Image
                source={!isCollapsed6 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed6 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGPresentValue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGCashflow(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGIntr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Growth Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGRateAnnu(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Period"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGPeriod(text)}
              />
              <TouchableOpacity onPress={calGAnnu} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerGAnnu || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

        {/*Effective Annual Rate 7*/}
        
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed7(!isCollapsed7)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Effective Annual Rate</Text>
              <Image
                source={!isCollapsed7 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed7 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Effective Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setExpar(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Quote Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setQuoteRate(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Compounding per Year"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setFreqComp(text)}
              />
              
              <TouchableOpacity onPress={calEAR} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerEAR || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

         {/*Prep int return 8*/}
         
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed8(!isCollapsed8)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Prepetual Investment Return</Text>
              <Image
                source={!isCollapsed8 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed8 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setPrepFuture(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setPrepCashflow(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setPrepintr(text)}
              />
              
              <TouchableOpacity onPress={calPrep} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerPrepsimp || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

        {/*GrowingPrep int return 9*/}
        
          <View className="flex bg-[#191E24] rounded h-auto p-4">
          <TouchableOpacity
          onPress={() => setIsCollapsed9(!isCollapsed9)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Growing Prepetual Investment Return</Text>
              <Image
                source={!isCollapsed9 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed9 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Present Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGPrepFuture(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Cash Flow"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGPrepCashflow(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGPrepintr(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Growth Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setGRate(text)}
              />
              <TouchableOpacity onPress={callGPrep} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerGPrepsimp || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

                 {/*Bond Value 10 */}
      
          <View className="flex p-4 bg-[#191E24] rounded h-auto">
          <TouchableOpacity
          onPress={() => setIsCollapsed10(!isCollapsed10)}
        >
            <View className="flex flex-row justify-between">
              <Text className=" text-[#A6ADBB] font-bold">Bond Value</Text>
              <Image
                source={!isCollapsed10 ? icons.darrow : icons.rarrow}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </View>
            </TouchableOpacity>
            <View className={`flex flex-col space-y-2 ${isCollapsed10 ? "hidden" : ""}`}>
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Bond Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setBondValue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Face Value"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setFaceValue(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Coupon Amount"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setCouponAmount(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Yeild Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setYeildRate(text)}
              />
              <TextInput
                className="border border-[#383F47] text-[#A6ADBB] rounded py-1 px-2"
                placeholder="Maturity Peroid"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setBondPeriod(text)}
              />
              <TouchableOpacity onPress={calBondValue} className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">Calculate</Text>
              </TouchableOpacity>
              <View className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2">
                <Text className=" text-[#A6ADBB]">{`${answerBondValue || "Answer"}`}</Text>
              </View>
            </View>
          </View>
        

      </ScrollView>
      <StatusBar backgroundColor="#1D232A" style="light" />
    </SafeAreaView>
  );
};

export default home;
