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
      <ButtonCustom bgColor="white" text="Enter your University" />
    </Layout>
  );
};

export default RegisterScreen;
