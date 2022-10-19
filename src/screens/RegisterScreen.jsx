import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import TextInputCustom from "../components/TextInputCustom";
import ButtonCustom from "../components/ButtonCustom";

const RegisterScreen = () => {
  return (
    <Layout>
      <View className="items-start w-full ml-32 mb-20">
        <Text className="text-4xl" style={{fontFamily: 'Poppins_700Bold'}}>Welcome!</Text>
        <Text style={{fontFamily: 'Poppins_500Medium'}}>to Universitiers</Text>
      </View>

      <TextInputCustom placeholder="First name" />
      <TextInputCustom placeholder="Email" />
      <TextInputCustom placeholder="Password" />
      <View className="bottom-0 absolute mb-4 w-full items-center">
        <ButtonCustom
          to="UnivesitySelectScreen"
          bgColor="white"
          text="Enter your University"
        />
      </View>
    </Layout>
  );
};

export default RegisterScreen;
