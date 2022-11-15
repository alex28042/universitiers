import { View, Text } from "react-native";
import React from "react";
import CardPhoto from "../CardPhoto";
import { currentUser } from "../../data/User";
import { FlatList } from "react-native-gesture-handler";

const ProfilePhotos = () => {
  return (
    <View className="w-full ml-20">
      <Text style={{ fontFamily: "Poppins_700Bold" }}>Your photos:</Text>
      <View className="flex flex-row h-40">
        <FlatList 
          data={currentUser.photosURL}
          keyExtractor={(item, i) => i}
          renderItem={({item}) => (
            <CardPhoto photoURL={item}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProfilePhotos;
