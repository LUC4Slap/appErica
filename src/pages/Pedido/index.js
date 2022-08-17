import * as React from "react";
import { Text, View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
export default function Pedidos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pedido</Text>
      <Feather name="shopping-bag" size={24} color="black" />
    </View>
  );
}
