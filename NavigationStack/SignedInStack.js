import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import BottomTabNavigation from '../BottomTabNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import BookDetails from '../screens/BookDetails'

const Stack = createStackNavigator()
function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
const SignedInStack = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='bottomTab' screenOptions={{ header: () => null }}>
        <Stack.Group>
          <Stack.Screen name='bottomTab' component={BottomTabNavigation} />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='book_details' component={BookDetails} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack