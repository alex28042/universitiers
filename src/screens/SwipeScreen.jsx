import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Layout from "../components/Layout";
import SwipeUserCard from "../components/SwipeUserCard";
import Tabbar from "../navigation/Tabbar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";

const SwipeScreen = () => {
  const UsersData = [
    { name: "Sofia", Uni: "UPM", age: 19 },
    { name: "Sofia", Uni: "UPM", age: 19 },
    { name: "Sofia", Uni: "UPM", age: 19 },
    { name: "Sofia", Uni: "UPM", age: 19 },
  ];
  const swipeRef = useRef();
  const navigation = useNavigation();
  return (
    <Layout>
      <View className="w-full items-end absolute top-16 right-4">
        <Ionicons
          name="settings-outline"
          onPress={() => navigation.navigate("SettingsScreen")}
          size={30}
        />
      </View>
      <View></View>
      <View className="h-3/5 w-3/4">
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
                },
              },
            },
          }}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={UsersData}
          renderCard={(UsersData) =>
            UsersData.length != 0 ? (
              <SwipeUserCard />
            ) : (
              <View className="h-3/5 w-3/4 rounded-md bg-white items-center">
                <Text>No more profiles</Text>
              </View>
            )
          }
        />
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
      <Tabbar />
    </Layout>
  );
};

export default SwipeScreen;
