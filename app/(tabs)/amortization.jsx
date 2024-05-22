import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { DataTable } from 'react-native-paper';

const amortization = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [principalAmortizationTable, setPrincipalAmortizationTable] = useState(
    []
  );
  const [paymentAmortizationTable, setPaymentAmortizationTable] = useState([]);

  const handleCalculatePrincipalAmortization = () => {
    // Calculate fixed principal payoff every year
    const principalPayment = loanAmount / duration;
    let remainingBalance = loanAmount;
    let begBalance = loanAmount;
    const principalTable = [];

    for (let i = 1; i <= duration; i++) {
      const interest = remainingBalance * (interestRate / 100);
      const principal = principalPayment;
      const totalPayment = interest + principal;
      if (i > 1) {
        begBalance -= principal;
      }
      remainingBalance -= principal;
      principalTable.push({
        year: i,
        begBalance,
        interest,
        principal,
        totalPayment,
        remainingBalance,
      });
    }

    setPrincipalAmortizationTable(principalTable);
  };

  const handleCalculatePaymentAmortization = () => {
    // Calculate fixed payment every year
    const anuualRate = interestRate / 100;
    const a = 1 + interestRate / 100;
    const z = -duration;
    const b = Math.pow(a, z);
    const c = 1 - b;
    const d = (c / interestRate) * 100;
    const e = loanAmount / d;
    const payment = e;
    let remainingBalance = loanAmount;
    let begBalance = loanAmount;
    let totalprincipal = 0;
    const paymentTable = [];

    for (let i = 1; i <= duration; i++) {
      const interest = remainingBalance * anuualRate;
      const principal = payment - interest;
      remainingBalance -= principal;
      totalprincipal += principal;
      paymentTable.push({
        year: i,
        begBalance,
        interest,
        principal,
        totalPayment: payment,
        remainingBalance,
      });
      begBalance = remainingBalance;
    }

    setPaymentAmortizationTable(paymentTable);
  };

  return (
    <SafeAreaView className="bg-[#1D232A] h-full">
      <ScrollView>
      <View className="flex p-2 flex-col mt-4 space-y-4">
      <View
        className="flex bg-[#191E24] rounded h-auto p-4"
      >
        <View>
          <Text className="text-[#A6ADBB] font-pilcrow text-lg font-medium">
          Amortization Calculator
          </Text>
        </View>
        <View className="collapse-content space-y-4">
          <View className="flex bg-[#191E24] rounded h-auto py-2">
          <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Loan Amount"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setLoanAmount(parseFloat(text))}
              />
           <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Interest Rate in %"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setInterestRate(parseFloat(text))}
              />
            <TextInput
                className="border border-[#383F47] text-[#A6ADBB] mt-4 rounded py-1 px-2"
                placeholder="Years"
                placeholderTextColor="#A6ADBB"
                cursorColor={"#A6ADBB"}
                keyboardType="numeric"
                onChangeText={text => setDuration(parseInt(text))}
              />
          </View>
          <View className="flex sm:flex-row flex-col sm:space-x-4 space-x-0 sm:space-y-0 space-y-4  justify-start">
            <TouchableOpacity
              className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
              onPress={handleCalculatePrincipalAmortization}
            >
              <Text className="text-[#a6adbb] font-archivo">
              Calculate Principal Amortization
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center rounded items-center w-auto border border-[#383F47] pt-2 pb-2"
              onPress={handleCalculatePaymentAmortization}
            >
              <Text className="text-[#a6adbb] font-archivo">
              Calculate Payment Amortization
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <Text className="sm:text-xl text-md text-[#a6adbb] font-pilcrow font-medium">
        Principal Amortization Table
      </Text>
      <ScrollView horizontal>
        <DataTable >
          {/* head */}
          <DataTable.Header className="w-full">
            
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Year</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Beg. Balance</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Interest</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Principal</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Total Payment</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Remaining Balance</Text></DataTable.Cell>
            
          </DataTable.Header>
         
            {principalAmortizationTable.map((row, index) => (
              <DataTable.Row className="flex justify-center items-center" key={index}>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{row.year}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.begBalance.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.interest.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.principal.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.totalPayment.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.remainingBalance.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
              </DataTable.Row>
            ))}
         
        </DataTable>
        </ScrollView>
      <Text className="sm:text-xl text-[#a6adbb] text-md font-pilcrow font-medium">
        Payment Amortization Table
      </Text>
      <ScrollView horizontal>
      <DataTable >
          {/* head */}
          <DataTable.Header className="w-full">
            
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Year</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Beg. Balance</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Interest</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Principal</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Total Payment</Text></DataTable.Cell>
              <DataTable.Cell className="px-4 py-1 w-auto"><Text className="text-[#a6adbb] font-archivo">Remaining Balance</Text></DataTable.Cell>
            
          </DataTable.Header>
            {paymentAmortizationTable.map((row, index) => (
               <DataTable.Row className="flex justify-center items-center" key={index}>
              <DataTable.Cell ><Text className="text-[#a6adbb]">{row.year}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.begBalance.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.interest.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.principal.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.totalPayment.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
                <DataTable.Cell ><Text className="text-[#a6adbb]">{Number(row.remainingBalance.toFixed(2)).toLocaleString()}</Text></DataTable.Cell>
             </DataTable.Row>
           ))}
        
       </DataTable>
      </ScrollView>
    </View>
    </ScrollView>
    <StatusBar backgroundColor="#1D232A" style='light'/>
    </SafeAreaView>
  )
}

export default amortization