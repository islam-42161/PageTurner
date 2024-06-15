import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider } from './context/AppContext';
import SignedInStack from './NavigationStack/SignedInStack';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        {/* check whether user signed in or not */}
        {/* if signed in go to signinstack else signoutstack */}
        <SignedInStack />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:STATUSBAR_HEIGHT
  },
});
