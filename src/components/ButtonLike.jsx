import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const buttonLike = () => {
  return (
    <TailwindProvider>
      <TouchableOpacity className="h-10 w-10 bg-white rounded-full">
        <Text>Like</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
};

export default buttonLike;
