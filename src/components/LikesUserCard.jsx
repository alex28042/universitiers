import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";
import ProfilePopUp from "./Profile/ProfilePopUp";
import { Ionicons } from "@expo/vector-icons";

const LikesUserCard = ({ user }) => {
  const [visiblePremium, setVisiblePremium] = useState(false);

  return currentUser.subscribed ? (
    <>
      <View className="h-32 w-20 rounded-lg ml-1 mr-1 bg-white">
        <Image
          source={{ uri: user.photosURL[0] }}
          className="w-full rounded-lg h-full"
          blurRadius={currentUser.subscribed ? 0 : 30}
        />
        <View className="ml-1 absolute bottom-0 justify-between">
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{user.name}</Text>
        </View>
      </View>
    </>
  ) : (
    <>
      <TouchableOpacity onPress={() => setVisiblePremium(true)} className="h-32 w-20 rounded-lg ml-1 mr-1 bg-white">
        <Image
          source={{ uri: user.photosURL[0] }}
          className="w-full rounded-lg h-full"
          blurRadius={currentUser.subscribed ? 0 : 30}
        />
        <View className="ml-1 absolute bottom-0 justify-between">
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{user.name}</Text>
        </View>
      </TouchableOpacity>
      <ProfilePopUp visible={visiblePremium}>
        <Ionicons
          name="close-outline"
          size={40}
          onPress={() => setVisiblePremium(false)}
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-5"
        >
          Swipe settings
        </Text>
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-md mt-40"
        >
          You're not subscribed to Universitiers premium!
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{ backgroundColor: "#9FA0FF" }}
          className="bottom-5 absolute w-52 items-center justify-center h-14 rounded-2xl"
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>
            Subscribe to Premium
          </Text>
        </TouchableOpacity>
      </ProfilePopUp>
    </>
  );
};

export default LikesUserCard;
