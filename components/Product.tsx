import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { FavoriteIcon } from "./FavoriteIcon";
import { Card } from "./Card";
import { Product } from "../declarations/types";

interface Props {
  product: Product;
  onPress: () => void;
}

export function ProductCard({ product, onPress }: Props) {
  return (
    <Card key={product.code_no} style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={{ uri: product.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₦{product.cost}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <FavoriteIcon favorite={true} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
});
