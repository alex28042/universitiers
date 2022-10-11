import { View, Text } from 'react-native'
import React from 'react'
import Layout from "../components/Layout";
import SettingsScreens from '../components/SettingsScreens/SettingsScreens';

const SettingsOptionsScreen = (props) => {
  return (
    <Layout>
      <Text>{props.name}</Text>
      <SettingsScreens name={props.name}/>
    </Layout>
  )
}

export default SettingsOptionsScreen