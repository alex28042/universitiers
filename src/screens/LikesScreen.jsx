import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import LikesUserCard from "../components/LikesUserCard";
import Tabbar from "../navigation/Tabbar";
import { currentUser, likes, matches } from "../data/User";

const LikesScreen = () => {
  const [likesWithoutCountMatches, setLikesWithoutCountMatches] = useState([]);

  useLayoutEffect(() => {
    likes.map((like, i) => {
      if (!matches.some((match) => match.id == like.id))
        likesWithoutCountMatches.push(like);
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
        {likesWithoutCountMatches.length == 0 ? (
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {"No likes :/ keep swiping"}
          </Text>
        ) : (
          <FlatList
            data={likesWithoutCountMatches}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <LikesUserCard user={item} key={item.id} />
            )}
            numColumns={2}
          />
        )}
      </View>
      <Tabbar focus="Likes" />
    </Layout>
  );
};

export default LikesScreen;
