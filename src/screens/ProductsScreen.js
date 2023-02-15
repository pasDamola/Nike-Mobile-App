import { FlatList, View, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import products from "../data/products";

const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("Product Details");
          }}
        >
          <View style={{ width: "50%", padding: 1 }}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
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
});

export default ProductScreen;
