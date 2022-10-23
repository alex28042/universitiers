import { View, Text } from "react-native";
import React from "react";
import ProfileButton from "./ProfileButton";

const ProfileAboutYou = () => {
  return (
    <View className="w-full mt-5 items-center">
      <View className="w-full ml-20 mb-2">
      <Text style={{ fontFamily: "Poppins_700Bold" }}>About you:</Text>

      </View>
      <ProfileButton bgColor="white" text="Bio" />
    </View>
  );
};

export default ProfileAboutYou;
