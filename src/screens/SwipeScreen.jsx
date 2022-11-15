import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import SwipeUserCard from "../components/SwipeUserCard";
import Tabbar from "../navigation/Tabbar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import { usersSwipeList } from "../data/UsersSwipeList";
import { currentUser, url } from "../data/User";
import { db } from "../../firebase-config";
import { LikesController } from "../api/likes";
import { MatchController } from "../api/matches";
import { SwipeController } from "../api/swipe";
import MatchPopUp from "../components/Match/MatchPopUp";
import {
  getNotificationsPermisions,
  notificationsToDB,
} from "../utils/Notifications";

const SwipeScreen = () => {
  const swipeRef = useRef();
  const navigation = useNavigation();
  const likesController = new LikesController();
  const matchController = new MatchController();
  const swipeController = new SwipeController();
  const [matchDetailsPopUp, setMatchDetailsPopUp] = useState(null);
  const [oldUsersSwipeList, setOldUsersSwipeList] = useState(usersSwipeList);
  const [visible, setVisible] = useState(false);

  if (usersSwipeList != oldUsersSwipeList) {
    let newUsers = [...usersSwipeList];
    setOldUsersSwipeList(newUsers);
  }

  useLayoutEffect(async () => {
    if (!currentUser.likesPermissions) {
      const response = await getNotificationsPermisions();

      if (response) {
        currentUser.likesNotification = true;
        currentUser.matchesNotifications = true;
        currentUser.newFriendsNotification = true;
        currentUser.newMessagesNotification = true;

        notificationsToDB(
          likesNotification,
          matchesNotifications,
          newFriendsNotification,
          newMessagesNotification
        );
      }
    }
  }, []);

  return (
    <Layout>
      <View className="w-full items-end absolute top-16 flex flex-row justify-center">
        <Text className="text-2xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Universitiers
        </Text>
        <Ionicons
          name="settings-outline"
          onPress={() => navigation.navigate("SettingsScreen")}
          size={30}
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <View className="h-3/5 items-center justify-center w-3/4">
        {usersSwipeList.length == 0 ? (
          <View className="h-3/5 w-3/4 rounded-md bg-white justify-center items-center">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>
              No more profiles :/
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
              cards={oldUsersSwipeList}
              onSwipedRight={(i) => {
                swipeController.swipeRight(currentUser, usersSwipeList[i]);
                console.log(usersSwipeList);
                db()
                  .doc("users/" + usersSwipeList[i].id)
                  .get()
                  .then((d) => {
                    console.log(currentUser.id);
                    console.log(usersSwipeList[i].id);
                    const data = d.data();
                    console.log(data.swipeRight.includes(currentUser.id));
                    if (data.swipeRight.includes(currentUser.id)) {
                      currentUser.matches.push(usersSwipeList[i].id);
                      console.log(currentUser.id);
                      console.log(usersSwipeList[i].id);
                      db()
                        .collection("matches/")
                        .doc(currentUser.id + usersSwipeList[i].id)
                        .set({
                          users: {
                            [currentUser.id]: currentUser,
                            [usersSwipeList[i].id]: usersSwipeList[i],
                          },
                          usersMatched: [currentUser.id, usersSwipeList[i].id],
                          time: new Date(),
                        })
                        .then(() => {
                          setMatchDetailsPopUp(usersSwipeList[i]);
                          matchController.getMatchesCurrentUser();
                          setVisible(true);
                        });
                      console.log("match");
                      usersSwipeList[i].matches.push(currentUser.id);

                      matchController
                        .addMatch(currentUser)
                        .then(() =>
                          matchController.addMatch(usersSwipeList[i])
                        );
                    } else {
                      usersSwipeList[i].likes.push(currentUser.id);
                      likesController
                        .addLike(usersSwipeList[i])
                        .then(() => console.log("added like"))
                        .catch((e) => console.error(e));
                    }
                  });
              }}
              onSwipedLeft={(i) =>
                swipeController.swipeLeft(currentUser, usersSwipeList[i])
              }
              renderCard={(UsersData) =>
                UsersData ? (
                  <SwipeUserCard
                    bio={UsersData.bio}
                    name={UsersData.name}
                    uni={UsersData.uni}
                    age={UsersData.bornDate}
                    user={UsersData}
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
      <MatchPopUp visible={visible}>
        <Ionicons
          name="close-outline"
          size={40}
          onPress={() => setVisible(false)}
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-5"
        >
          It's a Match
        </Text>
        <View className="mt-5 flex flex-row">
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            You have a match with
            {" " + matchDetailsPopUp?.name}
          </Text>
        </View>
        <Image
          source={{ uri: matchDetailsPopUp?.photosURL[0] }}
          className="mt-4 rounded-full  h-20 w-20"
        ></Image>
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
            navigation.navigate("ChatScreen");
          }}
          style={{ backgroundColor: "#9FA0FF" }}
          className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>Go to Messages</Text>
        </TouchableOpacity>
      </MatchPopUp>
      <View className="flex flex-row mt-10">
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          className="h-16 w-16 bg-white mr-10 items-center justify-center rounded-full"
        >
          <Ionicons name="close-outline" size={39} color={"#E85F5C"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          className="h-16 w-16 bg-white ml-10 items-center justify-center rounded-full"
        >
          <Ionicons name="heart-outline" color={"#9FA0FF"} size={39} />
        </TouchableOpacity>
      </View>
      <Tabbar focus="Swipe" />
    </Layout>
  );
};

export default SwipeScreen;
