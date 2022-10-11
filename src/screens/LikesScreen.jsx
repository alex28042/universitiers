import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import LikesUserCard from '../components/LikesUserCard'
import Tabbar from '../navigation/Tabbar'

const LikesScreen = () => {
  return (
    <Layout>
        <Text>People who likes you!</Text>
        <View className="grid grid-cols-2">
            <LikesUserCard />
            <LikesUserCard />
        </View>
        <Tabbar />
    </Layout>
  )
}

export default LikesScreen