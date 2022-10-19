import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const CardPhoto = () => {
  return (
    <TailwindProvider>
      <View className="h-28 w-16 rounded-md bg-white mr-5 ml-5"></View>
    </TailwindProvider>
  );
};

export default CardPhoto;
