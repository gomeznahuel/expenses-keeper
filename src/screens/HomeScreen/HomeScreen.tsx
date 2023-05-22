import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../types/navigate.types";
import { Button, CardView } from "../../components";
import styles from "./styles";

  /**
   * I simulate a userId. Can be used in the SettingsScreen.
   * The userId is passed as a parameter to the SettingsScreen.
   * The userId is received in the SettingsScreen with the useRoute hook.
   * The userId is displayed in the SettingsScreen.
   */

const HomeScreen = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  return (   
    <CardView customStyles={styles.card}>
      <Text style={styles.cardTitle}>This is a CardView!</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate("Settings", {
            userId: "This is the userId from HomeScreen!",
          })
        }
      />

      <Button
        title="Go to Login"
        onPress={() =>
          navigation.navigate("Login")
        }
      />
    </CardView>
  );
};

export default HomeScreen;
