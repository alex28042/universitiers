import { View, Text } from "react-native";
import React from "react";

const buttonDecline = () => {
  return (
    <TailwindProvider>
      <TouchableOpacity className="h-10 w-10 bg-white rounded-full">
        <Text>X</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
};

export default buttonDecline;
