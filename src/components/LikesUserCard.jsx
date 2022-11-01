import { View, Text, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { db } from "../../firebase-config";

const LikesUserCard = ({ user }) => {
  return (
    <View className="h-32 w-20 rounded-lg ml-1 mr-1 bg-white">
      <Image source={{ uri: user.photosURL[0] }} className="w-full rounded-lg h-full" blurRadius={30}/>
      <View className="ml-1 absolute bottom-0 justify-between">
        <Text style={{ fontFamily: "Poppins_500Medium" }}>{user.name}</Text>
      </View>
    </View>
  );
};

export default LikesUserCard;
