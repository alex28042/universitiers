import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileDetails = () => {
  return (
    <View className="w-full h-40">
      <View className="flex flex-row">
        <View className="h-14 w-14 rounded-full bg-white"></View>
        <View className="flex flex-col">
          <Text>@Name</Text>
          <Text>joined 1 day ago</Text>
          <View className="flex flex-row">
            <TouchableOpacity className="h-10 w-10 rounded-lg bg-white items-center justify-center">
              <Text>Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 rounded-lg bg-white items-center justify-center">
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
