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
      <Text>Your Profile</Text>
      <ProfileDetails />
      <ProfilePhotos />
      <ProfileAboutYou />
      <Tabbar />
    </Layout>
  );
};

export default ProfileScreen;
