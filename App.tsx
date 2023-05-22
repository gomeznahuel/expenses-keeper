import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar } from "./src/navigation";

export default function App() {
  return ( 
    <NavigationContainer>
      <BottomTabBar />
    </NavigationContainer>
  );
}
