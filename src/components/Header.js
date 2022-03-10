import React from "react";
import { Image, TouchableOpacity, View} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { gStyle } from "../../../McDonalds/style/gStyle";
import {useNavigation} from '@react-navigation/native';

const Header = (params) => {
  const {cart, setCart} = params;
  const navigation = useNavigation();
  return (
    <View style={gStyle.header}>
      <View>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png",
          }}
          style={gStyle.mcIcon}
        />
      </View>
      <View>
        <TouchableOpacity>
          <SimpleLineIcons name="basket" size={30} color="white" onPress={() => navigation.navigate('Basket', {cart: cart})} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
