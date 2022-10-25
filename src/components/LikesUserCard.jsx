import { View, Text } from "react-native";
import React from "react";

const LikesUserCard = () => {
  return (
    <View className="h-32 w-20 rounded-lg ml-1 mr-1 bg-white">
      <View className="ml-1 absolute bottom-0 justify-between">
        <Text style={{fontFamily:"Poppins_500Medium"}}>Name</Text>
        <Text style={{fontFamily:"Poppins_500Medium"}}>Uni</Text>
      </View>
    </View>
  );
};

export default LikesUserCard;
