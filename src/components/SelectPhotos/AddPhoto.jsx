import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const AddPhoto = () => {
  return (
    <TouchableOpacity className="h-16 w-16 mb-16 items-center justify-center rounded-full bg-white">
       <Ionicons name='add-outline' size={50} style={{paddingLeft: 3}} /> 
    </TouchableOpacity>
  )
}

export default AddPhoto