import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home";
import ScreenKRS from "../screen/KRS";
import ScreenUKT from "../screen/UKT";
import ScreenSKS from "../screen/SKS";
import Class from "../screen/Class";
import StudentsClass from "../screen/StudentsClass";

const Stack = createStackNavigator();

export default function StackHomeNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda-Stack"
          component={HomeScreen}
        />
        <Stack.Screen name="KRS" component={ScreenKRS} />
        <Stack.Screen name="UKT" component={ScreenUKT} />
        <Stack.Screen name="SKS" component={ScreenSKS} />
        <Stack.Screen name="Kelas" component={Class} />
        <Stack.Screen name="Mahasiswa" component={StudentsClass} />
      </Stack.Navigator>
    </>
  );
}
