import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const NumberOfLikesMatches = () => {
  return (
    <View className="h-11 w-11 rounded-full bg-slate-400 ml-10 items-center justify-center">
      <Text style={{fontFamily: 'Poppins_700Bold'}} >+99</Text>
    </View>
  );
};

export default NumberOfLikesMatches;
