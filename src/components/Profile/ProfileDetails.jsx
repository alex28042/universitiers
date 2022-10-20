import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileDetails = () => {
  return (
    <View className="w-full h-40">
      <View className="flex flex-row ml-20">
        <View className="h-14 w-14 rounded-full bg-white"></View>
        <View className="flex flex-col">
          <Text style={{fontFamily: 'Poppins_500Medium'}}>@Name</Text>
          <Text  style={{fontFamily: 'Poppins_500Medium'}}>joined 1 day ago</Text>
          <View className="flex flex-row">
            <TouchableOpacity className="h-10 w-10 rounded-lg bg-white items-center justify-center">
              <Text  style={{fontFamily: 'Poppins_500Medium'}}>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 rounded-lg bg-white items-center justify-center">
              <Text  style={{fontFamily: 'Poppins_500Medium'}}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
