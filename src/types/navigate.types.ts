import type { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Settings: { userId: string };
  History: undefined;
  Installments: undefined;
};

export type MainStackRouteProp = RouteProp<MainStackParamList>;
