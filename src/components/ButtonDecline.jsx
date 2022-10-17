import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const buttonDecline = () => {
  return (
    <TailwindProvider>
      <TouchableOpacity className="h-10 w-10 bg-white rounded-full">
        <Text>X</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
};

export default buttonDecline;
