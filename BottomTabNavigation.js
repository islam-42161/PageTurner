import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import BottomTab from './components/BottomTab';
import Search from './screens/Search';
import YourShelf from './screens/YourShelf';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props}/>} initialRouteName='home' screenOptions={{
        header:()=>null
    }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="yourshelf" component={YourShelf} />
      <Tab.Screen name="settings" component={Settings} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
