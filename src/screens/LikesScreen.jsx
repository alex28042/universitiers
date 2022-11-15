import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import LikesUserCard from "../components/LikesUserCard";
import Tabbar from "../navigation/Tabbar";
import { currentUser, likes, matches } from "../data/User";
import { TailwindProvider } from "tailwindcss-react-native";

const LikesScreen = () => {
  const [likesWithoutCountMatches, setLikesWithoutCountMatches] = useState([]);

  useEffect(() => {
    likes.map((like, i) => {
      if (!matches.some((match) => match.id == like.id))
        likesWithoutCountMatches.push(like);
    });
    console.log(likesWithoutCountMatches);
  }, []);


  return (
    <TailwindProvider>
      <ScrollView
        style={{ backgroundColor: "#DAB6FC" }}
        contentContainerStyle={{ alignItems: "center", flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          className="mb-8 text-2xl mt-40"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          People who likes you!
        </Text>
        {likesWithoutCountMatches.length == 0 ? (
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {"No likes :/ keep swiping"}
          </Text>
        ) : (
          likesWithoutCountMatches.map((user) => (
            <LikesUserCard user={user} key={user.id} />
          ))
        )}
        <Tabbar focus="Likes" />
      </ScrollView>
    </TailwindProvider>
  );
};

export default LikesScreen;
