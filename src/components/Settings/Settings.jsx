import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ButtonSettings from "./ButtonSettings";
import { auth } from "../../../firebase-config";
import storage from "../../data/storage";
import { useNavigation } from "@react-navigation/native";
import { currentUser } from "../../data/User";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View className="h-3/4 items-center bottom-0 absolute justify-center bg-white w-full rounded-t-3xl">
      <View className="w-full items-center mb-10">
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Account"}
          to="SettingsOptionsScreen"
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Privacy settings"}
          to="SettingsOptionsScreen"
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Push notifications"}
          to="SettingsOptionsScreen"
        />
      </View>
      <View className="w-full items-center mb-10">
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Swipe settings"}
          to="SettingsOptionsScreen"
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Help"}
          to="SettingsOptionsScreen"
        />
      </View>
      <View className="w-full items-center">
        <TouchableOpacity
          style={{
            backgroundColor: "#9FA0FF",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          className="w-3/4 justify-center h-10"
          onPress={() => {
            auth
              .signOut()
              .then(() => {
                storage.remove("email");
                storage.remove("password");
                navigation.navigate("LoginScreen");
              })
              .catch(() => console.log("no logout"));
          }}
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }} className="ml-3">
            Logout
          </Text>
        </TouchableOpacity>
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Delete Account"}
          to="SettingsOptionsScreen"
        />
      </View>
    </View>
  );
};

export default Settings;
