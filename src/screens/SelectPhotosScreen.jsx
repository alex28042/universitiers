import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import CardPhoto from "../components/CardPhoto";
import ButtonCustom from "../components/ButtonCustom";
import AddPhoto from "../components/SelectPhotos/AddPhoto";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SelectPhotosScreen = () => {
  const navigation = useNavigation();

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
          {" "}
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
        <ButtonCustom to="LoadScreen" bgColor="white" text="Enjoy!" />
      </View>
    </Layout>
  );
};

export default SelectPhotosScreen;
