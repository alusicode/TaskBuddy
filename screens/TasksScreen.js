import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import {
  Personal,
  Meeting,
  Shopping,
  Study,
  Party,
  Work,
} from "../components/icons";

export default function TasksScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <ScrollView showsVerticalScrollIndicator="false">
          <View style={styles.contentBox}>
            <View style={styles.card}>
              <Personal />
            </View>
            <View style={styles.card}>
              <Meeting />
            </View>
            <View style={styles.card}>
              <Shopping />
            </View>
            <View style={styles.card}>
              <Work />
            </View>
            <View style={styles.card}>
              <Study />
            </View>
            <View style={styles.card}>
              <Party />
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
    backgroundColor: "#fff",
  },
  contentBox: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    color: "#8B87B3",
    fontWeight: "500",
    fontSize: 20,
  },
  card: {
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
});
