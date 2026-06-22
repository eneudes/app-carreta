import { Stack } from "expo-router";
import "../../global.css";
import AuthProvider from "../contexts/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="signIn"
          options={{ title: "Login", animation: "none" }}
        />
      </Stack>
    </AuthProvider>
  );
}
