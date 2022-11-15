import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config";
import { url } from "../data/User";

const SwipeUserCard = ({ id, name, age, uni, bio, user }) => {
  const navigation = useNavigation();
  const [photoUrlIndex, setPhotoUrlIndex] = useState(0);

  const getAge = (birthday) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <TailwindProvider>
      <View className="h-3/5 w-3/4 rounded-lg bg-white items-center">
        <View className="flex flex-row h-full w-full">
          <View className="w-full top-1 items-center z-50 absolute">
            <View className="flex flex-row">
              {user.photosURL.map((e, i) => (
                <View
                  key={i}
                  style={{
                    backgroundColor: photoUrlIndex == i ? "black" : "grey",
                  }}
                  className="h-1 bg-white ml-1 rounded-full z-50 w-10"
                ></View>
              ))}
            </View>
          </View>
          <TouchableOpacity
            className="w-1/2 h-3/4 z-50"
            onPress={() =>
              photoUrlIndex - 1 < 0
                ? setPhotoUrlIndex(photoUrlIndex)
                : setPhotoUrlIndex(photoUrlIndex - 1)
            }
          ></TouchableOpacity>
          <TouchableOpacity
            className="w-1/2 z-50 h-3/4"
            onPress={() =>
              photoUrlIndex + 1 > user.photosURL.length - 1
                ? setPhotoUrlIndex(photoUrlIndex)
                : setPhotoUrlIndex(photoUrlIndex + 1)
            }
          ></TouchableOpacity>
        </View>
        <Image
          className="w-full absolute h-full rounded-lg"
          source={{ uri: user.photosURL[photoUrlIndex] }}
        ></Image>
        <View className="bottom-0 absolute self-start w-full justify-between flex flex-row">
          <View className="flex flex-col ml-8 ">
            <Text style={{ fontFamily: "Poppins_700Bold" }}>
              {name},{getAge(new Date(age[2], age[1], age[0]))}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                marginBottom: bio ? 0 : 10,
              }}
            >
              {uni}
            </Text>
            {bio ? (
              <Text
                style={{ fontFamily: "Poppins_500Medium", marginBottom: 10, marginRight: 20 }}
              >
                {bio}
              </Text>
            ) : (
              <></>
            )}
          </View>
          <Ionicons
            name="information-circle-outline"
            onPress={() =>
              navigation.navigate("PreviewProfileScreen", {
                user: user,
              })
            }
            size={30}
            style={{ position: 'absolute', right: 20}}
          />
        </View>
      </View>
    </TailwindProvider>
  );
};

export default SwipeUserCard;
