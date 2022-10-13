import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import SwipeUserCard from '../components/SwipeUserCard'
import ButtonLike from '../components/ButtonLike'
import ButtonDecline from '../components/ButtonDecline'
import Tabbar from '../navigation/Tabbar'

const SwipeScreen = () => {
  return (
   <Layout>
    <SwipeUserCard />
    <View className="flex flex-row">
      <ButtonLike />
      <ButtonDecline />
    </View>
    <Tabbar />
   </Layout>
  )
}

export default SwipeScreen