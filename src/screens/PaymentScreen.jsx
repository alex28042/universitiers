import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { currentUser, User } from "../data/User";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { PaymentIntent, useStripe } from "@stripe/stripe-react-native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const onCheckout = async () => {
    const response = await fetch("http://192.168.1.89:3000/intents", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json());

    if (response.error) {
      Alert.alert("Something went wrong");
      return;
    }

    const initResponse = await initPaymentSheet({
      merchantDisplayName: "universitiers",
      paymentIntentClientSecret: response.paymentIntent,
    
    })

    if (initResponse.error) {
      Alert.alert("Something went wrong");
      return;
    }

    const paymentResponse = await presentPaymentSheet()

    if (paymentResponse.error) {
      Alert.alert("Something went wrong");
      return;
    }
  };

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
        onPress={() => onCheckout()}
        style={{ backgroundColor: "#9FA0FF" }}
        className="bottom-5 absolute w-52 items-center justify-center h-14 rounded-2xl"
      >
        <Text style={{ fontFamily: "Poppins_700Bold" }}>Pay</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default PaymentScreen;
