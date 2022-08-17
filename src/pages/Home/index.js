import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <ScrollView style={styles.scrollImageCard} horizontal={true}>
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/pao.jpeg")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/paoCru.jpeg")}
          />
        </ScrollView>
        <Text style={styles.text}>
          Delicioso pão caseiro feito com massa artesanal
        </Text>
        <Text>R$ 10,00</Text>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate("Faça seu pedido")}
          >
            <Text>Fazer Pedido</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.card}>
        <ScrollView style={styles.scrollImageCard} horizontal={true}>
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/rosca.jpeg")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/roscaCrua.jpeg")}
          />
        </ScrollView>
        <Text style={styles.text}>
          Delicioso rosca caseiro feito com massa artesanal
        </Text>
        <Text>R$ 12,00</Text>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate("Faça seu pedido")}
          >
            <Text>Fazer Pedido</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // marginHorizontal: 20,
  },
  card: {
    marginTop: 15,
    backgroundColor: "#ccc",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  scrollImageCard: {
    flex: 1,
    flexDirection: "row",
  },
  tinyLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 300,
    marginLeft: 25,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    marginTop: 5,
    width: 100,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
  },
});
