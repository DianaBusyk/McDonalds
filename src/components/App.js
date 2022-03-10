import React, {useState} from "react";
import { View, ScrollView } from "react-native";
import { gStyle } from "../../../McDonalds/style/gStyle";
import Categories from "./Categories";
import Header from "./Header";
import Popular from "./Popular";


export default function App() {
  const [cart, setCart] = useState([])

  return (
    <ScrollView>
    <View style={gStyle.app}>
      <Header cart={cart} setCart={setCart}/>
      <Categories cart={cart} setCart={setCart} />
      <Popular cart={cart} setCart={setCart}/>
    </View>
    </ScrollView>
  );
}
