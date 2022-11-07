import { View, Text, ActivityIndicator, Image } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import Logo from '../../assets/Universitiers.png'

const LoadScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("SwipeScreen");
  }, 200);
  
  return (
    <Layout>
      <Image
        className="h-72 w-72"
        source={Logo}
      />
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
        Universitiers
      </Text>
    </Layout>
  );
};

export default LoadScreen;
