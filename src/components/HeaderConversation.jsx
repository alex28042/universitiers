import { View, Text } from "react-native";
import React from "react";

const HeaderConversation = () => {
  return (
    <View className="w-full h-24 top-0 absolute bg-white rounded-lg">
      <View className="mt-10 w-full flex flex-row">
        <View className="h-8 w-8 bg-neutral-400 rounded-full"></View>
        <View className="flex flex-col">
          <Text>Name</Text>
          <Text>Uni</Text>
        </View>
        <Text>options</Text>
      </View>
    </View>
  );
};

export default HeaderConversation;
