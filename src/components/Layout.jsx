import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const Layout = (props) => {
  return (
    <TailwindProvider>
      <View
        style={{ backgroundColor: "#DAB6FC" }}
        className="flex-1 items-center justify-center"
      >
        {props.children}
      </View>
    </TailwindProvider>
  );
};

export default Layout;
