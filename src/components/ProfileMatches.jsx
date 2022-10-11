import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const ProfileMatches = () => {
  return (
    <TailwindProvider>
      <View className="h-8 w-8 rounded-full bg-white"></View>
    </TailwindProvider>
  );
};

export default ProfileMatches;
