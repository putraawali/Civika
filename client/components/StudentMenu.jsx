import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function StudentMenu({ navigation }) {
  function changeScreen(screen) {
    navigation.navigate(screen);
  }
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Button
          Icon
          large
          style={styles.iconButton}
          onPress={() => changeScreen("KRS")}
        >
          <Ionicon name="card" size={30} color="#dbe2ef" />
        </Button>
        <Text style={{ alignSelf: "center" }}>KRS</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          large
          Icon
          style={styles.iconButton}
          onPress={() => changeScreen("UKT")}
        >
          <Ionicon name="wallet" size={30} color="#dbe2ef" />
        </Button>
        <Text style={{ alignSelf: "center" }}>UKT</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          large
          Icon
          style={styles.iconButton}
          onPress={() => changeScreen("SKS")}
        >
          <Ionicon name="school" size={30} color="#dbe2ef" />
        </Button>
        <Text style={{ alignSelf: "center" }}>SKS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    alignSelf: "center",
    backgroundColor: "#112d4e",
    marginVertical: 15,
    width: 60,
    justifyContent: "center",
    borderRadius: 10,
  },
});
