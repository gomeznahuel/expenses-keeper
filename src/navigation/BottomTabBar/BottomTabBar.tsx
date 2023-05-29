import React from "react";
import MainStack from "../MainStack/MainStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactScreen, DashboardScreen, HomeScreen, InstallmentsScreen } from "../../screens";
import { TabBarIcon } from "../../components";
import styles from "./styles";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName="stats-chart" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Installments"
        component={InstallmentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName="cash" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName="person" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
