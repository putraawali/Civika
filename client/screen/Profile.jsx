import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  ToastAndroid,
} from "react-native";
import {
  Container,
  Card,
  CardItem,
  Body,
  H1,
  Content,
  Thumbnail,
  Button,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import {
  editUser,
  fetchUser,
  logoutUser,
  SET_USER_LOADING,
} from "../store/action";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataUser);
  const token = useSelector((state) => state.access_token);
  const [input, setInput] = useState(dataProfile);

  const showSuccessAction = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  function submitEdit() {
    dispatch(editUser(input, token))
      .then((res) => res.json())
      .then((res) => {
        showSuccessAction(res.message);
        dispatch(fetchUser(dataProfile.id, token));
        navigation.navigate("Beranda-Stack");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, payload: false });
      });
  }

  function logout() {
    dispatch(logoutUser(token))
      .then((response) => response.json())
      .then(() => {
        showSuccessAction("Sampai jumpa lagi");
        navigation.navigate("Login");
      });
  }

  return (
    <Container style={styles.container}>
      <H1 style={{ marginTop: 5 }}>
        Profil {input.role === "student" ? "Mahasiswa" : "Dosen"}
      </H1>
      <Content showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
        <Card style={styles.card}>
          <CardItem header style={styles.thumbnail}>
            <Thumbnail
              style={{ height: 100, width: 100 }}
              source={{
                uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80",
              }}
            />
          </CardItem>
          <CardItem
            style={{
              backgroundColor: "#dbe2ef",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Body style={styles.dataProfile}>
              <Text
                style={{
                  ...styles.text,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Nama:
              </Text>
              <Text style={styles.text}>{input.fullName}</Text>
            </Body>
            <Body style={styles.dataProfile}>
              <Text
                style={{
                  ...styles.text,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Email:
              </Text>
              <Text style={styles.text}>{input.email}</Text>
            </Body>
            <Body style={styles.dataProfile}>
              <Text
                style={{
                  ...styles.text,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Status:
              </Text>
              <Text style={styles.text}>
                {input.role === "student" ? "Mahasiswa" : "Dosen"}
              </Text>
            </Body>
            <Body style={styles.dataProfile}>
              <Text
                style={{
                  ...styles.text,
                  textDecorationLine: "underline",
                  marginBottom: 3,
                  fontWeight: "bold",
                }}
              >
                Alamat:
              </Text>
              <TextInput
                multiline={true}
                onChangeText={(newItem) =>
                  setInput({ ...input, address: newItem })
                }
                style={styles.input}
                value={input.address}
              />
            </Body>
            <Body style={styles.dataProfile}>
              <Text
                style={{
                  ...styles.text,
                  textDecorationLine: "underline",
                  marginBottom: 3,
                  fontWeight: "bold",
                }}
              >
                Nomor Telepon:{" "}
              </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(newItem) =>
                  setInput({ ...input, phoneNumber: newItem })
                }
                style={styles.input}
                value={input.phoneNumber}
              />
            </Body>
          </CardItem>
          <CardItem
            style={{
              borderBottomEndRadius: 10,
              borderBottomStartRadius: 10,
              backgroundColor: "#dbe2ef",
              justifyContent: "center",
            }}
          >
            <Button onPress={submitEdit} style={styles.button}>
              <Text style={{ color: "white" }}>Edit</Text>
            </Button>
          </CardItem>
        </Card>
        <Button style={styles.buttonLogout} onPress={logout}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Keluar</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 1,
    padding: 5,
    minHeight: 40,
    width: "100%",
    borderColor: "#3f72af",
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : null,
  },
  thumbnail: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: "#dbe2ef",
    justifyContent: "center",
    marginBottom: -15,
  },
  text: { fontSize: 15, marginTop: 4 },
  button: {
    backgroundColor: "#3f72af",
    width: 100,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonLogout: {
    width: 200,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#B22222",
    marginVertical: 15,
  },
  dataProfile: {
    marginVertical: 5,
    marginHorizontal: 15,
    alignItems: "center",
  },
});
