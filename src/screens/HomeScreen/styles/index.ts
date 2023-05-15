import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  card: {
    width: '80%',
    alignSelf: "center",
    marginTop: theme.spacing.large,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.secondary,
    textAlign: "center",
    marginBottom: theme.spacing.small,
  },
});

export default styles;