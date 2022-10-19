import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";

const WelcomeScreen = () => {
  return (
    <Layout>
      <View className="items-start w-full ml-32">
        <Text className="text-3xl" style={{fontFamily: 'Poppins_700Bold'}}>Welcome</Text>
        <Text className="text-3xl" style={{fontFamily: 'Poppins_700Bold'}}>to Universitiers</Text>
        <Text style={{fontFamily: 'Poppins_500Medium'}}>meet friends at university</Text>
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-10"
      >
        <ButtonCustom to="RegisterScreen" bgColor="white" text="Join now!" />
        <ButtonCustom to="LoginScreen" bgColor="#9FA0FF" text="login" />
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
