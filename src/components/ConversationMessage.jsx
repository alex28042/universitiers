import { View, Text } from "react-native";
import React from "react";

const ConversationMessage = (props) => {
  return (
    <>
      {props.messageToUser ? (
        <View className="h-16 w-20 bg-white rounded-xl self-start">
          <Text>ConversationMessage</Text>
        </View>
      ) : (
        <View className="h-16 w-20 bg-white rounded-xl self-end">
          <Text>ConversationMessage</Text>
        </View>
      )}
    </>
  );
};

export default ConversationMessage;
