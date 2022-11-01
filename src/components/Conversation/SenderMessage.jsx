import { View, Text } from "react-native";
import React from "react";

const SenderMessage = ({message}) => {
  console.log(message );
  return (
    <View style ={{backgroundColor: "#9FA0FF"}} className=" bg-white rounded-2xl rounded-tr-none px-5 py-3 mx-3 my-2 self-end ml-32">
      <Text style={{ fontFamily: "Poppins_500Medium" }}>
        {message.message}
      </Text>
    </View>
  );
};

export default SenderMessage;
