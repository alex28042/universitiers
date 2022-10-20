import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ProfileDetails from "../components/Profile/ProfileDetails";
import ProfilePhotos from "../components/Profile/ProfilePhotos";
import ProfileAboutYou from "../components/Profile/ProfileAboutYou";
import Tabbar from "../navigation/Tabbar";

const ProfileScreen = () => {
  return (
    <Layout>
      <Text className="text-2xl mb-10" style={{fontFamily: 'Poppins_700Bold'}}>Your Profile</Text>
      <ProfileDetails />
      <ProfilePhotos />
      <ProfileAboutYou />
      <Tabbar focus="Profile" />
    </Layout>
  );
};

export default ProfileScreen;
