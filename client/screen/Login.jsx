import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Platform,
  StatusBar,
  ToastAndroid,
} from "react-native";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from "native-base";
import { useDispatch } from "react-redux";
import {
  login,
  SET_TOKEN_LOADING,
  SET_TOKEN_ERR,
  setToken,
  fetchLecture,
  setUser,
} from "../store/action";
import usePushToken from "../hooks/usePushToken";

export default function Login({ navigation }) {
  const { expoPushToken } = usePushToken();
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: "putra.awali@hacktivmail.com",
    password: "password234",
    // email: "",
    // password: "",

    // email: "andi.utomo@hacktivmail.com",
    // password: "password678",
    pushToken: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const showSuccessLoginToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  useEffect(() => {
    if (expoPushToken) {
      setDataLogin((state) => ({ ...state, pushToken: expoPushToken }));
    }
  }, [expoPushToken]);

  function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) return false;
    return true;
  }

  function submitLogin() {
    const isEmail = checkEmail(dataLogin.email);
    if (isEmail && dataLogin.password) {
      dispatch(login(dataLogin))
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            showSuccessLoginToast(res.message);
          } else {
            showSuccessLoginToast("Berhasil masuk");
            dispatch(setToken(res.access_token));
            dispatch(fetchLecture(res.access_token, res.foundUser));
            dispatch(setUser(res.foundUser));
            navigation.navigate("BottomTabHome");
          }
        })
        .catch((err) => {
          dispatch({ type: SET_TOKEN_ERR, payload: err });
        })
        .finally(() => {
          dispatch({ type: SET_TOKEN_LOADING, payload: false });
        });
    } else if (isEmail && !dataLogin.password) {
      setValidation((state) => ({ ...state, password: true }));
    } else if (!isEmail && dataLogin.password) {
      setValidation((state) => ({ ...state, email: true }));
    } else {
      setValidation((state) => ({ ...state, email: true, password: true }));
    }
  }

  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
        backgroundColor: "#f9f7f7",
      }}
    >
      <Container style={{ backgroundColor: "#f9f7f7", flex: 1 }}>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Image
            source={require("../assets/CIVIKA.png")}
            style={{
              height: 400,
              width: 400,
              alignSelf: "center",
              marginTop: -50,
            }}
          />
          <Form style={{ marginTop: -60 }}>
            <Item
              floatingLabel
              style={{ marginLeft: 60, marginRight: 60, alignItems: "center" }}
            >
              <Label style={{ alignSelf: "center", fontSize: 14 }}>Email</Label>
              <Input
                value={dataLogin.email}
                onChangeText={(inputEmail) =>
                  setDataLogin((state) => ({
                    ...state,
                    email: inputEmail,
                  }))
                }
                style={{ textAlign: "center" }}
              />
            </Item>
            {validation.email ? (
              <Text
                style={{
                  color: "red",
                  alignSelf: "center",
                  fontSize: 11,
                  marginTop: 3,
                }}
              >
                Masukan email dengan format email!
              </Text>
            ) : null}
            <Item
              floatingLabel
              last
              style={{ marginLeft: 60, marginRight: 60 }}
            >
              <Label style={{ alignSelf: "center", fontSize: 14 }}>
                Kata sandi
              </Label>
              <Input
                value={dataLogin.password}
                onChangeText={(inputPassword) =>
                  setDataLogin((state) => ({
                    ...state,
                    password: inputPassword,
                  }))
                }
                secureTextEntry={true}
                style={{ textAlign: "center" }}
              />
            </Item>
            {validation.email ? (
              <Text
                style={{
                  color: "red",
                  alignSelf: "center",
                  fontSize: 11,
                  marginTop: 3,
                }}
              >
                Password tidak boleh kosong!
              </Text>
            ) : null}
            <Button
              rounded
              style={{
                alignSelf: "center",
                marginTop: 50,
                backgroundColor: "#112d4e",
              }}
              onPress={submitLogin}
            >
              <Text>Masuk</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    </ScrollView>
  );
}
