import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const ProfileMatches = () => {
  return (
    <TailwindProvider>
      <View className="h-11 w-11 rounded-full bg-slate-400 ml-1"></View>
    </TailwindProvider>
  );
};

export default ProfileMatches;
