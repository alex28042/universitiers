import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";

const ChatDetails = ({ user }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();

  useLayoutEffect(() => {
    db()
      .doc("users/" + user)
      .get()
      .then((d) => {
        const data = d.data();
        setUserData(data);
      });
    /*db()
      .doc("matches/" +  currentUser.id + user )
      .get()
      .then((d) => console.log(d.data()));*/
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatConversationScreen", {
          userDataChat: userData,
        })
      }
      className="w-full h-16 justify-center z-50 bg-white"
    >
      <View className="flex flex-row ml-4">
        <View className="h-10 w-10 rounded-full bg-neutral-400"></View>
        <View className="flex flex-col ml-4">
          <Text style={{ fontFamily: "Poppins_700Bold" }}>
            {userData?.name}
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium" }}>msg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatDetails;
