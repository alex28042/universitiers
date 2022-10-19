import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonCustom = (props) => {
  const navigation = useNavigation();
  return (
    <TailwindProvider>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 40,
          backgroundColor: `${props.bgColor}`,
        }}
        className="items-center justify-center rounded-lg"
        onPress={() => props.to ? navigation.navigate(props.to) : null}
      >
        <Text style={{fontFamily: 'Poppins_500Medium'}}>{props.text}</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
};

export default ButtonCustom;
