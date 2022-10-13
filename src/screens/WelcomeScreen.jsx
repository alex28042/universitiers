import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";

const WelcomeScreen = () => {
  return (
    <Layout>
      <Text>Welcome to Universitiers</Text>
      <Text>meet friends at university</Text>
      <View style={{width: "80%"}} className="items-center bottom-0 absolute mb-10">
        <ButtonCustom to="RegisterScreen" bgColor="white" text="Join now!" />
        <ButtonCustom to="LoginScreen" bgColor="#9FA0FF" text="login" />
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
