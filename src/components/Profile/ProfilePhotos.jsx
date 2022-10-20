import { View, Text } from 'react-native'
import React from 'react'
import CardPhoto from '../CardPhoto'

const ProfilePhotos = () => {
  return (
    <View>
      <Text  style={{fontFamily: 'Poppins_500Medium'}}>Your photos:</Text>
      <View className="flex flex-row">
        <CardPhoto />
        <CardPhoto />
      </View>
    </View>
  )
}

export default ProfilePhotos