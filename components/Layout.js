import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout({ children }) {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: "rgb(70,121,219)" }]}
    >
      <LinearGradient
        colors={["rgba(29,85,191,1)", "rgba(100,161,232,1)"]}
        start={[0.4, 0.5]}
        end={[0.8, 0.8]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <View style={styles.header}>
        <Text>Welcome, Uche</Text>
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    width: "100%",
    height: 100,
    backfaceVisibility: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

// background: rgb(29,85,191);
// background: linear-gradient(69deg, rgba(29,85,191,1) 31%, rgba(100,161,232,1) 80%);
