import { View, Text, TextInputComponent } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import TextInputCustom from "../components/TextInputCustom";
import ButtonCustom from "../components/ButtonCustom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  
  return (
    <Layout>
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
      <TextInputCustom placeholder="Email" />
      <TextInputCustom placeholder="Password" />
      <TouchableOpacity>
        <Text className="underline" style={{ fontFamily: "Poppins_500Medium" }}>
          Recover password
        </Text>
      </TouchableOpacity>
      <View className="absolute bottom-4 w-full items-center">
        <ButtonCustom bgColor="white" text="Log In" />
      </View>
    </Layout>
  );
};

export default LoginScreen;
