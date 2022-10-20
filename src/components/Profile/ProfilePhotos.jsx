import { View, Text } from 'react-native'
import React from 'react'
import CardPhoto from '../CardPhoto'

const ProfilePhotos = () => {
  return (
    <View className="w-full ml-20">
      <Text style={{fontFamily: 'Poppins_700Bold'}}>Your photos:</Text>
      <View className="flex flex-row">
        <CardPhoto />
        <CardPhoto />
      </View>
    </View>
  )
}

export default ProfilePhotos