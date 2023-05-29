import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar } from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
    </Provider>
  );
}
