import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { currentUser } from "../../data/User";

const ProfileDetails = () => {
  const navigation = useNavigation()
  return (
    <View className="w-full h-40 mb-5">
      <View className="flex flex-row ml-16">
        <View className="h-20 w-20 rounded-full bg-white"></View>
        <View className="flex flex-col">
          <Text className="ml-4 mt-2" style={{fontFamily: 'Poppins_700Bold'}}>{currentUser.email}</Text>
          <Text className="ml-4" style={{fontFamily: 'Poppins_500Medium'}}>joined 1 day ago</Text>
          <View className="flex flex-row mt-3">
            <TouchableOpacity onPress={() => navigation.navigate("PreviewProfileScreen")} className="h-10 w-16 ml-3 mr-5 rounded-lg bg-white items-center justify-center">
              <Text  style={{fontFamily: 'Poppins_500Medium'}}>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-16 rounded-lg bg-white items-center justify-center">
              <Text  style={{fontFamily: 'Poppins_500Medium'}}>{currentUser.matches.length}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
