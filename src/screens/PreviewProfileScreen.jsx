import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import CardProfile from "../components/PreviewProfile/CardProfile";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PreviewProfileScreen = ({route}) => {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="mt-20 text-xl">
        {user.name}
      </Text>
      <CardProfile user={user}/>
    </Layout>
  );
};

export default PreviewProfileScreen;
