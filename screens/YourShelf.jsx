import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../components/MainContainer'

const YourShelf = ({route,navigation}) => {
  return (
    <MainContainer title={"Your Shelf"} navigation={navigation} route={route}>
      <Text>YourShelf</Text>
    </MainContainer>
  )
}

export default YourShelf

const styles = StyleSheet.create({})