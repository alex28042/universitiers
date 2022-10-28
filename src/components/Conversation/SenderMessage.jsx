import { View, Text } from "react-native";
import React from "react";

const SenderMessage = () => {
  return (
    <View style ={{backgroundColor: "#9FA0FF"}} className="h-16 w-48 bg-white rounded-xl self-end">
      <Text style={{ fontFamily: "Poppins_500Medium" }}>
        ConversationMessage
      </Text>
    </View>
  );
};

export default SenderMessage;
