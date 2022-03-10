import React, { useState } from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { gStyle } from "../../../McDonalds/style/gStyle";
import { popular } from "../popular";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Popular = (params) => {
  const { cart, setCart } = params;
  const [products, setProducts] = useState(popular);
  const {
    countNum,
    toCart,
    titleTextBold,
    categoriesMainBlock,
    categoriesBlock,
    categoriesItem,
    itemImg,
    itemText,
    secondaryColor,
    priceText,
  } = gStyle;

  const addItem = (idx) => {
    products[idx].count += 1;
    setProducts([...products]);
  };

  const minusItem = (idx) => {
    products[idx].count > 0 ? (products[idx].count -= 1) : 0;
    setProducts([...products]);
  };

  const addToCart = (product) => {
    const cartItemFound = cart.find((item) => item.name == product.name);
    console.log(cartItemFound);
    if (cartItemFound) {
      cartItemFound.count += product.count;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
    console.log(cart);
  };

  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={titleTextBold}>Popular</Text>
      <View style={categoriesMainBlock}>
        {products.map((product, idx) => (
          <View key={`popular ${idx}`} style={categoriesBlock}>
            <View underlayColor={secondaryColor} style={categoriesItem}>
              <View style={{ alignItems: "center" }}>
                <Image source={{ uri: product.image }} style={itemImg} />
                <Text style={itemText}>{product.name}</Text>
                <Text style={priceText}>$ {product.price}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity>
                    <Ionicons
                      name="add"
                      size={16}
                      color="white"
                      onPress={() => addItem(idx)}
                    />
                  </TouchableOpacity>
                  <Text style={countNum}>{product.count}</Text>
                  <TouchableOpacity>
                    <Feather
                      name="minus"
                      size={14}
                      color="white"
                      onPress={() => minusItem(idx)}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text style={toCart} onPress={() => addToCart(product)}>
                    to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Popular;
