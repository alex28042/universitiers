import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileMatches = (props) => {
  const userId = props.userId;
  const navigation = useNavigation()
  console.log(userId);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChatConversationScreen")} className="h-11 w-11 rounded-full bg-slate-400 ml-1"></TouchableOpacity>
  );
};

export default ProfileMatches;
