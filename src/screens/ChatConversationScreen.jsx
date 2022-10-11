import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import SendMessage from "../components/SendMessage";
import HeaderConversation from "../components/HeaderConversation";
import Conversation from "../components/Conversation";

const ChatConversationScreen = () => {
  return (
    <Layout>
      <HeaderConversation />
      <Conversation />
      <SendMessage />
    </Layout>
  );
};

export default ChatConversationScreen;
