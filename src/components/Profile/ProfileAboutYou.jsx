import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MatchPopUp from "../Match/MatchPopUp";
import { currentUser } from "../../data/User";
import SelectList from "react-native-dropdown-select-list/index";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../firebase-config";
import ProfilePopUp from "./ProfilePopUp";

const ProfileAboutYou = () => {
  const [bio, setBio] = useState("");
  const [universitiesList, setUniversitiesList] = useState([{ value: "UPM" }]);
  const [university, setUniversity] = useState("");
  const [bioVisible, setBioVisible] = useState(false);
  const [swipeSettingsVisible, setSwipeSettingsVisible] = useState(false);
  const [editProfileVisible, seteditProfileVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="w-full mt-5 items-center">
      <View className="w-full ml-20 mb-2">
        <Text style={{ fontFamily: "Poppins_700Bold" }}>About you:</Text>
      </View>
      <TouchableOpacity
        style={{
          width: "80%",
          height: 40,
          backgroundColor: "white",
        }}
        onPress={() => setBioVisible(true)}
        className="justify-between items-center rounded-lg mt-1 flex flex-row"
      >
        <Text className="ml-2" style={{ fontFamily: "Poppins_500Medium" }}>
          Bio
        </Text>
        <Ionicons name="chevron-forward-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "80%",
          height: 40,
          backgroundColor: "white",
        }}
        onPress={() => setSwipeSettingsVisible(true)}
        className="justify-between items-center rounded-lg mt-1 flex flex-row"
      >
        <Text className="ml-2" style={{ fontFamily: "Poppins_500Medium" }}>
          Swipe settings
        </Text>
        <Ionicons name="chevron-forward-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "80%",
          height: 40,
          backgroundColor: "white",
        }}
        onPress={() => navigation.navigate("SettingsScreen")}
        className="justify-between items-center rounded-lg mt-1 flex flex-row"
      >
        <Text className="ml-2" style={{ fontFamily: "Poppins_500Medium" }}>
          Edit profile
        </Text>
        <Ionicons name="chevron-forward-outline" size={25} />
      </TouchableOpacity>
      <ProfilePopUp visible={bioVisible}>
        <Ionicons
          name="close-outline"
          size={40}
          onPress={() => setBioVisible(false)}
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-5"
        >
          Change Bio
        </Text>
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          {(bio.length == 0 ? currentUser.bio.length : bio.length) + "/" + 80}
        </Text>
        <TextInput
          onChangeText={(text) => setBio(text)}
          style={{
            backgroundColor: "#9FA0FF",
            fontFamily: "Poppins_700Bold",
          }}
          textAlignVertical={"top"}
          className="w-3/4 h-24 rounded-2xl px-2 py-1 mt-10"
          placeholder="Bio"
          multiline
          defaultValue={currentUser.bio}
        />
        <TouchableOpacity
          onPress={() => {
            if (
              bio != "" && bio.length == 0
                ? currentUser.bio.length < 80
                : bio.length < 80
            ) {
              db()
                .doc("users/" + currentUser.id)
                .update({
                  bio: bio,
                })
                .then(() => (currentUser.bio = bio));
            } 
            setBioVisible(false);
          }}
          style={{ backgroundColor: "#9FA0FF" }}
          className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
        </TouchableOpacity>
      </ProfilePopUp>
      <ProfilePopUp visible={swipeSettingsVisible}>
        <Ionicons
          name="close-outline"
          size={40}
          onPress={() => setSwipeSettingsVisible(false)}
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg mt-5"
        >
          Swipe settings
        </Text>
        <View className="w-3/4 h-10 mt-10">
          <SelectList
            placeholder="Select University"
            searchPlaceholder="University"
            dropdownStyles={{
              backgroundColor: "#9FA0FF",
              borderWidth: 0,
              zIndex: 10,
            }}
            boxStyles={{
              backgroundColor: "#9FA0FF",
              borderWidth: 0,
              zIndex: 10,
            }}
            inputStyles={{ fontFamily: "Poppins_500Medium" }}
            dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
            setSelected={setUniversity}
            data={universitiesList}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (university != "") {
              db()
                .doc("users/" + currentUser.id)
                .update({
                  swipeUniversity: university,
                })
                .then(() => (currentUser.swipeUniversity = university));
            }
            setSwipeSettingsVisible(false);
          }}
          style={{ backgroundColor: "#9FA0FF" }}
          className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
        </TouchableOpacity>
      </ProfilePopUp>
    </View>
  );
};

export default ProfileAboutYou;
