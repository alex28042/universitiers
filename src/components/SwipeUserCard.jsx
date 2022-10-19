import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";

const SwipeUserCard = () => {
  return (
    <TailwindProvider>
      <View className="h-3/5 w-3/4 rounded-md bg-white items-center">
        <View className="top-0 absolute mt-2 h-2 w-40"></View>
        <View className="bottom-0 absolute self-start w-full justify-between flex flex-row">
          <View className="flex flex-col ml-8">
            <Text style={{fontFamily: "Poppins_700Bold"}}>Name, age</Text>
            <Text  style={{fontFamily: "Poppins_500Medium", marginBottom:10}}>Uni</Text>
          </View>
          <Ionicons name="information-circle-outline" size={30} style={{marginRight:20, marginBottom:10}}/>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default SwipeUserCard;
