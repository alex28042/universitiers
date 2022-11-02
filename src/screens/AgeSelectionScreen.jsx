import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../data/User";

const AgeSelectionScreen = () => {
  const navigation = useNavigation();
  const [day, setday] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [errorBirthday, setErrorBirthday] = useState(false);

  const handleBirthday = () => {
    function calculateAge(birthday) {
      let ageDifMs = Date.now() - birthday.getTime();
      let ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    if (
      day != 0 &&
      month != 0 &&
      year != 0 &&
      calculateAge(new Date(year, month, day)) >= 18
    ) {
      currentUser.bornDate = [day, month, year];
      navigation.navigate("SelectGenderScreen");
    } else setErrorBirthday(true);
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
      <View className="w-full items-start ml-32">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          How
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          old are you?
        </Text>
        <Text style={{ fontFamily: "Poppins_500Medium" }}>
          you must be 18+ years old
        </Text>
      </View>
      <View
        className="flex flex-row w-full ml-32 mt-10"
        style={{ paddingBottom: 50 }}
      >
        <TextInput
          onChangeText={(text) => setday(text)}
          keyboardType="numeric"
          placeholder="DD"
          style={{ fontSize: 20, fontFamily: "Poppins_500Medium" }}
          maxLength={2}
        />
        <Text className="text-xl" style={{ fontFamily: "Poppins_500Medium" }}>
          /
        </Text>
        <TextInput
          onChangeText={(text) => setMonth(text)}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          style={{ fontSize: 20, fontFamily: "Poppins_500Medium" }}
        />
        <Text className="text-xl" style={{ fontFamily: "Poppins_500Medium" }}>
          /
        </Text>
        <TextInput
          onChangeText={(text) => setYear(text)}
          placeholder="YYYY"
          keyboardType="numeric"
          maxLength={4}
          style={{ fontSize: 20, fontFamily: "Poppins_500Medium" }}
        />
      </View>
      {errorBirthday ? <Text>Error Date</Text> : <></>}
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-10"
      >
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => handleBirthday()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            Select your gender
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default AgeSelectionScreen;
