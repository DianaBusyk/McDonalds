import React, {useState} from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { gStyle } from "../../style/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const BurgAndSendwich =  () => {
	const [products, setProducts] = useState(burgAndSendwich);
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
      <Text style={titleTextBold}>Burgers and Sendwiches</Text>
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
  
  const burgAndSendwich = [
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 1',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 1',
      price: 3.79,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 2',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 2 ',
      price: 3.79,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 3',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 3 ',
      price: 1.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 4',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 4 ',
      price: 1.59,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 5',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 5 ',
      price: 1.56,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Burgers 6',
      price: 3.39,
      count: 1
    },
    {
      image: 'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
		  name: 'Sandwiche 6 ',
      price: 3.19,
      count: 1
    },
  ]
  
    
export default BurgAndSendwich;
