import { View, Text } from "react-native";
import React from "react";

const SenderMessage = ({message}) => {
  console.log(message );
  return (
    <View style ={{backgroundColor: "#9FA0FF"}} className="h-16 w-48 bg-white rounded-xl self-end">
      <Text className="ml-2 mt-2" style={{ fontFamily: "Poppins_500Medium" }}>
        {message.message}
      </Text>
    </View>
  );
};

export default SenderMessage;
