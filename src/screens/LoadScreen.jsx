import { View, Text, ActivityIndicator, Image } from "react-native";
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
      <Image
        className="h-72 w-72"
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/universitiers-c8b7c.appspot.com/o/Universitiers.png?alt=media&token=11231677-30c5-4c56-8c10-dd0679350c2c",
        }}
      />
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
        Universitiers
      </Text>
    </Layout>
  );
};

export default LoadScreen;
