import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 40,
        backgroundColor: `${props.bgColor}`,
      }}
      className="justify-between items-center rounded-lg flex flex-row"
      onPress={() => (props.to ? navigation.navigate(props.to) : null)}
    >
      <Text className="ml-2" style={{ fontFamily: "Poppins_500Medium" }}>{props.text}</Text>
      <Ionicons name="chevron-forward-outline" size={25} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
