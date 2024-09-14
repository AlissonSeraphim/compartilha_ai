import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

const ButtonsSecondaryColor = ({
  title,
  onPress,
}: {
  title: string;
  onPress: PressableProps["onPress"];
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 24,
        elevation: 8,
        shadowOffset: { width: 0, height: 4 },
        backgroundColor: "#F2F2F2",
        width: '90%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          lineHeight: 18,
          color: '#121212'
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonsSecondaryColor;
