import { View, Text } from "react-native";
import React from "react";
import ChatDetails from "./ChatDetails";

const Chats = () => {
  return (
    <View className="h-full w-full">
      <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl -z-40 bg-white">
        <Text>Your Conversations</Text>
        <ChatDetails />
      </View>
    </View>
  );
};

export default Chats;
