import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getClassStudents } from "../store/action";

export default function ClassList({ navigation, lecture }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access_token);
  const [listStudents, setListStudents] = useState([]);

  useEffect(() => {
    dispatch(getClassStudents(lecture.id, token))
      .then((r) => r.json())
      .then((result) => {
        if (result.length) {
          const students = result.map((el) =>
            el.User.role === "student" ? el.User : null
          );
          setListStudents(students);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Mahasiswa", { students: listStudents })
      }
    >
      <Card style={styles.card}>
        <CardItem
          header
          style={{
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            backgroundColor: "#dbe2ef",
          }}
        >
          <Text>{lecture.name}</Text>
        </CardItem>
        <CardItem
          style={{
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            backgroundColor: "#3f72af",
          }}
        >
          <Body>
            <Text style={{ color: "white" }}>Jadwal: {lecture.schedule}</Text>
            <Text style={{ color: "white" }}>Kuota: {lecture.quota}</Text>
            <Text style={{ color: "white" }}>SKS: {lecture.credits}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
});
