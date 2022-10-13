import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";

const UnivesitySelectScreen = () => {
  return (
    <Layout>
      <Text>Enter your University</Text>
      <ButtonCustom bgColor="white" text="University" />
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <ButtonCustom to="AgeSelectionScreen" bgColor="white" text="How old are you? :)" />
      </View>
    </Layout>
  );
};

export default UnivesitySelectScreen;
