import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:STATUSBAR_HEIGHT
  },
});
