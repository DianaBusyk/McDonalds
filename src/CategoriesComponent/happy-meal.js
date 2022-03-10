import React, {useState} from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { gStyle } from "../../style/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HappyMeal =  () => {
	const [products, setProducts] = useState(happyMeal);
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
	  secondPage,
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
  

  return (
    <View style={{ paddingTop: 60 }, secondPage}>
      <Text style={titleTextBold}>Happy Meal</Text>
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
                  <Text style={toCart}>
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

const happyMeal = [
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 1 ",
    price: 5.33,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 2 ",
    price: 2.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 3 ",
    price: 4.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 4 ",
    price: 2.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 5 ",
    price: 2.49,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 6 ",
    price: 2.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 7 ",
    price: 6.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 8 ",
    price: 1.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 9 ",
    price: 2.32,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 10 ",
    price: 5.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 11 ",
    price: 3.39,
    count: 1
  },
  {
    image:
      "https://www.pngkey.com/png/full/171-1712404_mcdonalds-happy-meal.png",
    name: "Happy Meal 12 ",
    price: 2.23,
    count: 1
  },
];

export default HappyMeal;
