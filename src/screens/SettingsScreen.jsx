import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Settings from "../components/Settings/Settings";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { currentUser } from "../data/User";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const SettingsScreen = () => {
  const navigation = useNavigation();
  return currentUser.id == "" ? (
    <LoadingScreen />
  ) : (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 80, left: 15 }}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{ fontFamily: "Poppins_700Bold" }}
        className="top-20 text-2xl absolute"
      >
        Settings
      </Text>
      <Settings />
    </Layout>
  );
};

export default SettingsScreen;
