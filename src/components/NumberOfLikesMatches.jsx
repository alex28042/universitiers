import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { currentUser, likes, matches } from "../data/User";
import { useNavigation } from "@react-navigation/native";

const NumberOfLikesMatches = () => {
  const navigation = useNavigation();
  const [numberOfLikesWithNoMatches, setNumberOfLikesWithNoMatches] =
    useState(0);

  useLayoutEffect(() => {
    likes.map((likeUser) => {
      if (!matches.some((match) => match.id == likeUser.id))
        setNumberOfLikesWithNoMatches(numberOfLikesWithNoMatches + 1);
    });
  }, [matches, likes]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("LikesScreen")}
      className="h-11 w-11 rounded-full bg-slate-400 ml-10 items-center justify-center"
    >
      {numberOfLikesWithNoMatches.length > 0 ? (
        <Image
          source={{ uri: likes[0].photosURL[0] }}
          className="w-full h-full rounded-full"
          blurRadius={20}
        />
      ) : (
        <></>
      )}
      <Text style={{ fontFamily: "Poppins_700Bold", position: "absolute" }}>
        +{numberOfLikesWithNoMatches}
      </Text>
    </TouchableOpacity>
  );
};

export default NumberOfLikesMatches;
