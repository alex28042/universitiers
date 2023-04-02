import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import LikesUserCard from "../components/LikesUserCard";
import Tabbar from "../navigation/Tabbar";
import { currentUser, likes, matches } from "../data/User";
import { TailwindProvider } from "tailwindcss-react-native";
import Navigation from "../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const LikesScreen = () => {
  const [likesWithoutCountMatches, setLikesWithoutCountMatches] = useState([]);
  const [viewProfileLike, setViewProfileLike] = useState(false);
  const [indexUserLike, setIndexUserLike] = useState(0);
  const [indexUserLikeUsed, setIndexUserLikeUsed] = useState([]);
  const navigation = useNavigation();

  const randomIndexLike = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    likes.map((like, i) => {
      if (
        !matches.some((match) => match.id == like.id) &&
        like.id != currentUser.id
      )
        likesWithoutCountMatches.push(like);
    });
  }, []);

  return currentUser.id == "" ? (
    <LoadingScreen />
  ) : (
    <Layout>
      <Text
        className="mb-8 text-2xl mt-40"
        style={{ fontFamily: "Poppins_700Bold" }}
      >
        People who likes you!
      </Text>
      {currentUser.subscribed ? (
        <>
          {" "}
          {viewProfileLike ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  let random = randomIndexLike(
                    0,
                    likesWithoutCountMatches.length
                  );

                  if (
                    !indexUserLikeUsed.includes(random) &&
                    indexUserLikeUsed.length < 2
                  ) {
                    indexUserLikeUsed.push(random);
                    setIndexUserLike(random);
                  }

                  console.log(indexUserLike);
                }}
                style={{ backgroundColor: "#9FA0FF" }}
                className="mb-6 w-52 items-center justify-center h-14 rounded-2xl"
              >
                <Text style={{ fontFamily: "Poppins_700Bold" }}>
                  See who likes you
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  let random = randomIndexLike(
                    0,
                    likesWithoutCountMatches.length
                  );
                  console.log(random);
                  setViewProfileLike(true);

                  if (
                    !indexUserLikeUsed.includes(random) &&
                    indexUserLikeUsed.length < 2
                  ) {
                    indexUserLikeUsed.push(random);
                    setIndexUserLike(random);
                  }
                }}
                style={{ backgroundColor: "#9FA0FF" }}
                className="mb-6 w-52 items-center justify-center h-14 rounded-2xl"
              >
                <Text style={{ fontFamily: "Poppins_700Bold" }}>
                  View a profile who likes you!
                </Text>
              </TouchableOpacity>
            </>
          )}
        </>
      ) : (
        <><Text style={{ fontFamily: "Poppins_500Medium" }} className="text-center mb-7">You cant see your likes you are not subscribed to universitiers</Text></>
      )}

      {likesWithoutCountMatches.length == 0 ? (
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          {"No likes :/ keep swiping"}
        </Text>
      ) : viewProfileLike ? (
        <LikesUserCard
          user={likesWithoutCountMatches[indexUserLike]}
          key={likesWithoutCountMatches[indexUserLike].id}
        />
      ) : (
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          Press to see profiles who likes you!
        </Text>
      )}
      <View className="h-64"></View>
      <Tabbar focus="Likes" />
    </Layout>
  );
};

export default LikesScreen;
