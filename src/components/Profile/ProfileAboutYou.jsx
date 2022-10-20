import { View, Text } from "react-native";
import React from "react";
import ButtonCustom from "../ButtonCustom";

const ProfileAboutYou = () => {
  return (
    <View>
      <Text  style={{fontFamily: 'Poppins_500Medium'}}>About you:</Text>
      <ButtonCustom bgColor="white" text="Join now!" />
    </View>
  );
};

export default ProfileAboutYou;
