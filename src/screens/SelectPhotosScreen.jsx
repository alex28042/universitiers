import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import CardPhoto from "../components/CardPhoto";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../data/User";
import { UserController } from "../api/user";
import { auth, st } from "../../firebase-config";
import * as ImagePicker from "expo-image-picker";

const SelectPhotosScreen = () => {
  const userController = new UserController();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [errorOverNumOfPhotos, setErrorOverNumOfPhotos] = useState(false);
  const [photoAddIndex, setPhotoAddIndex] = useState(0);

  const createUser = () => {
    if (currentUser.email != "" && currentUser.password != "") {
      auth
        .createUserWithEmailAndPassword(currentUser.email, currentUser.password)
        .then(() => {
          uploadPhotos().then(() => {
            setTimeout(() => {
              console.log(currentUser.photosURL);
              userController.createUser(currentUser).then(() => {
                setLoading(true);
                userController.getUsers();
                setTimeout(() => {
                  navigation.navigate("LoadScreen");
                }, 100);
              });
            }, 1000);
          });
        })
        .catch(() => console.log("error"));
    }
  };

  const pickImage = async () => {
    if (photoAddIndex < 6) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        currentUser.photos.push(result.uri);
        setPhotoAddIndex(photoAddIndex + 1);
      }
    }
  };

  const uploadPhotos = async () => {
    currentUser.photos.map(async (photo) => {
      const response = await fetch(photo);
      const blob = await response.blob();
      const filename = photo.substring(photo.lastIndexOf("/") + 1);
      await st().ref().child(filename).put(blob);

      const url = await st().ref(filename).getDownloadURL();
      currentUser.photosURL.push(url);
    });
  };

  if (loading) {
    return (
      <Layout>
        <Image
          className="h-72 w-72"
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/universitiers-c8b7c.appspot.com/o/Universitiers.png?alt=media&token=11231677-30c5-4c56-8c10-dd0679350c2c",
          }}
        />
        <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
          Universitiers
        </Text>
        <Text className="mt-4 text-xl" style={{ fontFamily: "Poppins_500Medium" }}>Loading...</Text>
      </Layout>
    );
  }

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
          Select
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          your photos
        </Text>
      </View>
      <View className="mt-10 w-full h-2/4 items-center">
        <View className="flex flex-row">
          <CardPhoto photoURL={currentUser.photos[0]} />
          <CardPhoto photoURL={currentUser.photos[1]} />
          <CardPhoto photoURL={currentUser.photos[2]} />
        </View>
        <View className="flex flex-row mt-10">
          <CardPhoto photoURL={currentUser.photos[3]} />
          <CardPhoto photoURL={currentUser.photos[4]} />
          <CardPhoto photoURL={currentUser.photos[5]} />
        </View>
      </View>
      <View
        style={{ width: "80%" }}
        className="items-center bottom-0 absolute mb-4"
      >
        <TouchableOpacity
          onPress={() => pickImage()}
          className="h-16 w-16 mb-16 items-center justify-center rounded-full bg-white"
        >
          <Ionicons name="add-outline" size={50} style={{ paddingLeft: 3 }} />
        </TouchableOpacity>
      </View>
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => {
            setLoading(true);
            createUser();
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{"Enjoy :)"}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default SelectPhotosScreen;
