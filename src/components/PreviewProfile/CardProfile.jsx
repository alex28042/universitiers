import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import SwipeUserCard from "../SwipeUserCard";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../../data/User";

const CardProfile = ({ user }) => {
  const [photoUrlIndex, setPhotoUrlIndex] = useState(0);

  const getAge = (birthday) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <View className="bg-white rounded-xl w-3/4 h-3/5 mt-10 mb-20">
      <View className="w-full top-1 items-center z-50 absolute">
        <View className="flex flex-row">
          {user.photosURL.map((e, i) => (
            <View
              key={i}
              style={{
                backgroundColor: photoUrlIndex == i ? "black" : "grey",
              }}
              className="h-1 bg-white ml-1 rounded-full z-50 w-10"
            ></View>
          ))}
        </View>
      </View>
      <View className=" w-full h-full flex flex-row">
        <TouchableOpacity
          className="w-1/2 h-3/4 z-50"
          onPress={() =>
            photoUrlIndex - 1 < 0
              ? setPhotoUrlIndex(photoUrlIndex)
              : setPhotoUrlIndex(photoUrlIndex - 1)
          }
        ></TouchableOpacity>
        <TouchableOpacity
          className="w-1/2 z-50 h-3/4"
          onPress={() =>
            photoUrlIndex + 1 > user.photosURL.length - 1
              ? setPhotoUrlIndex(photoUrlIndex)
              : setPhotoUrlIndex(photoUrlIndex + 1)
          }
        ></TouchableOpacity>
      </View>
      <Image
        className="w-full absolute h-full rounded-lg"
        source={{ uri: user.photosURL[photoUrlIndex] }}
      />
      <View className="bottom-0 absolute self-start w-full justify-between flex flex-row">
        <View className="flex flex-col ml-8">
          <Text style={{ fontFamily: "Poppins_700Bold" }}>
            {user.name},
            {getAge(
              new Date(user.bornDate[2], user.bornDate[1], user.bornDate[0])
            )}
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {user.uni !== "" ? user.uni : "No Uni Selected"}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              marginBottom: 10,
              marginRight: 20,
            }}
          >
            {user.bio}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardProfile;
