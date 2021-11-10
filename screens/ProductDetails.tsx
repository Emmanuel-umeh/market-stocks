import { Button } from "native-base";
import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ProductCard } from "../components/Product";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export function ProductDetails({ route }) {
  const { product } = route.params;

  function renderHeader() {
    return (
      <>
        <ProductCard
          product={product}
          onPress={() => {
            alert("Product has been purchased successfully");
          }}
        />

        <TouchableOpacity
          onPress={() => {
            alert("Product has been purchased successfully");
          }}
        >
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button rounded={10} height={hp(5)} style={styles.loginBtn}>
              <TouchableOpacity
                onPress={() => {
                  alert("Product has been purchased successfully");
                }}
              >
                <Text style={[{ color: "#fff", padding: 4 }, styles.text]}>
                  Purchase product
                </Text>
              </TouchableOpacity>
            </Button>
          </View>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={renderHeader()}
      contentContainerStyle={styles.commentsContainer}
    />
  );
}

const styles = StyleSheet.create({
  commentsContainer: {
    padding: 8,
  },
  commentCard: {
    padding: 16,
    marginVertical: 8,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  loginBtn: {
    alignSelf: "center",
    backgroundColor: "#4632A1",
    width: wp(50),
    justifyContent: "center",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
