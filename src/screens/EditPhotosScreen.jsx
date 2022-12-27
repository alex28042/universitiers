import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardPhoto from "../components/CardPhoto";
import { currentUser } from "../data/User";
import * as ImagePicker from "expo-image-picker";
import { db, st } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import CardPhotoEdit from "../components/EditPhotos/CardPhotoEdit";
import { FlatList } from "react-native-gesture-handler";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const EditPhotosScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState(currentUser.photosURL);
  const [newPhotosAdded, setNewPhotosAdded] = useState([]);
  const [photoAddIndex, setPhotoAddIndex] = useState(
    currentUser.photosURL.length
  );

  const addPhotos = () => {
    let newPhoto = [...currentUser.photosURL];
    setCurrentPhotos(newPhoto);
  };

  const deletePhotoFromPhotosURL = (item) => {
    let newPhotos = [...currentUser.photosURL];

    const index = currentUser.photosURL.indexOf(item);
    newPhotos.splice(index, 1);

    currentUser.photosURL = newPhotos;
    setCurrentPhotos(newPhotos);
  };

  const pickImage = async () => {
    if (currentUser.photosURL.length < 6) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setLoading(true);
        newPhotosAdded.push(result.uri);
        setPhotoAddIndex(photoAddIndex + 1);
        uploadPhoto(result.uri);
        setTimeout(() => {
          addPhotos();
          setLoading(false);
        }, 1200);
      }
    }
  };

  const uploadPhoto = async (photo) => {
    const response = await fetch(photo);
    const blob = await response.blob();
    const filename = photo.substring(photo.lastIndexOf("/") + 1);
    await st().ref().child(filename).put(blob);

    const url = await st().ref(filename).getDownloadURL();
    currentUser.photosURL.push(url);
  };

  return currentUser.id == "" ? (
    <LoadingScreen />
  ) : (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => {
          db()
            .doc("users/" + currentUser.id)
            .get()
            .then((d) => {
              currentUser.photosURL = d.data().photosURL;
            })
            .then(() => navigation.goBack());
        }}
      />
      <View className="w-full items-start ml-32">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Edit
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          your photos
        </Text>
      </View>
      <View className="mt-10 w-full h-2/4 items-center">
        <FlatList
          data={currentPhotos}
          keyExtractor={(item, i) => i}
          renderItem={({ item }) => (
            <View className="h-36 w-24 rounded-md mr-4 mt-2">
              <Image
                className="h-full w-full rounded-md"
                source={{ uri: item }}
              />
              <TouchableOpacity
                onPress={() => deletePhotoFromPhotosURL(item)}
                className="absolute items-center justify-center bg-white top-1 right-1 h-6 w-6 rounded-full"
              >
                <Ionicons name="close" color={"red"} size={20} />
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
        />
      </View>
      <View className="mb-24">
        {loading ? (
          <>
            <ActivityIndicator size={30} color="white" />
          </>
        ) : (
          <></>
        )}
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
            db()
              .doc("users/" + currentUser.id)
              .update({
                photosURL: currentUser.photosURL,
              })
              .then(() => navigation.navigate("ProfileScreen"));
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>
            {"Save Photos"}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default EditPhotosScreen;
