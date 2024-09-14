import { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

const ButtonPrimaryWithIcon = ({
  title,
  onPress,
  height,
  icon,
  gap,
}: {
  title: string;
  onPress: PressableProps["onPress"];
  height?: number;
  icon?: () => JSX.Element;
  gap?: number;
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 24,
        elevation: 8,
        shadowOffset: { width: 0, height: 4 },
        backgroundColor: "#d42e27",
        width: "90%",
        height: height ? height : 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: gap ? gap : icon ? 10 : 0,
      }}
      onPress={onPress}
    >
      {icon && icon()}

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          lineHeight: 18,
          color: "white",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonPrimaryWithIcon;
