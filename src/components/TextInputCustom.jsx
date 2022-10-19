import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'

const TextInputCustom = (props) => {
  return (
    <TailwindProvider>
      <TextInput placeholder={props.placeholder} className="bg-white mb-3 rounded-full px-2" style={{width: "70%", height: 45, fontFamily: 'Poppins_500Medium'}}/>
    </TailwindProvider>
  )
}

export default TextInputCustom