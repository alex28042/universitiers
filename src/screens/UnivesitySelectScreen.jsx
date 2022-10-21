import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import SelectList from "react-native-dropdown-select-list/index";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const UnivesitySelectScreen = () => {
  const [universitiesList, setUniversitiesList] = useState([
    { key: "1", value: "UPM" },
  ]);
  const [university, setUniversity] = useState("");
  const navigation = useNavigation();
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
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <ButtonCustom
          to="AgeSelectionScreen"
          bgColor="white"
          text="How old are you? :)"
        />
      </View>
    </Layout>
  );
};

export default UnivesitySelectScreen;
