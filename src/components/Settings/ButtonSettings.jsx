import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ButtonSettings = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#9FA0FF",
        borderTopRightRadius: props.radiusTopRight,
        borderTopLeftRadius: props.radiusTopLeft,
        borderBottomLeftRadius: props.radiusBottomLeft,
        borderBottomRightRadius: props.radiusBottomRight,
      }}
      className="w-3/4 justify-center h-10"
      onPress={() =>
        props.to
          ? navigation.navigate(props.to, { name: props.text })
          : props.onPress
          ? props.onPress
          : null
      }
    >
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="ml-3">
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSettings;
