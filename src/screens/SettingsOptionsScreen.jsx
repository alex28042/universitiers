import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import SettingsScreens from "../components/SettingsScreens/SettingsScreens";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsOptionsScreen = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation()

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 80, left: 15 }}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{ fontFamily: "Poppins_700Bold" }}
        className="top-20 absolute text-2xl"
      >
        {name}
      </Text>
      <SettingsScreens name={name} />
    </Layout>
  );
};

export default SettingsOptionsScreen;
