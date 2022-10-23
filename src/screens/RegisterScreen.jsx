import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebase-config";
import { User } from "../data/User";
import storage from "../data/storage";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [passwordError, setPasswordError] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const createUser = (email, password, name) => {
    if (
      name != "" &&
      email != "" &&
      password != "" &&
      password.length > 6 &&
      regexEmail.test(email)
    ) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate("UnivesitySelectScreen");
          console.log("hecho");
          storage.set("email", email);
          storage.set("password", password);
          User.email = email;
          User.name = name;
          db().collection("users/").add({
            email: User.email,
            bio: User.bio,
            likes: User.likes,
            matches: User.matches,
            photos: User.photos,
            uni: User.uni,
          });
        })
        .catch(() => setErrorRegister(true));
    }

    password?.length < 6 ? setPasswordError(true) : setPasswordError(false);
  };

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="items-start w-full ml-32 mb-20">
        <Text className="text-4xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Welcome!
        </Text>
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          to Universitiers
        </Text>
      </View>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        className="bg-white mb-3 rounded-full px-2"
        style={{ width: "70%", height: 45, fontFamily: "Poppins_500Medium" }}
      />
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
      {passwordError ? (
        <Text style={{ fontFamily: "Poppins_500Medium" }}>Error</Text>
      ) : (
        <></>
      )}
      {errorRegister ? (
        <Text style={{ fontFamily: "Poppins_500Medium" }}>Error Register</Text>
      ) : (
        <></>
      )}
      <View className="bottom-0 absolute mb-4 w-full items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => createUser(email, password, firstName)}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            Enter your University
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
