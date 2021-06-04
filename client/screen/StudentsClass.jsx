import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import { Container, H1, Content, Card, CardItem } from "native-base";

export default function StudentsClassScreen({ route }) {
  const { students } = route.params;
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
      }}
    >
      <H1 style={{ margin: 5 }}> Daftar Mahasiswa </H1>
      <Content style={{ margin: 10 }}>
        <View>
          <Card style={{ flexDirection: "row" }}>
            <CardItem style={{ backgroundColor: "#3f72af" }}>
              <Text
                style={{
                  paddingLeft: 0,
                  paddingHorizontal: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                No
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "#3f72af" }}>
              <Text
                style={{
                  paddingLeft: 15,
                  paddingHorizontal: 100,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Nama
              </Text>
            </CardItem>
          </Card>
          {students?.map((student, i) => {
            return (
              <Card key={i} style={{ flexDirection: "row" }}>
                <CardItem style={{ flex: 1, backgroundColor: "#dbe2ef" }}>
                  <Text
                    style={{
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                      fontSize: 18,
                      marginLeft: 0,
                    }}
                  >
                    {i + 1}
                  </Text>
                </CardItem>
                <CardItem style={{ flex: 4, backgroundColor: "#dbe2ef" }}>
                  <Text
                    style={{
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                      fontSize: 18,
                    }}
                  >
                    {student.fullName}
                  </Text>
                </CardItem>
              </Card>
            );
          })}
        </View>
      </Content>
    </Container>
  );
}
