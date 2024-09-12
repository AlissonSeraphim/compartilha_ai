// app/_publicRoutes.tsx
import React from 'react';
import { Stack } from 'expo-router';

const PublicRoutes = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="login" />
    <Stack.Screen name="signup" />
  </Stack>
);

export default PublicRoutes;