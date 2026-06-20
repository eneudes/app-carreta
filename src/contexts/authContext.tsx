import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AUTH_STORAGE_KEY = "@app-carreta:auth-state";

export const AuthContext = createContext<AuthState>({} as AuthState);

export default function AuthProvider({ children }: PropsWithChildren) {
  async function storageState(newState: { isLoggedIn: Boolean }) {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.log("ERROR_SET_STORAGE_AUTH :", Error);
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);

  function signIn() {
    setIsLoggedIn(true);
    storageState({ isLoggedIn: true });
    router.replace("/");
  }
  function signOut() {
    setIsLoggedIn(false);
    storageState({ isLoggedIn: false });
    router.replace("/signIn");
  }

  useEffect(() => {
    async function loadStorageState() {
      try {
        const storedState = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        const state = storedState ? JSON.parse(storedState) : null;
        console.log("STORAGE => ", state);
        setIsLoggedIn(state?.isLoggedIn ?? false);
      } catch (error) {
        console.log("ERROR_GET_STORAGE_AUTH", Error);
        setIsLoggedIn(false);
      } finally {
        setIsReady(true);
      }
    }
    loadStorageState();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}
