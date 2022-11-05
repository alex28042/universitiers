import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import { currentUser, matches } from "../data/User";
import { db } from "../../firebase-config";
import jsort from "jsort";

const Chats = () => {
  useLayoutEffect(() => {
    jsort.date(matches, "time");
  }, []);


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
          <ChatDetails user={e} key={i} />
        ))}
      </View>
    </View>
  );
};

export default Chats;
