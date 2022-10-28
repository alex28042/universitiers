import { View, Text } from "react-native";
import React from "react";
import SwipeUserCard from "../SwipeUserCard";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../../data/User";

const CardProfile = ({ user }) => {

  return (
    <View className="bg-white rounded-xl w-3/4 h-3/5 mt-10">
      <View className="bottom-0 absolute self-start w-full justify-between flex flex-row">
        <View className="flex flex-col ml-8">
          <Text style={{ fontFamily: "Poppins_700Bold" }}>
            {user.name}, {user.age == 0 ? "age" : user.age}
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {user.uni !== "" ? user.uni : "No Uni Selected"}
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium", marginBottom: 10 }}>
            Bio
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardProfile;
