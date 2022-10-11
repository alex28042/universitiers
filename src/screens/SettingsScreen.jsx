import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Settings from "../components/Settings/Settings";

const SettingsScreen = () => {
  return (
    <Layout>
      <Text>Settings</Text>
      <Settings />
    </Layout>
  );
};

export default SettingsScreen;
