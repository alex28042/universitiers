import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";
import { currentUser, matches } from "../data/User";
import jsort from "jsort";

const ChatDetails = ({ user }) => {
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState([]);
  const [recieverLastMessage, setRecieverLastMessage] = useState(false);
  const [noMessages, setNoMessages] = useState(false);

  useLayoutEffect(() => {
    db()
      .doc("matches/" + user.idMatch)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((q) => {
        q.size > 0 ? setNoMessages(false) : setNoMessages(true)
        setLastMessage(
          q.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });

  }, [user.idMatch, db]);

  useEffect(() => {
    lastMessage[lastMessage.length - 1]?.userId === currentUser.id
      ? setRecieverLastMessage(false)
      : setRecieverLastMessage(true);
  }, [lastMessage]);

  return noMessages ? (
    <></>
  ) : (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatConversationScreen", {
          userDataChat: user,
        })
      }
      className="w-full h-16 justify-center z-50 bg-white"
    >
      <View className="flex flex-row ml-4 justify-between">
        <View className="flex flex-row">
          <View className="h-10 w-10 rounded-full bg-neutral-400">
            <Image
              className="w-full h-full rounded-full"
              source={{ uri: user.photosURL[0] }}
            />
          </View>
          <View className="flex flex-col ml-4">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>{user.name}</Text>
            <Text
              style={{
                fontFamily: recieverLastMessage
                  ? "Poppins_700Bold"
                  : "Poppins_500Medium",
              }}
            >
              {lastMessage[lastMessage.length - 1]?.message}
            </Text>
          </View>
        </View>
        <View className="h-full items-center justify-center w-10 mr-2">
          {recieverLastMessage ? (
            <View
              style={{ backgroundColor: "#9FA0FF" }}
              className="h-2 w-2 rounded-full"
            ></View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
