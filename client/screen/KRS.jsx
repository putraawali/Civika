import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, ToastAndroid } from "react-native";
import { Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import CardKRS from "../components/CardKRS";
import { addKRS, fetchKRS, fetchLecture } from "../store/action";

export default function ScreenKRS({ navigation }) {
  const dispatch = useDispatch();
  const [inputKRS, setInputKRS] = useState([]);
  const dataUser = useSelector((state) => state.dataUser);
  const classes = useSelector((state) => state.remainingClass);
  const token = useSelector((state) => state.access_token);

  const showSuccessAddKRS = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  function submitKRS() {
    dispatch(addKRS(inputKRS, token))
      .then((res) => res.json())
      .then(async (res) => {
        if (res.message === "Batas kuota kelas telah mencapai maksimum") {
          showSuccessAddKRS(res.message);
        } else {
          await dispatch(fetchLecture(token, dataUser));
          if (res.fullClass) {
            showSuccessAddKRS(`${res.message}${res.fullClass.join(", ")}`);
          } else {
            showSuccessAddKRS(res.message);
          }
          navigation.navigate("Beranda-Stack");
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    dispatch(fetchKRS(token));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, marginHorizontal: 9 }}>
        {classes.map((lecture) => (
          <CardKRS
            lecture={lecture}
            key={lecture.id}
            setInputKRS={setInputKRS}
          />
        ))}
        <Button
          primary
          style={{ alignSelf: "center", marginVertical: 13, borderRadius: 10 }}
          onPress={() => submitKRS()}
        >
          <Text style={styles.button}>Ambil KRS</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    fontWeight: "200",
    color: "#dbe2ef",
    marginHorizontal: 10,
  },
});
