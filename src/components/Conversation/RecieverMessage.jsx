import { View, Text } from "react-native";
import React from "react";

const RecieverMessage = ({ message }) => {
  return (
    <View className="h-16 w-48 bg-white rounded-xl self-start">
      <Text style={{ fontFamily: "Poppins_500Medium" }}>{message.message}</Text>
    </View>
  );
};

export default RecieverMessage;
