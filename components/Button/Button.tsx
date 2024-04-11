import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      className=" items-center justify-center bg-blue-500 p-4 rounded-md"
      onPress={onPress}
    >
      <Text className="text-black">{text}</Text>
    </TouchableOpacity>
  );
};
