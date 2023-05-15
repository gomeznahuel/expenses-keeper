import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  button: {
    minHeight: theme.spacing.medium,
    minWidth: theme.spacing.medium,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.small,
    margin: theme.spacing.small,
    backgroundColor: theme.colors.primary,
  },
});

export default styles;