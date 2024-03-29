import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { Profiler, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProfilePopUp from "../components/Profile/ProfilePopUp";
import { db } from "../../firebase-config";

const HeaderConversation = (props) => {
  const userData = props.userDataChat;
  const navigation = useNavigation();
  const [visibleBlockUser, setVisibleBlockUser] = useState(false);

  return (
    <View className="w-full h-28 top-0 z-50 absolute bg-white rounded-2xl">
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="mt-12 ml-14 w-full flex flex-row">
        <TouchableOpacity
          className="h-14 w-14 bg-neutral-400 rounded-full"
          onPress={() =>
            navigation.navigate("PreviewProfileScreen", { user: userData })
          }
        >
          <Image
            source={{ uri: userData.photosURL[0] }}
            className="w-full h-full rounded-full"
          />
        </TouchableOpacity>
        <View className="flex flex-col h-14 justify-between ml-3">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="mt-2 text-lg"
          >
            {userData.name}
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {userData.uni}
          </Text>
        </View>
      </View>
      <Ionicons
        name="ellipsis-vertical-outline"
        style={{ position: "absolute", top: 65, right: 10 }}
        onPress={() => setVisibleBlockUser(true)}
        size={30}
      />
      <ProfilePopUp visible={visibleBlockUser}>
        <Ionicons
          name="close-outline"
          size={40}
          onPress={() => setVisibleBlockUser(false)}
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-5"
        >
          Conversation Settings
        </Text>
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-md mt-32"
        >
          You will block this user
        </Text>
        <TouchableOpacity
          onPress={() => {
            db()
              .doc("matches/" + userData.idMatch)
              .update({
                blocked: true,
              })
              .then(() => setVisibleBlockUser(false));
          }}
          style={{ backgroundColor: "#9FA0FF" }}
          className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>Block User</Text>
        </TouchableOpacity>
      </ProfilePopUp>
    </View>
  );
};

export default HeaderConversation;
