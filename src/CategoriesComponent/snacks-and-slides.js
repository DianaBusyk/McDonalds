import React, {useState} from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { gStyle } from "../../style/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Snacks =  () => {
	const [products, setProducts] = useState(snacks);
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
      <Text style={titleTextBold}>Snacks and Slides</Text>
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

const snacks = [
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 1',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 2',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 3',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 4',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 5',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Snacks 6',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 1',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 2',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 3',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 4',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 5',
    price: 3.39,
    count: 1
  },
  {
    image:
			'https://www.pngkey.com/png/full/10-103601_food-mcdonalds-french-fries-png.png',
		name: 'Slides 6',
    price: 3.39,
    count: 1
  },
];

export default Snacks;
