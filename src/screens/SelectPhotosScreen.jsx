import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import CardPhoto from "../components/CardPhoto";
import ButtonCustom from "../components/ButtonCustom";
import AddPhoto from "../components/SelectPhotos/AddPhoto";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../data/User";
import { UserController } from "../api/user";
import { auth } from "../../firebase-config";

const SelectPhotosScreen = () => {
  const userController = new UserController();
  const navigation = useNavigation();
  const [errorRegister, setErrorRegister] = useState(false)

  const createUser = () => {
    if (currentUser.email != "" && currentUser.password != "") {
      auth
        .createUserWithEmailAndPassword(currentUser.email, currentUser.password)
        .then(() => {
          navigation.navigate("LoadScreen");
          userController.createUser(currentUser);
        })
        .catch(() => setErrorRegister(true));
    }
  };

  console.log(currentUser);

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="w-full items-start ml-32">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Select
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          your photos
        </Text>
      </View>
      <View className="mt-10 w-full h-2/4 items-center">
        <View className="flex flex-row">
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
        </View>
        <View className="flex flex-row mt-10">
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
        </View>
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-4"
      >
        <AddPhoto />
      </View>
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => createUser()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{"Enjoy :)"}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default SelectPhotosScreen;
