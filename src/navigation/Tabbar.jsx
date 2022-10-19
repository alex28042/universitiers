import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons'

const Tabbar = () => {
  const navigation = useNavigation();

  return (
    <TailwindProvider>
      <View className="w-4/5 h-10 rounded-xl flex flex-row bg-white items-center justify-between bottom-0 absolute mb-4">
        <Ionicons color="black" size={30} name="clipboard-outline" onPress={() => navigation.navigate("SwipeScreen")}/>
        <Ionicons color="black" size={30} name="heart-outline" onPress={() => navigation.navigate("LikesScreen")}/>
        <Ionicons color="black" size={30} name="chatbox-outline" onPress={() => navigation.navigate("ChatScreen")}/>
        <Ionicons color="black" size={30} name="person-outline" onPress={() => navigation.navigate("ProfileScreen")}/>
      </View>
    </TailwindProvider>
  );
};

export default Tabbar;
