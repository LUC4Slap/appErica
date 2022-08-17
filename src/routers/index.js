import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Home from "../pages/Home";
import Pedido from "../pages/Pedido";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Routers() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (focused, color, size) => {
            let iconName;
            if (route.name === "Nossos Produtos") {
              return (
                <FontAwesome name="product-hunt" size={20} color="tomato" />
              );
            } else if (route.name === "Faça seu pedido") {
              return <Feather name="shopping-bag" size={20} color="tomato" />;
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color="tomato" />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Nossos Produtos" component={Home} />
        <Tab.Screen name="Faça seu pedido" component={Pedido} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
