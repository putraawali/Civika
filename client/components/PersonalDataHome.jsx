import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import LectureListContainer from "./LectureListContainer";
import { useSelector } from "react-redux";

export default function PersonalDataHome({ data }) {
  const user = useSelector((state) => state.dataUser);
  const [time, setTime] = useState("");
  useEffect(() => {
    let hours = new Date().getHours();
    hours > 6 && hours <= 11
      ? setTime("Pagi")
      : hours > 11 && hours <= 15
      ? setTime("Siang")
      : hours > 15 && hours <= 18
      ? setTime("Sore")
      : hours > 18 || hours <= 6
      ? setTime("Malam")
      : "";
  }, []);

  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: user.role === "student" ? 1.5 : 2 }}>
          <Text style={styles.text}>Selamat {time}</Text>
          <Text
            style={{
              ...styles.text,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {user.fullName}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View style={styles.roleThumbailContainer}>
            <Text style={styles.role}>
              {user.role === "student" ? "Mahasiswa" : "Dosen"}
            </Text>
            <View style={styles.thumbnail}>
              <Ionicon name="person" size={25} color="#3f72af" />
            </View>
          </View>
        </View>
      </View>
      <Text style={{ ...styles.text, marginTop: 20, fontSize: 15 }}>
        Jadwal kuliah hari ini
      </Text>
      {/* Flat list untuk jadwal kuliah */}
      <LectureListContainer data={data} user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#112d4e",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: "#f9f7f7",
  },
  thumbnail: {
    backgroundColor: "#f9f7f7",
    borderRadius: 50,
  },
  role: {
    marginHorizontal: 5,
    paddingTop: 4,
    fontWeight: "bold",
  },
  roleThumbailContainer: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#f9f7f7",
    paddingHorizontal: 5,
  },
});
