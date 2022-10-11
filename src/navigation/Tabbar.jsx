import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";

const Tabbar = () => {
  const navigation = useNavigation();

  return (
    <TailwindProvider>
      <View className="w-4/5 h-10 rounded-xl bg-white bottom-0 absolute mb-4">
        <Text>Tabbar</Text>
      </View>
    </TailwindProvider>
  );
};

export default Tabbar;
