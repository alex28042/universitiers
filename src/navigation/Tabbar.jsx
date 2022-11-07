import { View, Text } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tabbar = (props) => {
  const navigation = useNavigation();

  switch (props.focus) {
    case "Likes":
      return (
        <View className="w-4/5 h-10 rounded-xl flex flex-row bg-white items-center justify-between bottom-0 absolute mb-6">
          <Ionicons
            style={{ marginLeft: 19 }}
            color="black"
            size={28}
            name="clipboard-outline"
            onPress={() => navigation.navigate("SwipeScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="heart"
            onPress={() => navigation.navigate("LikesScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="chatbox-outline"
            onPress={() => navigation.navigate("ChatScreen")}
          />
          <Ionicons
            style={{ marginRight: 19 }}
            color="black"
            size={28}
            name="person-outline"
            onPress={() => navigation.navigate("ProfileScreen")}
          />
        </View>
      );
    case "Swipe":
      return (
        <View className="w-4/5 h-10 rounded-xl flex flex-row bg-white items-center justify-between bottom-0 absolute mb-6">
          <Ionicons
            style={{ marginLeft: 19 }}
            color="black"
            size={28}
            name="clipboard"
            onPress={() => navigation.navigate("SwipeScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="heart-outline"
            onPress={() => navigation.navigate("LikesScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="chatbox-outline"
            onPress={() => navigation.navigate("ChatScreen")}
          />
          <Ionicons
            style={{ marginRight: 19 }}
            color="black"
            size={28}
            name="person-outline"
            onPress={() => navigation.navigate("ProfileScreen")}
          />
        </View>
      );
    case "Chat":
      return (
        <View
          style={{ backgroundColor: "#9FA0FF" }}
          className="w-4/5 h-10 rounded-xl flex flex-row items-center justify-between bottom-0 absolute mb-6"
        >
          <Ionicons
            style={{ marginLeft: 19 }}
            color="black"
            size={28}
            name="clipboard-outline"
            onPress={() => navigation.navigate("SwipeScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="heart-outline"
            onPress={() => navigation.navigate("LikesScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="chatbox"
            onPress={() => navigation.navigate("ChatScreen")}
          />
          <Ionicons
            style={{ marginRight: 19 }}
            color="black"
            size={28}
            name="person-outline"
            onPress={() => navigation.navigate("ProfileScreen")}
          />
        </View>
      );
    case "Profile":
      return (
        <View className="w-4/5 h-10 rounded-xl flex flex-row bg-white items-center justify-between bottom-0 absolute mb-6">
          <Ionicons
            style={{ marginLeft: 19 }}
            color="black"
            size={28}
            name="clipboard-outline"
            onPress={() => navigation.navigate("SwipeScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="heart-outline"
            onPress={() => navigation.navigate("LikesScreen")}
          />
          <Ionicons
            color="black"
            size={28}
            name="chatbox-outline"
            onPress={() => navigation.navigate("ChatScreen")}
          />
          <Ionicons
            style={{ marginRight: 19 }}
            color="black"
            size={28}
            name="person"
            onPress={() => navigation.navigate("ProfileScreen")}
          />
        </View>
      );
  }
};

export default Tabbar;
