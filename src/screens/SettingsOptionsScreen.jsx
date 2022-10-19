import { View, Text } from 'react-native'
import React from 'react'
import Layout from "../components/Layout";
import SettingsScreens from '../components/SettingsScreens/SettingsScreens';

const SettingsOptionsScreen = ({route}) => {
  const {name} = route.params;
  console.log(name)
  return (
    <Layout>
      <Text className="top-32 absolute">{name}</Text>
      <SettingsScreens name={name}/>
    </Layout>
  )
}

export default SettingsOptionsScreen