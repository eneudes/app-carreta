import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";

import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      await signIn();
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-6 justify-center">
        <Logo />

        <View className="bg-white p-6 rounded-3xl shadow-sm">
          <Text className="mb-2 font-medium">Usuário</Text>

          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu usuário"
          />

          <Text className="mt-4 mb-2 font-medium">Senha</Text>

          <Input
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <View className="mt-6">
            <Button title="Entrar" loading={loading} onPress={handleLogin} />
          </View>
        </View>

        <Text className="text-center mt-8 text-gray-400">Versão 1.0.0</Text>
      </View>
    </SafeAreaView>
  );
}
