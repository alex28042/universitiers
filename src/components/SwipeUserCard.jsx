import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";

const SwipeUserCard = ({ id, name, age, uni, bio }) => {
  const navigation = useNavigation();

  const getAge = (birthday) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  
  return (
    <TailwindProvider>
      <View className="h-3/5 w-3/4 rounded-lg bg-white items-center">
        <View className="top-0 absolute mt-2 h-20 w-40 "></View>
        <View className="bottom-0 absolute self-start w-full justify-between flex flex-row">
          <View className="flex flex-col ml-8">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>{name},{getAge(new Date(age[2], age[1], age[0]))}</Text>
            <Text style={{ fontFamily: "Poppins_500Medium", marginBottom: 10 }}>
              {uni}
            </Text>
          </View>
          <Ionicons
            name="information-circle-outline"
            onPress={() => navigation.navigate("PreviewProfileScreen")}
            size={30}
            style={{ marginRight: 20, marginBottom: 10 }}
          />
        </View>
      </View>
    </TailwindProvider>
  );
};

export default SwipeUserCard;
