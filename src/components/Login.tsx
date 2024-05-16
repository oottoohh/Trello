import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@realm/react";

const Login = () => {
  const { logInWithAnonymous } = useAuth();
  const guestLogin = () => {
    logInWithAnonymous();
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={guestLogin}>{"Continue as guest"}</Text>
    </View>
  );
};

export default Login;
