import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";

const LoadScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("SwipeScreen");
  }, 200);
  return (
    <Layout>
      <ActivityIndicator />
    </Layout>
  );
};

export default LoadScreen;
