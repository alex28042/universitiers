import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const CardPhoto = () => {
  return (
    <TailwindProvider>
      <View className="h-28 w-16 rounded-md bg-white mr-4 mt-2"></View>
    </TailwindProvider>
  );
};

export default CardPhoto;
