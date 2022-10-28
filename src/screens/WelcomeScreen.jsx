import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import storage from "../data/storage";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebase-config";
import { UserController } from "../api/user";
import { usersSwipeList } from "../data/UsersSwipeList";
import { currentUser, matches } from "../data/User";
import { MatchController } from "../api/matches";

const WelcomeScreen = () => {
  const userController = new UserController();
  const matchController = new MatchController()
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  let [fontLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    const userLogged = async () => {
      const userEmail = await storage.get("email");
      const userPassword = await storage.get("password");

      if (userEmail !== null && userPassword !== null) {
        await auth
          .signInWithEmailAndPassword(userEmail, userPassword)
          .then(() => {
            userController.getCurrentUser(userEmail).then(() => {
              if (usersSwipeList.length == 0) {
                userController.getUsers().then(() => {
                  matchController.getMatchesCurrentUser()
                  navigation.navigate("SwipeScreen");
                  setTimeout(() => {
                    setLoading(false);
                  }, 300);
                });
              }
            });
          })
          .catch(() => {
            storage.remove("email");
            storage.remove("password");
            setLoading(false);
          });
      } else setLoading(false);
    };

    userLogged();
  }, [loading]);

  if (loading) {
    return (
      <Layout>
        <ActivityIndicator />
      </Layout>
    );
  }

  return !fontLoaded ? (
    <Layout>
      <ActivityIndicator />
    </Layout>
  ) : (
    <Layout>
      <View className="items-start w-full ml-32">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Welcome
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          to Universitiers
        </Text>
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          meet friends at university
        </Text>
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-10"
      >
        <View className="w-full items-center mb-2">
          <ButtonCustom to="RegisterScreen" bgColor="white" text="Join now!" />
        </View>
        <ButtonCustom to="LoginScreen" bgColor="#9FA0FF" text="Login" />
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
