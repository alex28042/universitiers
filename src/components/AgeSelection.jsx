import { View, Text } from "react-native";
import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { TextInput } from "react-native-gesture-handler";

const AgeSelection = () => {
  return (
    <TailwindProvider>
      <View className="flex flex-row w-full ml-32 mt-10" style={{paddingBottom: 50}}>
        <TextInput keyboardType="numeric" placeholder="DD" style={{fontSize: 20, fontFamily: "Poppins_500Medium"}} maxLength={2}/>
        <Text className="text-xl" style={{ fontFamily: "Poppins_500Medium" }}>
          /
        </Text>
        <TextInput placeholder="MM" maxLength={2} style={{fontSize: 20, fontFamily: "Poppins_500Medium"}}/>
        <Text className="text-xl"  style={{ fontFamily: "Poppins_500Medium" }}>
          /
        </Text>
        <TextInput placeholder="YYYY" maxLength={4} style={{fontSize: 20, fontFamily: "Poppins_500Medium"}} />
      </View>
    </TailwindProvider>
  );
};

export default AgeSelection;
