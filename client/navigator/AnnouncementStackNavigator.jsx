import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddAnnouncement from "../screen/AddAnnouncement";
import AnnouncementScreen from "../screen/Announcement";

const Stack = createStackNavigator();

export default function AnnouncementStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Announcement-Stack"
        component={AnnouncementScreen}
      />
      <Stack.Screen name="Pengumuman" component={AddAnnouncement} />
    </Stack.Navigator>
  );
}
