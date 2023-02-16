import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
