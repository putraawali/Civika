import React from "react";
import { Button, Text } from "native-base";
import { View, StyleSheet } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function TeacherMenu({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          large
          Icon
          style={styles.button}
          onPress={() => navigation.navigate("Kelas")}
        >
          <Ionicon name="list" size={30} color="#dbe2ef" />
          <Text style={{ alignSelf: "center" }}>Kelas</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#112d4e",
    alignSelf: "center",
    width: 250,
    justifyContent: "center",
    borderRadius: 10,
  },
});
