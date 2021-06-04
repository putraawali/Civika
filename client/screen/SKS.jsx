import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function ScreenSKS() {
  const allLecture = useSelector((state) => state.allLecture);
  const studentData = useSelector((state) => state.dataUser);
  let totalSKS = 0;
  allLecture.forEach((lecture) => (totalSKS += +lecture.Lecture.credits));

  return (
    <View style={styles.container}>
      <Card style={styles.cardOutside}>
        <Card style={styles.cardInside}>
          <CardItem header style={styles.cardItem}>
            <Text style={styles.textTitle}>Nama</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              {studentData.fullName}
            </Text>
          </CardItem>
          <View style={styles.border} />
          <CardItem
            header
            style={{
              justifyContent: "space-around",
              backgroundColor: "#dbe2ef",
            }}
          >
            <Text
              style={{
                flex: 1,
                ...styles.textTitle,
                textAlign: "center",
              }}
            >
              Total SKS
            </Text>
            <Text
              style={{
                flex: 1,
                ...styles.textTitle,
                textAlign: "center",
              }}
            >
              SKS Kelulusan
            </Text>
          </CardItem>
          <CardItem
            style={{
              justifyContent: "space-around",
              backgroundColor: "#dbe2ef",
            }}
          >
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              {totalSKS}
            </Text>
            <Text style={{ fontSize: 30, textAlign: "center" }}>144</Text>
          </CardItem>
          <View style={styles.border} />
          <CardItem header style={styles.cardItem}>
            <Text style={styles.textTitle}>Index Prestasi Kumulatif</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={{ fontSize: 50, textAlign: "center" }}>
              {studentData.ipk}
            </Text>
          </CardItem>
        </Card>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    justifyContent: "center",
    backgroundColor: "#dbe2ef",
  },
  border: {
    borderBottomColor: "#3f72af",
    borderWidth: 1,
    marginHorizontal: 15,
  },
  textTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#3f72af",
  },
  cardOutside: {
    backgroundColor: "#112d4e",
    borderRadius: 15,
  },
  cardInside: {
    flex: 1,
    width: width - 25,
    backgroundColor: "#dbe2ef",
    paddingVertical: 15,
    borderRadius: 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f9f7f7",
  },
});
