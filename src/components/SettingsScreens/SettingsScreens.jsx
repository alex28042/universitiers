import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonSettings from "../Settings/ButtonSettings";
import { auth } from "../../../firebase-config";
import Navigation from "../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import storage from "../../data/storage";

const SettingsScreens = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getCredentialsCurrrentUser = async () => {
    setEmail(await storage.get("email"));
    setPassword(await storage.get("password"));
  };

  getCredentialsCurrrentUser();

  const handleDelete = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      user.user.delete();
      storage.remove("email")
      storage.remove("password")
      navigation.navigate("RegisterScreen");
    });
  };

  switch (props.name) {
    case "Account":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11 justify-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Name"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Birthday"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"University"}
            />
          </View>
          <View className=" w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Gender"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Username"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Change password"}
            />
          </View>
        </View>
      );
    case "Privacy settings":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Blocked users"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Location"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Camera"}
            />
          </View>
        </View>
      );
    case "Push notifications":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"New friends"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Messages"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Someone likes you"}
            />
          </View>
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Matches"}
            />
          </View>
        </View>
      );
    case "Swipe settings":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Hide from Swipe"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Preferred gender"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Preferred University"}
            />
          </View>
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Location"}
            />
          </View>
        </View>
      );
    case "Help":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"I have a question"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Contact us"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Take me to Privacy settings"}
            />
          </View>
        </View>
      );
    case "Purchases":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Account"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Privacy settings"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Push notifications"}
            />
          </View>
        </View>
      );

    case "Delete Account":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl items-center bg-white">
          <View className="w-full ml-32 mt-24 mb-4">
            <Text
              className="text-3xl"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              Delete
            </Text>
            <Text
              className="text-3xl mb-7"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              your account?
            </Text>
            <Text style={{ fontFamily: "Poppins_500Medium" }}>
              you won't able to recover
            </Text>
            <Text className="mb-16" style={{ fontFamily: "Poppins_500Medium" }}>
              your account
            </Text>
            <Text style={{ fontFamily: "Poppins_700Bold" }}>Write DELETE</Text>
          </View>
          <TextInput
            placeholder="DELETE"
            className="w-3/4 h-10 px-2 rounded-full"
            style={{
              backgroundColor: "#9FA0FF",
              fontFamily: "Poppins_700Bold",
            }}
          />
          <TouchableOpacity
            className="bottom-0 absolute mb-7 h-10 w-20 rounded-full items-center justify-center"
            style={{ backgroundColor: "#9FA0FF" }}
            onPress={() => handleDelete(email, password)}
          >
            <Text style={{ fontFamily: "Poppins_700Bold" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

export default SettingsScreens;
