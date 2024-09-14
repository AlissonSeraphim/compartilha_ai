// app/_layout.tsx
import React, { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useAuthStore } from "@/stores/useAuthStore"; // Ajuste o caminho conforme necessário
import { Stack, useRouter, useSegments } from "expo-router";

const Layout = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const segments = useSegments(); // Pega os segmentos da rota atual

  console.log("segments atual =>", segments.join("/"));

  console.log("isAuthenticated =>", isAuthenticated);

  if (isAuthenticated == null) {
    // Renderiza um indicador de carregamento se o estado de autenticação ainda está sendo determinado

    // router.replace('/login'); // Use replace para redirecionar o usuário para login sem histórico
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const mainRouteAuth = '(auth)';

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(`/${mainRouteAuth}/home`);
    } else {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <Stack
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name={`${mainRouteAuth}/home`} />
    </Stack>
  );
};

export default Layout;
