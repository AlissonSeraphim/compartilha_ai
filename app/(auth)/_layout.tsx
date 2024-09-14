// app/_layout.tsx
import React, { useEffect } from "react";
import { Slot, Stack, useRouter, useSegments } from "expo-router";

const LayoutAuthRoutes = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Slot />
    </Stack>
  );
};

export default LayoutAuthRoutes;
