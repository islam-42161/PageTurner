import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../const/theme';
import { Feather } from '@expo/vector-icons';

export default function BottomTab({ state, descriptors, navigation }) {
    const screen_icons = ['home','','','']
  return (
    <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-evenly',gap:SPACING.lg,padding:SPACING.lg,backgroundColor:COLORS.light1}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ backgroundColor: isFocused ? COLORS.accent1 : COLORS.accent2 }}
          >
            <Feather name="home" size={24} color={isFocused ? COLORS.accent2 : COLORS.accent1} />
            {/* <Text style={{ color: isFocused ? COLORS.accent2 : COLORS.accent1 }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

