import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import SelectList from "react-native-dropdown-select-list/index";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../data/User";
import { getCurrentLocation, locationToDB } from "../utils/Location";

const UnivesitySelectScreen = () => {
  const [universitiesList, setUniversitiesList] = useState([{ value: "UPM" }]);
  const [university, setUniversity] = useState("");
  const navigation = useNavigation();
  const text = "How old are you? :)";
  const [errorUniversity, setErrorUniversity] = useState(false);

  useLayoutEffect(async () => {
    const response = await getCurrentLocation();

    if (response.status) {
      currentUser.locationPrivacy = true;
      currentUser.location = response.location;
      locationToDB(currentUser.location, currentUser.locationPrivacy);
    }
  }, []);

  const handleSelectUni = () => {
    if (university != "") {
      currentUser.uni = university;
      navigation.navigate("AgeSelectionScreen");
    } else setErrorUniversity(true);
  };
  console.log(currentUser);

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="items-start w-full ml-32 mb-24">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Enter your
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          University
        </Text>
      </View>
      <View className="w-3/4 h-10">
        <SelectList
          placeholder="Select University"
          searchPlaceholder="University"
          dropdownStyles={{ backgroundColor: "white", borderWidth: 0 }}
          boxStyles={{ backgroundColor: "white", borderWidth: 0 }}
          inputStyles={{ fontFamily: "Poppins_500Medium" }}
          dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
          setSelected={setUniversity}
          data={universitiesList}
        />
      </View>
      {errorUniversity ? <Text>Error university</Text> : <></>}
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => handleSelectUni()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default UnivesitySelectScreen;
