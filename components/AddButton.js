import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { AddBtn } from "./icons";

export default function AddBTN(props) {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <AddBtn />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "yellow",
    backfaceVisibility: "visible",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    marginTop: -30,
    borderRadius: 30,
    backgroundColor: "#F857C3",
    ...Platform.select({
      ios: {
        shadowColor: "#F456C3",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
