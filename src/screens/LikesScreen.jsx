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
  const navigation = useNavigation();
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
        {currentUser.subscribed ? (
          <></>
        ) : (
          <>
            <Text
              className="mb-8 text-md mt-5"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              Subscribe to see the profile who likes you!
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PaymentScreen");
              }}
              style={{ backgroundColor: "#9FA0FF" }}
              className="mb-6 w-52 items-center justify-center h-14 rounded-2xl"
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>
                Subscribe to Premium
              </Text>
            </TouchableOpacity>
          </>
        )}
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
