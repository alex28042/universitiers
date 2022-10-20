import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import ProfileMatches from "./ProfileMatches";
import NumberOfLikesMatches from "./NumberOfLikesMatches";

const Matches = () => {
  return (
    <TailwindProvider>
      <View className="w-full top-20 bg-white absolute h-24 rounded-3xl">
        <Text style={{fontFamily: 'Poppins_700Bold'}} className="text-lg ml-10 mt-2">Matches with you!</Text>
        <View className="flex flex-row mt-2">
          <NumberOfLikesMatches />
          <ProfileMatches />
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Matches;
