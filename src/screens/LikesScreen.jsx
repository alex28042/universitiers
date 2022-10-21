import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import LikesUserCard from '../components/LikesUserCard'
import Tabbar from '../navigation/Tabbar'

const LikesScreen = () => {
  return (
    <Layout>
        <Text className="mb-20 text-2xl" style={{fontFamily: 'Poppins_700Bold'}}>People who likes you!</Text>
        <View className="flex flex-row items-center mt-3">
          <LikesUserCard />
          <LikesUserCard />
          <LikesUserCard />
        </View>
        <Tabbar focus="Likes" />
    </Layout>
  )
}

export default LikesScreen