import { View, Text, Image } from 'react-native'
import React from 'react'
import Layout from '../Layout'
import Logo from "../../../assets/Universitiers.png"

const LoadingScreen = () => {
  return (
    <Layout>
        <Image
        className="h-72 w-72"
        source={Logo}
      />
      <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl">
        Universitiers
      </Text>
    </Layout>
  )
}

export default LoadingScreen