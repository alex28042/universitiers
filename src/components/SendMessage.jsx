import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const SendMessage = () => {
  return (
    <View className="w-full h-20 items-center justify-center bottom-0 absolute flex flex-row">
      <TextInput
      style={{fontFamily: 'Poppins_500Medium'}}
        className="w-3/4 h-10 rounded-lg bg-white px-2"
        placeholder="Send you message"
      />
      <TouchableOpacity className="ml-4 h-10 w-10 rounded-full bg-white items-center justify-center">
        <Text style={{fontFamily: 'Poppins_500Medium'}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMessage;
