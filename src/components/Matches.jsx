import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import ProfileMatches from "./ProfileMatches";
import NumberOfLikesMatches from "./NumberOfLikesMatches";

const Matches = () => {
  return (
    <TailwindProvider>
      <View className="w-full h-32 rounded-full">
        <Text>Matches</Text>
        <View className="flex flex-row">
          <NumberOfLikesMatches />
          <ProfileMatches />
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Matches;
