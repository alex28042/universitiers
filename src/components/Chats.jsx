import { View, Text } from "react-native";
import React from "react";
import ChatDetails from "./ChatDetails";

const Chats = () => {
  return (
    <View className="h-3/4 w-full rounded-full bg-white">
      <Text>Your Conversations</Text>
      <ChatDetails />
    </View>
  );
};

export default Chats;
