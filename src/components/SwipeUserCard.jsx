import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const SwipeUserCard = () => {
  return (
    <TailwindProvider>
      <View className="h-3/5 w-3/4 rounded-md bg-white items-center">
        <View className="top-0 absolute mt-2 h-2 w-40"></View>
        <View className="bottom-0 absolute self-start flex flex-row">
          <View className="flex flex-col">
            <Text>Name, age</Text>
            <Text>Uni</Text>
          </View>
          <View className="h-10 w-10 bg-neutral-500 rounded-full">
          </View>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default SwipeUserCard;
