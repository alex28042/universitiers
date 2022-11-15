import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";
import { currentUser, matches } from "../data/User";

const ChatDetails = ({ user }) => {
  let timeVariable = " min";
  const DateNow = new Date(Date.now());
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState([]);
  const [recieverLastMessage, setRecieverLastMessage] = useState(false);
  const [noMessages, setNoMessages] = useState(false);
  const [Loading, setLoading] = useState(true);

  const timeOperators = {
    inHours: (a, b) => {
      timeVariable = " h";
      return parseInt(Math.abs(a.getTime() - b.getTime()) / 36e5);
    },
    inDays: (a, b) => {
      timeVariable = " days";
      return parseInt(
        Math.abs((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
      );
    },
    inMinutes: (a, b) => {
      timeVariable = " min";
      return parseInt(Math.abs(a.getTime() - b.getTime()) / (60 * 1000));
    },
  };

  useLayoutEffect(() => {
    db()
      .doc("matches/" + user?.idMatch)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((q) => {
        q.size > 0 ? setNoMessages(false) : setNoMessages(true);
        setLastMessage(
          q.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, [user?.idMatch, db]);

  useEffect(() => {
    lastMessage[lastMessage.length - 1]?.userId === currentUser.id
      ? setRecieverLastMessage(false)
      : setRecieverLastMessage(true);
  }, [lastMessage]);

  const getTime = () => {
    return timeOperators.inMinutes(
      DateNow,
      new Date(lastMessage[lastMessage.length - 1]?.createdAt?.seconds * 1000)
    ) > 60
      ? timeOperators.inHours(
          DateNow,
          new Date(
            lastMessage[lastMessage.length - 1]?.createdAt?.seconds * 1000
          )
        ) > 24
        ? timeOperators.inDays(
            DateNow,
            new Date(
              lastMessage[lastMessage.length - 1]?.createdAt?.seconds * 1000
            )
          )
        : timeOperators.inHours(
            DateNow,
            new Date(
              lastMessage[lastMessage.length - 1]?.createdAt?.seconds * 1000
            )
          )
      : timeOperators.inMinutes(
          DateNow,
          new Date(
            lastMessage[lastMessage.length - 1]?.createdAt?.seconds * 1000
          )
        );
  };

  return noMessages ? (
    <></>
  ) : user == undefined ? (
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
              source={{ uri: user?.photosURL[0] }}
            />
          </View>
          <View className="flex flex-col ml-4">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>{user?.name}</Text>
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
        <View className="h-full items-center justify-center w-15 mr-2">
          {recieverLastMessage ? (
            <View className="flex flex-col">
              <View
                style={{ backgroundColor: "#9FA0FF" }}
                className="h-2 w-2 rounded-full"
              ></View>
              <View className="flex flex-row">
                <Text style={{ fontFamily: "Poppins_500Medium" }}>
                  {lastMessage[lastMessage.length - 1] == null ? (
                    <></>
                  ) : (
                    getTime()
                  )}
                </Text>
                <Text>{timeVariable}</Text>
              </View>
            </View>
          ) : (
            <View className="flex flex-row">
              <Text style={{ fontFamily: "Poppins_500Medium" }}>
                {lastMessage[lastMessage.length - 1] == null ? (
                  <></>
                ) : (
                  getTime()
                )}
              </Text>
              <Text>{timeVariable}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
