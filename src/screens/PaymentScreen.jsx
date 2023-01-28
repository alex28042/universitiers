import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { currentUser, User } from "../data/User";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const PaymentScreen = () => {
  const navigation = useNavigation();

  return currentUser.id == "" ? (
    <LoadingScreen />
  ) : (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 80, left: 15 }}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl m-5">
        Subscribe to Universitiers Premium
      </Text>
      <View className="h-56"></View>
      <TouchableOpacity
        onPress={() => {
        }}
        style={{ backgroundColor: "#9FA0FF" }}
        className="bottom-5 absolute w-52 items-center justify-center h-14 rounded-2xl"
      >
        <Text style={{ fontFamily: "Poppins_700Bold" }}>Pay</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default PaymentScreen;
