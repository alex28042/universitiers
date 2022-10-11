import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const ButtonCustom = (props) => {
  return (
    <TailwindProvider>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 40,
          backgroundColor: `${props.bgColor}`,
        }}
        className="items-center justify-center rounded-lg"
      >
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
};

export default ButtonCustom;
