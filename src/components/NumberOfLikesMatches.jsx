import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const NumberOfLikesMatches = () => {
  return (
    <View className="h-8 w-8 rounded-full bg-white items-center justify-center">
      <Text>+99</Text>
    </View>
  );
};

export default NumberOfLikesMatches;
