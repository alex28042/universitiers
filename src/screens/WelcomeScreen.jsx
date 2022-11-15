import {
  View,
  Text,
  ActivityIndicator,
  Image,
  DeviceEventEmitter,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import storage from "../data/storage";
import { useNavigation } from "@react-navigation/native";
import { auth, db, st } from "../../firebase-config";
import { UserController } from "../api/user";
import { usersSwipeList } from "../data/UsersSwipeList";
import { currentUser, matches, url } from "../data/User";
import { MatchController } from "../api/matches";
import { set } from "react-native-reanimated";
import { LikesController } from "../api/likes";
import Logo from "../../assets/Universitiers.png";
import * as Localization from "expo-localization";
import { getCurrentLocation } from "../utils/Location";

const WelcomeScreen = () => {
  const userController = new UserController();
  const matchController = new MatchController();
  const likesController = new LikesController();
  const [Url, setUrl] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  let [fontLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useLayoutEffect(() => {
    currentUser.deviceLenguague = Localization.locale;
  }, []);

  const getDetailsUser = () => {
    userController.getCurrentUser(userEmail).then(() => {
      if (usersSwipeList.length == 0) {
        userController.getUsers().then(async () => {
          likesController.getLikesCurrentUser().then(() => {
            matchController.getMatchesCurrentUser();
            navigation.navigate("LoadScreen");
            setTimeout(() => {
              setLoading(false);
            }, 350);
          });
        });
      }
    });
  };

  useEffect(() => {
    const userLogged = async () => {
      const userEmail = await storage.get("email");
      const userPassword = await storage.get("password");

      if (userEmail !== null && userPassword !== null) {
        await auth
          .signInWithEmailAndPassword(userEmail, userPassword)
          .then(() => getDetailsUser())
          .catch(() => {
            storage.remove("email");
            storage.remove("password");
            setLoading(false);
          });
      } else {
        const response = await getCurrentLocation();
        setLoading(false);
      }
    };

    userLogged();
  }, [loading]);

  if (loading) {
    return !fontLoaded ? (
      <Layout>
        <Image className="h-72 w-72" source={Logo} />
      </Layout>
    ) : (
      <Layout>
        <Image className="h-72 w-72" source={Logo} />
        <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
          Universitiers
        </Text>
      </Layout>
    );
  }

  return !fontLoaded ? (
    <Layout>
      <ActivityIndicator color={"white"} />
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
