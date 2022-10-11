import { View, Text } from "react-native";
import React from "react";
import ConversationMessage from "./ConversationMessage";

const Conversation = (props) => {
  return (
    <View className="w-full">
     <ConversationMessage messageToUser={true} /> 
     <ConversationMessage messageToUser={false} /> 
    </View>
  );
};

export default Conversation;
