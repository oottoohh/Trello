import { View, Text, Button } from "react-native";
import { useAuth } from "@realm/react";

const Login = () => {
  const { logInWithAnonymous } = useAuth();
  const guestLogin = () => {
    logInWithAnonymous();
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"Continue as guest"}</Text>
      <Button onPress={guestLogin} title="LoggedIn" />
    </View>
  );
};

export default Login;
