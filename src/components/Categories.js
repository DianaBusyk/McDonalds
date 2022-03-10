import React from "react";
import { Text, Image, TouchableOpacity, View} from "react-native";
import { gStyle } from "../../../McDonalds/style/gStyle";
import { categories } from "../categories";
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const {
    titleTextBold,
    titleText,
    categoriesMainBlock,
    categoriesBlock,
    categoriesItem,
    itemImg,
    itemText,
    secondaryColor,
  } = gStyle;

  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={titleTextBold}>Hey,</Text>
      <Text style={titleText}>what's up?</Text>
      <View style={categoriesMainBlock}>
        {categories.map((cat, idx) => (
          <View key={`categories ${idx}`} style={categoriesBlock}>
            <TouchableOpacity
              underlayColor={secondaryColor}
              style={categoriesItem}
              onPress={() => navigation.navigate(cat.page)}
            >
              <View style={{ alignItems: "center" }}>
                <Image source={{ uri: cat.image }} style={itemImg} />
                <Text style={itemText}>{cat.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;
