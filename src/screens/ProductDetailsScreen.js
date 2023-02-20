import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  useWindowDimensions,
} from "react-native";
import products from "../data/products";
import Button from "../components/Button.js";
import { useSelector } from "react-redux";

const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();
  const product = useSelector((state) => state.products.selectedProduct);

  const addToCart = () => {};

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Button onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    letterSpacing: 1.5,
  },
});

export default ProductDetailsScreen;
