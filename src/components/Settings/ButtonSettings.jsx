import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonSettings = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#9FA0FF",
        borderTopRightRadius: props.radiusTopRight,
        borderTopLeftRadius: props.radiusTopLeft,
        borderBottomLeftRadius: props.radiusBottomLeft,
        borderBottomRightRadius: props.radiusBottomRight,
      }}
      className="w-3/4 h-10"
    >
        <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSettings;
