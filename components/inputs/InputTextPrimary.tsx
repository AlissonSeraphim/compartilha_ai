import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";

const InputTextPrimary = ({
  initialValue,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
}: {
  initialValue?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}) => {
  const [inputValue, setInputValue] = useState(initialValue || "");

  useEffect(() => {
    if (inputValue) {
      onChangeText(inputValue);
    }
  }, [inputValue]);

  return (
    <TextInput
      value={inputValue}
      onChangeText={setInputValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={{
        borderRadius: 24,
        backgroundColor: "#F2F2F2",
        width: "100%",
        padding: 4,
        paddingLeft: 24,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#F28C28",
        height: 45
      }}
    />
  );
};

export default InputTextPrimary;
