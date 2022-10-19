import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import SwipeUserCard from "../components/SwipeUserCard";
import ButtonLike from "../components/ButtonLike";
import ButtonDecline from "../components/ButtonDecline";
import Tabbar from "../navigation/Tabbar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SwipeScreen = () => {
  const navigation = useNavigation()
  return (
    <Layout>
      <Ionicons name="settings-outline" onPress={() => navigation.navigate("SettingsScreen")} size={20} />
      <SwipeUserCard />
      <View className="flex flex-row">
        <ButtonLike />
        <ButtonDecline />
      </View>
      <Tabbar />
    </Layout>
  );
};

export default SwipeScreen;
