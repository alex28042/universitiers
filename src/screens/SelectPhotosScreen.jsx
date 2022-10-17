import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import CardPhoto from "../components/CardPhoto";
import ButtonCustom from "../components/ButtonCustom";

const SelectPhotosScreen = () => {
  return (
    <Layout>
      <Text>Select your photos</Text>
      <View className="grid grid-cols-3">
        <CardPhoto />
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-4"
      >
        <ButtonCustom to="SwipeScreen" bgColor="white" text="Enjoy!" />
      </View>
    </Layout>
  );
};

export default SelectPhotosScreen;
