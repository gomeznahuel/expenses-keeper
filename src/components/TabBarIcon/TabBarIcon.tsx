import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  iconName: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}

const TabBarIcon = ({ iconName, focused }: Props): JSX.Element => (
  <>
    <Ionicons name={iconName} size={24} color={focused ? "#000" : "#ccc"} />
    <Text style={{ color: focused ? "#000" : "#ccc" }}>{iconName}</Text>
  </>
);

export default TabBarIcon;
