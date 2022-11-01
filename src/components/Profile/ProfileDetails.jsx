import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { currentUser, matches } from "../../data/User";
import { Ionicons } from "@expo/vector-icons";

const ProfileDetails = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-40 mb-5">
      <View className="flex flex-row ml-16">
        <Image
          source={{ uri: currentUser.photosURL[0] }}
          className="h-24 w-24 rounded-full bg-white"
        ></Image>
        <View className="flex flex-col">
          <Text className="ml-4 mt-2" style={{ fontFamily: "Poppins_700Bold" }}>
            {currentUser.name}
          </Text>
          <Text className="ml-4" style={{ fontFamily: "Poppins_500Medium" }}>
            joined 1 day ago
          </Text>
          <View className="flex flex-row mt-3">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PreviewProfileScreen", {
                  user: currentUser,
                })
              }
              className="h-10 w-16 ml-3 mr-5 rounded-lg bg-white items-center justify-center"
            >
              <Text style={{ fontFamily: "Poppins_500Medium" }}>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-16 rounded-lg bg-white items-center justify-center">
              <View className="flex flex-row justify-between w-full">
                <Ionicons
                  name="person-outline"
                  size={18}
                  style={{ marginLeft: 10 }}
                />
                <Text
                  style={{ fontFamily: "Poppins_500Medium", marginRight: 19 }}
                >
                  {matches.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
