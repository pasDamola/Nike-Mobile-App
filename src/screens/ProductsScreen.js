import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductsScreen;
