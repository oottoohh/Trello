import { View, Text, FlatList } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTask] = useState([]);
  return (
    <View style={{ backgroundColor: "#101112", padding: 10, borderRadius: 5 }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 20,
          marginVertical: 10,
        }}
      >
        Todo
      </Text>
      {/* the list of tasks */}
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={tasks}
        renderItem={({ item }) => {
          <TaskListItem task={item} />;
        }}
      />
      <TaskListItem task={{ description: "First Task" }} />
      <TaskListItem task={{ description: "Second Task" }} />
      <TaskListItem task={{ description: "Third Task" }} />
    </View>
  );
}
