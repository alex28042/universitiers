import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import SwipeUserCard from "../components/SwipeUserCard";
import Tabbar from "../navigation/Tabbar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import { UserController } from "../api/user";
import { usersSwipeList } from "../data/UsersSwipeList";
import { currentUser } from "../data/User";
import { db } from "../../firebase-config";
import { LikesController } from "../api/likes";
import { MatchController } from "../api/matches";
import { SwipeController } from "../api/swipe";

const SwipeScreen = () => {
  const swipeRef = useRef();
  const navigation = useNavigation();
  const likesController = new LikesController();
  const matchController = new MatchController();
  const swipeController = new SwipeController();

  return (
    <Layout>
      <View className="w-full items-end absolute top-16 flex flex-row justify-center">
        <Text className="text-xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Univesitiers
        </Text>
        <Ionicons
          name="settings-outline"
          onPress={() => navigation.navigate("SettingsScreen")}
          size={30}
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <View></View>
      <View className="h-3/5 w-3/4">
        {usersSwipeList.length == 0 ? (
          <View className="h-3/5 w-3/4 rounded-md bg-white justify-center items-center">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>
              No more profiles
            </Text>
          </View>
        ) : (
          <>
            <Swiper
              ref={swipeRef}
              stackSize={5}
              cardIndex={0}
              animateCardOpacity
              verticalSwipe={false}
              overlayLabels={{
                left: {
                  title: "NOPE",
                  style: {
                    label: {
                      textAlign: "center",
                      color: "red",
                      fontFamily: "Poppins_500Medium",
                    },
                  },
                },
                right: {
                  title: "LIKE ",
                  style: {
                    label: {
                      textAlign: "left",
                      color: "green",
                      fontFamily: "Poppins_500Medium",
                    },
                  },
                },
              }}
              containerStyle={{ backgroundColor: "transparent" }}
              cards={usersSwipeList}
              onSwipedRight={(i) => {
                swipeController.swipeRight(currentUser, usersSwipeList[i]);

                db()
                  .doc("users/" + usersSwipeList[i].id)
                  .get()
                  .then((d) => {
                    const data = d.data();
                    if (data.swipeRight.includes(currentUser.id)) {
                      currentUser.matches.push(usersSwipeList[i].id);
                      console.log("match");
                      usersSwipeList[i].matches.push(currentUser.id);

                      matchController
                        .addMatch(currentUser)
                        .then(() =>
                          matchController.addMatch(usersSwipeList[i])
                        );
                    } else {
                      usersSwipeList[i].likes.push(currentUser.id);
                      likesController.addLike(usersSwipeList[i]);
                    }
                  });
              }}
              onSwipedLeft={(i) =>
                swipeController.swipeLeft(currentUser, usersSwipeList[i])
              }
              renderCard={(UsersData) =>
                UsersData ? (
                  <SwipeUserCard
                    name={UsersData.name}
                    uni={UsersData.uni}
                    age={UsersData.bornDate}
                  />
                ) : (
                  <View className="h-3/5 w-3/4 rounded-md bg-white items-center">
                    <Text>No more profiles</Text>
                  </View>
                )
              }
            />
          </>
        )}
      </View>
      <View className="flex flex-row mt-10">
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          className="h-16 w-16 bg-white mr-10 items-center justify-center rounded-full"
        >
          <Ionicons name="close-outline" size={39} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          className="h-16 w-16 bg-white ml-10 items-center justify-center rounded-full"
        >
          <Ionicons name="heart-outline" size={39} />
        </TouchableOpacity>
      </View>
      <Tabbar focus="Swipe" />
    </Layout>
  );
};

export default SwipeScreen;
