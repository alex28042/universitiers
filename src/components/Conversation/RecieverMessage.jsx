import { View, Text } from "react-native";
import React from "react";

const RecieverMessage = ({ message }) => {
  return (
    <View className=" bg-white rounded-2xl rounded-tl-none px-5 py-3 mx-3 my-2 mr-32 self-start">
      <Text style={{ fontFamily: "Poppins_500Medium" }}>{message.message}</Text>
    </View>
  );
};

export default RecieverMessage;
