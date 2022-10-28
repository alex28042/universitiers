import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import { currentUser, matches } from "../data/User";

const Chats = () => {
  return (
    <View className="h-full w-full">
      <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl -z-40 bg-white">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-3 mb-3 ml-4"
        >
          Conversations
        </Text>
        {matches.map((e, i) => (
          <ChatDetails user={e.id} key={i} />
        ))}
      </View>
    </View>
  );
};

export default Chats;
