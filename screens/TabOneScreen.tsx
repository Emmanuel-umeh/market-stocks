import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { ProductCard } from "../components/Product";
import { Product } from "../declarations/types";
import { firebase } from "../firebase";
import { Button } from "native-base";
import { Loading } from "../components/Loading";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("products/")
      .on("value", (snapshot: any) => {
        console.log({ snapshot });

        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setproducts(data);
        }
      });
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <ProductCard
        product={item}
        onPress={() => {
          navigation.navigate("SingleProduct", {
            product: item,
          });
        }}
      />
    );
  };

  // const addProduct = () => {
  //   firebase.database().ref("/products").push({
  //     code_no: 12,
  //     cost: 1200,
  //     date: Date.now(),
  //     description: "Good beer to calm your nerves",
  //     image:
  //       "https://images.pexels.com/photos/3650616/pexels-photo-3650616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //     maximum: 10,
  //     minimun: 6,
  //     name: "Beer",
  //     quantity: 30,
  //     ref_no: 4000,
  //     unit: 2,
  //   });
  // };
  return (
    <>
      {products.length > 0 ? (
        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          data={products}
          renderItem={renderProduct}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#fafafa",
  },
  productsListContainer: {
    backgroundColor: "#fafafa",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
