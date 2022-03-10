import React, {useState} from "react";
import { Text, Image, TouchableOpacity, View , ScrollView} from "react-native";
import { gStyle } from "../../style/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Beverages =  () => {
	const [products, setProducts] = useState(beverages);
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

const beverages = [
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 1',
		price: 3.39,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 2',
		price: 3.79,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 3',
		price: 2.30,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 4',
		price: 2.39,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 5',
		price: 2.49,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 6',
		price: 1.39,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 7',
		price: 4.09,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 8',
		price: 1.59,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 9',
		price: 3.23,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 10',
		price: 1.56,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 11',
		price: 2.39,
		count: 1
	},
	{
		image:
		'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
		name: 'beverage 12',
		price: 3.19,
		count: 1
	},
]


export default Beverages;
