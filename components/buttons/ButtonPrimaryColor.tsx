import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

const ButtonPrimaryColor = ({
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
        backgroundColor: "#d42e27",
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
          color: 'white'
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonPrimaryColor;
