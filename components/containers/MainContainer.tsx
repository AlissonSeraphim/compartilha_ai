import React, { ReactNode, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        padding: 4,
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
