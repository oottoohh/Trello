import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";
import { useRealm, useQuery, useUser } from "@realm/react";
import { Task } from "../models/Task";

export default function TaskList() {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const [newTask, setNewTask] = useState("");
  const user = useUser();
  console.log(user.id);

  const createTask = () => {
    realm.write(() => {
      realm.create(Task, { description: newTask, user_id: user.id });
    });
    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Todo"}</Text>
      {/* the list of tasks */}
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      {/* New Task Input */}
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor={"gray"}
        style={styles.input}
      />
      <Button title="Add Task" onPress={createTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 15,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
