import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de login</Text>
      <Button title="Entrar" onPress={signIn} />
    </View>
  );
}
