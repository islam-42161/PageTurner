import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import BottomTabNavigation from './BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    {/* <View style={styles.container}> */}
      <StatusBar style="auto" />
      <BottomTabNavigation/>
    {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:STATUSBAR_HEIGHT
  },
});
