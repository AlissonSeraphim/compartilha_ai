import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";

const AvatarWithInitials = ({ initials = "" }: { initials: string }) => {
  return (
    <View style={{ alignItems: "center"}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: "#E0E0E0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, color: "#212121", letterSpacing: 2  }}>{initials}</Text>
      </View>
    </View>
  );
};

export default AvatarWithInitials;
