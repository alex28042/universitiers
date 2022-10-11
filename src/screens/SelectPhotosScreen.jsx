import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import CardPhoto from "../components/CardPhoto";

const SelectPhotosScreen = () => {
  return (
    <Layout>
      <Text>Select your photos</Text>
      <View className="grid grid-cols-3">
        <CardPhoto />
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-10"
      >
        <ButtonCustom bgColor="white" text="Enjoy!" />
      </View>
    </Layout>
  );
};

export default SelectPhotosScreen;
