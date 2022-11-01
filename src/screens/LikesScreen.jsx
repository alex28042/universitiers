import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import LikesUserCard from "../components/LikesUserCard";
import Tabbar from "../navigation/Tabbar";
import { currentUser, likes, matches } from "../data/User";

const LikesScreen = () => {
  const [likesWithoutCountMatches, setLikesWithoutCountMatches] = useState(0);
  
  useLayoutEffect(() => {
    likes.map((like, i) => {
      if (!matches.some((match) => match.id == like.id))
        setLikesWithoutCountMatches(likesWithoutCountMatches + 1);
    });
  }, []);

  return (
    <Layout>
      <Text
        className="mb-20 text-2xl"
        style={{ fontFamily: "Poppins_700Bold" }}
      >
        People who likes you!
      </Text>
      <View className="flex flex-row items-center mt-3">
        {likesWithoutCountMatches == 0 ? (
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {"No likes :/ keep swiping"}
          </Text>
        ) : (
          likes.map((e, i) =>
            matches.some((match) => match.id == likes[i].id) ? (
              <></>
            ) : (
              <LikesUserCard key={i} user={e} />
            )
          )
        )}
      </View>
      <Tabbar focus="Likes" />
    </Layout>
  );
};

export default LikesScreen;
