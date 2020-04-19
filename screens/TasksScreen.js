import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function TasksScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <ScrollView showsVerticalScrollIndicator="false">
          <View style={styles.contentBox}>
            <Card />
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
});
