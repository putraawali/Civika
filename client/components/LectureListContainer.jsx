import React from "react";
import { FlatList, Text } from "react-native";
import LectureCard from "./LectureCard";
export default function LectureListContainer({ data, user }) {
  let dataLecture = [];
  if (user.role === "student" && !data.message) {
    data.forEach((lecture) => dataLecture.push(lecture.Lecture));
  } else if (user.role === "teacher" && !data.message) {
    data.forEach((lecture) => dataLecture.push(lecture));
  }
  return (
    <>
      {!dataLecture.length ? (
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            marginVertical: 100,
          }}
        >
          Anda belum mengambil kelas
        </Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={dataLecture}
          keyExtractor={(data, i) => "key" + i}
          renderItem={({ item }) => {
            return <LectureCard item={item} />;
          }}
        />
      )}
    </>
  );
}
