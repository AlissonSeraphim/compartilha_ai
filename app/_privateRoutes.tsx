// app/_privateRoutes.tsx
import React from 'react';
import { Stack } from 'expo-router';

const PrivateRoutes = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="settings" />
  </Stack>
);

export default PrivateRoutes;