import { View, Text } from "react-native";
import React from "react";

const ConversationMessage = (props) => {
  return (
    <>
      {props.messageToUser ? (
        <View className="h-16 w-48 bg-white rounded-xl self-start">
          <Text style={{fontFamily: 'Poppins_500Medium'}}>ConversationMessage</Text>
        </View>
      ) : (
        <View className="h-16 w-48 bg-white rounded-xl self-end">
          <Text style={{fontFamily: 'Poppins_500Medium'}}>ConversationMessage</Text>
        </View>
      )}
    </>
  );
};

export default ConversationMessage;
