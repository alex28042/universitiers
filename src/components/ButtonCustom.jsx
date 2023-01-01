import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonCustom = (props) => {
  const navigation = useNavigation();
  console.log(props.onPress);

  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 40,
        backgroundColor: `${props.bgColor}`,
      }}
      className="items-center justify-center rounded-lg"
      onPress={() => {
        props.to ? navigation.navigate(props.to) : null;
      }}
    >
      <Text style={{ fontFamily: "Poppins_700Bold" }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
