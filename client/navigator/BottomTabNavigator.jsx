import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screen/Profile";
import StackHomeNavigation from "./StackHomeNavigation";
import AnnouncementStackNavigator from "./AnnouncementStackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Beranda") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Pengumuman") {
            iconName = focused ? "megaphone" : "megaphone-outline";
          }
          return <Ionicon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#f9f7f7",
        inactiveTintColor: "#dbe2ef",
        activeBackgroundColor: "#112d4e",
        inactiveBackgroundColor: "#112d4e",
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Beranda" component={StackHomeNavigation} />
      <Tab.Screen name="Pengumuman" component={AnnouncementStackNavigator} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
