import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import { currentUser } from "../data/User";
import { db } from "../../firebase-config";

const Chats = () => {
  /*const [matches, setMatches] = useState([])

  useLayoutEffect(() => {
    db()
      .collection("matches/")
      .where("usersMatched", "array-contains", currentUser.id)
      .get()
      .then(q => {
        q.forEach(d => {
          console.log(Object.values(d.data().users)[0].id == currentUser.id ? Object.values(d.data().users)[1] : Object.values(d.data().users)[0]);
          Object.values(d.data().users)[0].id == currentUser.id ? matches.push(Object.values(d.data().users)[1]) : matches.push(Object.values(d.data().users)[0])
          console.log(matches);
        })
      });
  }, []);*/
  return (
    <View className="h-full w-full">
      <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl -z-40 bg-white">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-3 mb-3 ml-4"
        >
          Conversations
        </Text>
        {currentUser.matches.map((e, i) => (
          <ChatDetails user={e} key={i} />
        ))}
      </View>
    </View>
  );
};

export default Chats;
