import { View, Text, TextInputComponent } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import TextInputCustom from "../components/TextInputCustom";
import ButtonCustom from "../components/ButtonCustom";

const LoginScreen = () => {
  return (
    <Layout>
      <Text>Hello again!</Text>
      <Text>Welcome back you've been missed</Text>
      <TextInputCustom placeholder="Email" />
      <TextInputCustom placeholder="Password" />
      <Text>Recover Password</Text>
      <ButtonCustom bgColor="white" text="Log In" />
    </Layout>
  );
};

export default LoginScreen;
