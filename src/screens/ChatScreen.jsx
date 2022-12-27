import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Matches from "../components/Matches";
import Chats from "../components/Chats";
import Tabbar from "../navigation/Tabbar";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { currentUser } from "../data/User";

const ChatScreen = () => {
  return currentUser.id == "" ? (
    <LoadingScreen />
  ) : (
    <Layout>
      <Matches />
      <Chats />
      <Tabbar focus="Chat" />
    </Layout>
  );
};

export default ChatScreen;
