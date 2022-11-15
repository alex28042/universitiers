import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import { currentUser, matches } from "../data/User";
import { db } from "../../firebase-config";

const Chats = () => {
  const [matchesChat, setMatchesChat] = useState([]);
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    db()
      .collection("matches/")
      .orderBy("time", "desc")
      .onSnapshot((q) => {
        setMatchesChat(
          q.docs.map((d) => {
            if (d.data().usersMatched.includes(currentUser.id)) {
              return {
                ...(Object.values(d.data().users)[0].id == currentUser.id
                  ? Object.values(d.data().users)[1]
                  : Object.values(d.data().users)[0]),
                idMatch: d.id,
                time: d.data().time,
              };
            }
          })
        );
      });
  }, [db]);

  useEffect(() => {
    setLoading(false)
  }, [matchesChat])

  console.log(matchesChat);
  return (
    <View className="h-full w-full">
      <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl -z-40 bg-white">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-3 mb-3 ml-4"
        >
          Conversations
        </Text>
        {matchesChat.length == 0 ? (
          <></>
        ) : (
          <FlatList
            data={matchesChat}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => (
              <ChatDetails user={item} />
            )}
          />
        )}
      </View>
    </View>
  )
    
  
};

export default Chats;
