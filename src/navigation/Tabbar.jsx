import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons'

const Tabbar = () => {
  const navigation = useNavigation();

  return (
    <TailwindProvider>
      <View className="w-4/5 h-10 rounded-xl bg-white items-center justify-center bottom-0 absolute mb-4">
        <Ionicons color="black" size={20} name="clipboard-outline" onPress={() => navigation.navigate("SwipeScreen")}/>
      </View>
    </TailwindProvider>
  );
};

export default Tabbar;
