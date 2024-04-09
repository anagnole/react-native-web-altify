import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export const Input = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter text here"
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#007BFF", // A nice blue border.
    borderRadius: 5, // Rounded corners.
    color: "#000", // Text color.
    backgroundColor: "#FFF", // White background color.
  },
});
