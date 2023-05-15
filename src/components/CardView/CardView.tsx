import { View } from "react-native";
import React from "react";
import CardStyles from "./styles";
import CardViewProps from "./types";

const CardView = ({ children, customStyles }: CardViewProps) => {
  return <View style={[CardStyles.container, customStyles]}>{children}</View>;
};

export default CardView;