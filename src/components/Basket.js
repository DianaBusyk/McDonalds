import React from "react";
import { gStyle } from "../../../McDonalds/style/gStyle";
import { View, Text, Image, TouchableOpacity} from "react-native-web";

const Basket = ({ route }) => {
  const { cart, setCart } = route.params;
  const {
    orderListBlock,
    orderHeaderName,
    orderItem,
    deleteButton,
    itemImg,
    itemName,
    orderListHeader,
    orderPage,
    total
  } = gStyle;

  // const onRemove = name => {
  //   setCart(prev => prev.filter( item => item.name !== name))
  // }  

  return (
    <View style={orderPage} >
      <View style={orderListBlock}>
        <View style={orderHeaderName}>
          <Text style={{ fontWeight: "bold", color: 'white' }}>Name</Text>
        </View>
        <View style={orderListHeader}>
          <Text style={{ fontWeight: "bold", color: 'white' }}>Price</Text>
        </View>
        <View style={orderListHeader}>
          <Text style={{ fontWeight: "bold", color: 'white' }}>Count</Text>
        </View>
        <View style={orderListHeader}>
          <Text style={{ fontWeight: "bold", color: 'white' }}>Delete</Text>
        </View>
      </View>
      {cart.map((item, idx) => (
        <View key={idx} style={orderListBlock}>
          <View style={itemName}>
            <Image source={{ uri: item.image }} style={itemImg} />
            <Text style={{ paddingLeft: 10,  color: 'white'}}> {item.name}</Text>
          </View>
          <View style={orderItem}>
            <Text style={{ color: '#F2CA46' }}>$ {Math.round((item.price * item.count) * 100) / 100}</Text>
          </View>
          <View style={orderItem}>
            <Text style={{ color: 'white' }} > {item.count}</Text>
          </View>
          <View style={orderItem}>
          <TouchableOpacity>
            <Text style={deleteButton} onPress={() => onRemove(item.name)}>delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={total} >
        <Text style={{ fontWeight: "bold", color: 'white' }} >
          Total: {" "} 
          <Text  style={{ color: '#F2CA46' }}>
          ${" "}
          {cart.reduce((total, item) => {
            return Math.round((total + item.price * item.count) * 100) / 100;
          }, 0)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Basket;
