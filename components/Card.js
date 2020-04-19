import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import { Personal, Meeting, Shopping, Study, Party, Work } from "./icons";

export default function Card() {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Personal />
      </View>
      <View>
        <Text style={styles.title}>Personal</Text>
      </View>
      <View>
        <Text style={styles.sub}>23 Tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    // marginBottom: 20,
    width: "47%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#FFEE9B",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    color: "#686868",
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    padding: 5,
    fontWeight: "500",
    color: "#A1A1A1",
  },
});
