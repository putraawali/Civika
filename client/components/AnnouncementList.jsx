import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { Card, CardItem, Body, Icon, Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAnnouncementById,
  fetchAnnouncementTeacher,
} from "../store/action";

const { width, height } = Dimensions.get("window");
export default function AnnouncementList(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access_token);

  const showSuccessDelete = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  return (
    <>
      <Card style={styles.card}>
        <CardItem header style={styles.cardHeader}>
          <View style={{ flex: 2 }}>
            <Text style={{ fontWeight: "bold" }}>
              {props.announcement.title}
            </Text>
            <Text>{props.announcement.teacher}</Text>

            <Text style={{ fontSize: 13, marginTop: 15, marginBottom: -10 }}>
              Dibuat: {props.announcement.timeStamp}
            </Text>
          </View>
          {props.dataUser.role === "teacher" ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(deleteAnnouncementById(props.announcement.id, token))
                  .then((response) => response.json())
                  .then(() => {
                    showSuccessDelete(
                      `${props.announcement.title} berhasil dihapus`
                    );
                    dispatch(fetchAnnouncementTeacher(token));
                  });
              }}
            >
              <Icon name="close" type="AntDesign" style={{ fontSize: 18 }} />
            </TouchableOpacity>
          ) : null}
        </CardItem>
        <CardItem style={styles.cardMessage}>
          <Body>
            <Text style={{ color: "#fff", fontSize: 15.3 }}>
              {props.announcement.message}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
  cardHeader: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: "#dbe2ef",
    flexDirection: "row",
  },
  cardMessage: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: "#3f72af",
  },
  button: {
    width: 15,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    height: 15,
  },
});
