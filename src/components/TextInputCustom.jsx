import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'

const TextInputCustom = (props) => {
  return (
    <TailwindProvider>
      <TextInput placeholder={props.placeholder} style={{width: "90%", height: 40}}/>
    </TailwindProvider>
  )
}

export default TextInputCustom