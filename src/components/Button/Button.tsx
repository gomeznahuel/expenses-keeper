import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  customStyles?: ViewStyle;
  onPress: () => void;
  backgroundColor?: string;
}

const Button = ({ title, onPress, customStyles }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress} activeOpacity={0.8} >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
