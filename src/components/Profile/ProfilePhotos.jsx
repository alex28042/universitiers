import { View, Text } from "react-native";
import React from "react";
import CardPhoto from "../CardPhoto";
import { currentUser } from "../../data/User";

const ProfilePhotos = () => {
  return (
    <View className="w-full ml-20">
      <Text style={{ fontFamily: "Poppins_700Bold" }}>Your photos:</Text>
      <View className="flex flex-row">
        {currentUser.photosURL.map((e, i) => (
          <CardPhoto photoURL={e} key={i}/>
        ))}
      </View>
    </View>
  );
};

export default ProfilePhotos;
