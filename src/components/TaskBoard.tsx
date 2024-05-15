import { View, StyleSheet, SafeAreaView } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

export default function TaskBoard() {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#F9D423", "#FFFFFF"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  );
}
