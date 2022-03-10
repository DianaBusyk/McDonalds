import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Beverages from "./src/CategoriesComponent/beverages";
import Chicken from "./src/CategoriesComponent/chicken";
import ComboMeal from "./src/CategoriesComponent/combo-meal";
import HappyMeal from "./src/CategoriesComponent/happy-meal";
import Snacks from "./src/CategoriesComponent/snacks-and-slides";
import BurgAndSendwich from "./src/CategoriesComponent/burg-and-sendwich";
import App from "./src/components/App";
import { gStyle } from "./style/gStyle";
import Basket from "./src/components/Basket";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: gStyle.mainHeader }}
        >
          <Stack.Screen
            name="App"
            component={App}
            options={{ title: `McDonald’s`}}
          />
          <Stack.Screen
            name="Burgers & Sandwiches"
            component={BurgAndSendwich}
            options={{ title: "Burgers & Sandwiches" }}
          />
          <Stack.Screen
            name="Beverages"
            component={Beverages}
            options={{ title: "Beverages" }}

          />
          <Stack.Screen
            name="Chicken"
            component={Chicken}
            options={{ title: "Chicken" }}
          />
          <Stack.Screen
            name="ComboMeal"
            component={ComboMeal}
            options={{ title: "Combo Meal" }}
          />
          <Stack.Screen
            name="HappyMeal"
            component={HappyMeal}
            options={{ title: "Happy Meal" }}
          />
          <Stack.Screen
            name="Snacks"
            component={Snacks}
            options={{ title: "Snacks & Slides" }}
          />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ title: "Basket" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
