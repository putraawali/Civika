import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import { useSelector } from "react-redux";
import ClassList from "../components/ClassList";

export default function ClassScreen({ navigation }) {
  const lectures = useSelector((state) => state.allLecture);
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Content style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        {lectures.map((lecture) => {
          return <ClassList {...{ navigation, lecture }} key={lecture.id} />;
        })}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
});
