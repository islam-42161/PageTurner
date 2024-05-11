import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../components/MainContainer'

const Settings = ({route,navigation}) => {
  return (
    <MainContainer title={"Settings"} navigation={navigation} route={route}>
      <Text>Settings</Text>
    </MainContainer>
  )
}

export default Settings

const styles = StyleSheet.create({})