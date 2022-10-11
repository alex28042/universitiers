import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import CardProfile from '../components/PreviewProfile/CardProfile'

const PreviewProfileScreen = () => {
  return (
    <Layout>
        <Text>@Name</Text>
        <CardProfile />
    </Layout>
  )
}

export default PreviewProfileScreen