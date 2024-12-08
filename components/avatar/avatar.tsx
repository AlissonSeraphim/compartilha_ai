import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";

const AvatarWithInitials = ({
  initials = "",
  width = 60,
  height = 60,
  fontSize = 25,
  backgroundColor = "white"
}: {
  initials: string;
  width?: number;
  height?: number;
  fontSize?: number;
  backgroundColor?: string;
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: width,
          height: height,
          borderRadius: 50,
          backgroundColor: backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: fontSize,
            color: "#212121",
            letterSpacing: 3,
            fontWeight: "bold",
          }}
        >
          {initials}
        </Text>
      </View>
    </View>
  );
};

export default AvatarWithInitials;
