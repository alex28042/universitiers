import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import ButtonCustom from '../components/ButtonCustom'

const UnivesitySelectScreen = () => {
  return (
    <Layout>
        <Text>Enter your University</Text>
        <ButtonCustom bgColor="white" text="University" />
        <ButtonCustom bgColor="white" text="How old are you? :)" />
    </Layout>
  )
}

export default UnivesitySelectScreen