import { View, Text, Image } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const CardPhoto = ({ photoURL }) => {
  return (
    <TailwindProvider>
      {photoURL !== undefined ? (
        <Image
          className="h-36 w-24 rounded-md mr-4 mt-2"
          source={{ uri: photoURL }}
        />
      ) : (
        <View className="h-36 w-24 rounded-md bg-white mr-4 mt-2"></View>
      )}
    </TailwindProvider>
  );
};

export default CardPhoto;


