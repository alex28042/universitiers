import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SendMessage = () => {
  return (
    <View className="w-full h-20 items-center justify-center bottom-0 absolute flex flex-row">
      <TextInput
        style={{ fontFamily: "Poppins_500Medium" }}
        className="w-3/4 h-10 rounded-xl bg-white px-2"
        placeholder="Send you message"
      />
      <TouchableOpacity className="ml-4 h-10 w-10 rounded-full bg-white items-center justify-center">
        <Ionicons name="arrow-forward-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SendMessage;
