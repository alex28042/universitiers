import { View, Text } from 'react-native'
import React from 'react'
import Layout from "../components/Layout";
import Matches from '../components/Matches';
import Chats from '../components/Chats';
import Tabbar from '../navigation/Tabbar'


const ChatScreen = () => {
  return (
    <Layout>
      <Matches />
      <Chats />
      <Tabbar focus="Chat"/>
    </Layout>
  )
}

export default ChatScreen