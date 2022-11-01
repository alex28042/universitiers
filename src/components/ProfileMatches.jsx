import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";

const ProfileMatches = (props) => {
  const user = props.user;
  const navigation = useNavigation();
  const [messagesMatch, setMessagesMatch] = useState(false);

  useLayoutEffect(() => {
    db()
      .doc("matches/" + user.idMatch)
      .collection("messages/")
      .get()
      .then((q) =>
        q.size > 0 ? setMessagesMatch(true) : setMessagesMatch(false)
      );
  }, []);

  useEffect(() => {
    if (!messagesMatch) {
      db()
        .doc("matches/" + user.idMatch)
        .collection("messages/")
        .onSnapshot((q) =>
          q.size > 0 ? setMessagesMatch(true) : setMessagesMatch(false)
        );
    }
  }, [user.idMatch]);

  return messagesMatch ? (
    <></>
  ) : (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatConversationScreen", { userDataChat: user })
      }
      className="h-11 w-11 rounded-full bg-slate-400 ml-1"
    >
      <Image
        source={{ uri: user.photosURL[0] }}
        className="w-full h-full rounded-full"
      />
    </TouchableOpacity>
  );
};

export default ProfileMatches;
