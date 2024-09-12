// app/_layout.tsx
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useAuthStore } from '@/stores/useAuthStore'; // Ajuste o caminho conforme necessário
import PublicRoutes from './_publicRoutes';
import PrivateRoutes from './_privateRoutes';

const Layout = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated === null) {
    // Renderiza um indicador de carregamento se o estado de autenticação ainda está sendo determinado
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Layout;
