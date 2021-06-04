import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActionSheet from "react-native-actions-sheet";

export default function ModalPaymentUKT(props) {
  const { dataPayment, actionSheetRef, selectPaymentMethod } = props;
  return (
    <ActionSheet ref={actionSheetRef}>
      {dataPayment.map((data) => {
        const value = data.name;
        return (
          <TouchableOpacity
            key={data.value}
            onPress={({}) => selectPaymentMethod(value)}
          >
            <View style={styles.picker}>
              <Text style={styles.text}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  picker: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    marginHorizontal: 10,
  },
  text: { fontSize: 15, textAlign: "center", paddingVertical: 3 },
});
