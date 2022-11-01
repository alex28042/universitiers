import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import storage from "../data/storage";
import { auth } from "../../firebase-config";
import { currentUser } from "../data/User";

const ResetPasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handlePassword = async () => {
    if (
      oldPassword != "" &&
      newPassword != "" &&
      newPassword === oldPassword &&
      newPassword.length > 5
    ) {
      setPassword(await storage.get("password"));
      auth
        .signInWithEmailAndPassword(currentUser.email, password)
        .then((userCredentials) =>
          userCredentials.user.updatePassword(newPassword)
        )
        .then(() => storage.set("password", newPassword))
        .then(() => navigation.goBack());
    }
  };

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 80, left: 15 }}
        onPress={() => navigation.goBack()}
      />
      <View className="w-full ml-32">
        <Text
          className="text-2xl mb-10"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Recover password
        </Text>
      </View>
      <TextInput
        onChangeText={(text) => setOldPassword(text)}
        placeholder="Old password"
        className="bg-white mb-5 rounded-full px-2"
        style={{ width: "70%", height: 45, fontFamily: "Poppins_500Medium" }}
      />
      <TextInput
        onChangeText={(text) => setNewPassword(text)}
        placeholder="New password"
        className="bg-white mb-3 rounded-full px-2"
        style={{ width: "70%", height: 45, fontFamily: "Poppins_500Medium" }}
      />
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => handlePassword()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default ResetPasswordScreen;
