import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../../data/User";

const CardPhotoEdit = ({ photoURL, newPhoto }) => {
  const deletePhotoFromPhotosURL = () => {
    const index = currentUser.photosURL.indexOf(photoURL);

    currentUser.photosURL.splice(index, 1);
    console.log(currentUser.photosURL);
  };

  return photoURL !== undefined ? (
    <View className="h-36 w-24 rounded-md mr-4 mt-2">
      <Image className="h-full w-full rounded-md" source={{ uri: photoURL }} />
      <TouchableOpacity
        onPress={() => deletePhotoFromPhotosURL()}
        className="absolute items-center justify-center bg-white top-1 right-1 h-6 w-6 rounded-full"
      >
        <Ionicons name="close" color={"red"} size={20} />
      </TouchableOpacity>
    </View>
  ) : newPhoto !== undefined ? (
    <Image
      className="h-36 w-24 rounded-md mr-4 mt-2"
      source={{ uri: newPhoto }}
    />
  ) : (
    <View className="h-36 w-24 rounded-md bg-white mr-4 mt-2"></View>
  );
};

export default CardPhotoEdit;
