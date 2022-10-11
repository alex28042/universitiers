import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const ChatDetails = () => {
  return (
    <TouchableOpacity className="w-full h-14 bg-white">
      <View className="flex flex-row">
        <View className="h-8 w-8 rounded-full bg-neutral-400"></View>
        <View className="flex flex-col">
          <Text>Name</Text>
          <Text>msg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
