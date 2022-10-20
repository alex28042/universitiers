import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatDetails = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChatConversationScreen")} className="w-full h-16 justify-center z-50 bg-white">
      <View className="flex flex-row ml-4">
        <View className="h-10 w-10 rounded-full bg-neutral-400"></View>
        <View className="flex flex-col ml-4">
          <Text style={{fontFamily: 'Poppins_700Bold'}} >Name</Text>
          <Text style={{fontFamily: 'Poppins_500Medium'}}>msg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
