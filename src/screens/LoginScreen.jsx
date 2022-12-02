import {
  View,
  Text,
  TextInputComponent,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import TextInputCustom from "../components/TextInputCustom";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase-config";
import { currentUser, User } from "../data/User";
import storage from "../data/storage";
import { UserController } from "../api/user";
import { MatchController } from "../api/matches";
import { LikesController } from "../api/likes";
import { usersSwipeList } from "../data/UsersSwipeList";
import Logo from '../../assets/Universitiers.png'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [errorLogIn, setErrorLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userController = new UserController();
  const likesController = new LikesController();
  const matchController = new MatchController();
  const [loadin, setLoadin] = useState(false);
  const [attempUserSwipeList, setAttempUserSwipeList] = useState(0)

  const handleLogIn = (email, password) => {
    userController.removeUsersSwipeList()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        userController.getCurrentUser(email).then(() => {
          storage.set("email", email);
          storage.set("password", password);
          if (attempUserSwipeList == 0) {
            setAttempUserSwipeList(attempUserSwipeList + 1)
            userController.getUsers().then(async () => {
              setLoadin(true);
              likesController.getLikesCurrentUser();
              matchController.getMatchesCurrentUser();
              navigation.navigate("LoadScreen");
              setTimeout(() => {
                setLoadin(false)
              }, 350);
            });
          }
        });
      })
      .catch(() => {
        setErrorLogIn(true);
        setLoadin(false);
      });
  };

  if (loadin) {
    return (
      <Layout>
        <Image
          className="h-72 w-72"
          source={Logo}
        />
        <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
          Universitiers
        </Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 items-center w-full h-full justify-center"
        keyboardVerticalOffset={10}
      >
        <Ionicons
          name="chevron-back-outline"
          size={30}
          style={{ position: "absolute", top: 60, left: 10 }}
          onPress={() => navigation.goBack()}
        />
        <View className="w-full ml-32 mb-10">
          <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
            Hello again!
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            Welcome back you've been missed
          </Text>
        </View>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          className="bg-white mb-3 rounded-full px-2"
          style={{ width: "70%", height: 45, fontFamily: "Poppins_500Medium" }}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="Password"
          className="bg-white mb-3 rounded-full px-2"
          style={{ width: "70%", height: 45, fontFamily: "Poppins_500Medium" }}
        />
        <TouchableOpacity>
          <Text
            className="underline"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Recover password
          </Text>
        </TouchableOpacity>
        {errorLogIn ? (
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            Error in password or email
          </Text>
        ) : (
          <></>
        )}
        <View className="absolute bottom-6 w-full items-center">
          <TouchableOpacity
            style={{
              width: "90%",
              height: 40,
              backgroundColor: "white",
            }}
            className="items-center justify-center rounded-lg"
            onPress={() => {
              handleLogIn(email, password);
            }}
          >
            <Text style={{ fontFamily: "Poppins_500Medium" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default LoginScreen;
