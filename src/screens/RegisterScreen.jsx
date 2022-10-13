import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import TextInputCustom from "../components/TextInputCustom";
import ButtonCustom from "../components/ButtonCustom";

const RegisterScreen = () => {
  return (
    <Layout>
      <Text>Welcome!</Text>
      <Text>to Universitiers</Text>
      <TextInputCustom placeholder="First name" />
      <TextInputCustom placeholder="Email" />
      <TextInputCustom placeholder="Password" />
      <View className="bottom-0 absolute mb-4 w-full items-center">
        <ButtonCustom to="UnivesitySelectScreen" bgColor="white" text="Enter your University" />
      </View>
    </Layout>
  );
};

export default RegisterScreen;
