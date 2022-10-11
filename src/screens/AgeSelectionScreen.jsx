import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import AgeSelection from "../components/AgeSelection";

const AgeSelectionScreen = () => {
  return (
    <Layout>
      <Text>How old are you?</Text>
      <Text>you must be 18+ years old</Text>
      <AgeSelection />
      <View style={{width: "80%"}} className="items-center bottom-0 absolute mb-10">
        <ButtonCustom bgColor="white" text="Select your photos" />
      </View>
    </Layout>
  );
};

export default AgeSelectionScreen;
