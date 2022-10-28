import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { currentUser } from "../data/User";
import { useNavigation } from "@react-navigation/native";

const NumberOfLikesMatches = () => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("LikesScreen")} className="h-11 w-11 rounded-full bg-slate-400 ml-10 items-center justify-center">
      <Text style={{fontFamily: 'Poppins_700Bold'}} >+{currentUser.likes.length}</Text>
    </TouchableOpacity>
  );
};

export default NumberOfLikesMatches;
