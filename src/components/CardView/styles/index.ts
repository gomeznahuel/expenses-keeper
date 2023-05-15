import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const CardStyles = StyleSheet.create({
  container: {
    minWidth: theme.spacing.small,
    minHeight: theme.spacing.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: theme.colors.light,
    borderRadius: theme.spacing.small,
  },
});

export default CardStyles;
