import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import *as Images from '../themes/ImageConstants';
import MediaScreen from '../screens/MediaScreen';
import HomeScreen from '../screens/HomeScreen';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#2777C4',
        tabBarInactiveTintColor: '#061E14',
        tabBarStyle: {
          height: 65,
          paddingVertical: 5,
          backgroundColor: '#FFFFFF',
          width: '100%',
          paddingBottom: 5,
          justifyContent: 'center',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 28,
          borderColor: '#f2f2f2',
          borderWidth: 1,
          borderStyle: 'solid',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },

        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? Images.Home_Focused : Images.Home_Unfocused} style={styles.icon_style} />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? Images.Facilities_Focused : Images.Facilities_Unfocused} style={styles.icon_style} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;

const styles = StyleSheet.create({
  icon_style: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
});
