import React, {useState} from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { gStyle } from "../../style/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ComboMeal =  () => {
	const [products, setProducts] = useState(comboMeal);
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
      <Text style={titleTextBold}>Beverages</Text>
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
      const comboMeal = [
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 1 ',
          price: 2.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 2 ',
          price: 3.23,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 3 ',
          price: 3.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 4 ',
          price: 5.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 5 ',
          price: 3.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 6 ',
          price: 1.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 7 ',
          price: 3.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 8 ',
          price: 3.40,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 9 ',
          price: 2.39,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 10 ',
          price: 2.05,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 11 ',
          price: 3.30,
          count: 1
        },
        {
          image:
          'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
           name: 'Combo Meal 12 ',
          price: 2.39,
          count: 1
        },
       
      ]
 
export default ComboMeal;
