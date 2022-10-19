import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import AgeSelection from "../components/AgeSelection";
import ButtonCustom from "../components/ButtonCustom";

const AgeSelectionScreen = () => {
  return (
    <Layout>
      <View className="w-full items-start ml-32">
        <Text className="text-3xl" style={{fontFamily: "Poppins_700Bold"}}>How</Text>
      <Text className="text-3xl" style={{fontFamily: "Poppins_700Bold"}}>old are you?</Text>
       <Text style={{fontFamily: "Poppins_500Medium"}}>you must be 18+ years old</Text>
      </View>
      
     
      <AgeSelection />
      <View style={{width: "80%"}} className="items-center bottom-0 absolute mb-10">
        <ButtonCustom to="SelectPhotosScreen" bgColor="white" text="Select your photos" />
      </View>
    </Layout>
  );
};

export default AgeSelectionScreen;
