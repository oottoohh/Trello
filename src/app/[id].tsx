import { View, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useObject, useRealm } from "@realm/react";
import { Task } from "../models/Task";
import { BSON } from "realm";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [updatedDescription, setUpdateDescription] = useState(
    task?.description
  );
  const realm = useRealm();
  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>{"Data Not Found"}</Text>;
  }
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <TextInput
        style={{ color: "white", fontSize: 20 }}
        value={updatedDescription}
        onEndEditing={updateDescription}
        onChangeText={setUpdateDescription}
      />
    </View>
  );
};

export default TaskDetails;
