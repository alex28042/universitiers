import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatDetails = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChatConversationScreen")} className="w-full h-14 justify-center z-50 bg-slate-400">
      <View className="flex flex-row">
        <View className="h-8 w-8 rounded-full bg-neutral-400"></View>
        <View className="flex flex-col">
          <Text >Name</Text>
          <Text>msg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
