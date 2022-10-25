import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import SelectList from "react-native-dropdown-select-list/index";
import { currentUser } from "../data/User";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SelectGenderScreen = () => {
  const [genderList, setGenderList] = useState([
    { value: "Man" },
    { value: "Woman" },
    { value: "Other" },
  ]);
  const [genderListSearch, setGenderListSearch] = useState([
    { value: "Man" },
    { value: "Woman" },
    { value: "Both" },
  ]);
  const [genderCurrentUser, setGenderCurrentUser] = useState("");
  const [genderSearchUser, setGenderSearchUser] = useState("");
  const [errorSelectGender, seterrorSelectGender] = useState(false);
  const navigation = useNavigation();

  const handleGenderSelection = () => {
    if (genderCurrentUser != "" && genderSearchUser != "") {
      currentUser.gender = genderCurrentUser;
      currentUser.genderSearch = genderSearchUser;
      navigation.navigate("SelectPhotosScreen");
    } else seterrorSelectGender(true);
  };

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="w-full ml-20 mb-6">
        <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-2xl">
          Select your gender
        </Text>
      </View>
      <View className="w-3/4 h-10 mb-32">
        <SelectList
          placeholder="Select your gender"
          searchPlaceholder="Gender"
          dropdownStyles={{ backgroundColor: "white", borderWidth: 0 }}
          boxStyles={{ backgroundColor: "white", borderWidth: 0 }}
          inputStyles={{ fontFamily: "Poppins_500Medium" }}
          dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
          setSelected={setGenderCurrentUser}
          data={genderList}
        />
      </View>
      <View className="w-full ml-20 mb-6">
        <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-2xl">
          Whata are you searching?
        </Text>
      </View>

      <View className="w-3/4 h-10">
        <SelectList
          placeholder="What are you Searching"
          searchPlaceholder="Gender"
          dropdownStyles={{ backgroundColor: "white", borderWidth: 0 }}
          boxStyles={{ backgroundColor: "white", borderWidth: 0 }}
          inputStyles={{ fontFamily: "Poppins_500Medium" }}
          dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
          setSelected={setGenderSearchUser}
          data={genderListSearch}
        />
      </View>
      {errorSelectGender ? <Text>Error selection</Text> : <></>}
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => handleGenderSelection()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            Select your photos
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default SelectGenderScreen;
