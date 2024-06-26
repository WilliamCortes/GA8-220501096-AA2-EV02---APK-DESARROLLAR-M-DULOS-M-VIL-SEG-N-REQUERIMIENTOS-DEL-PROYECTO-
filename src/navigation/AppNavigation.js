import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import DogsScreen from "../screens/Dogs/DogsScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import ApprenticeScreen from "../screens/Apprentice/ApprenticeScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recetas" component={HomeScreen} />
      <Stack.Screen name="Detalle" component={RecipeScreen} />
      <Stack.Screen name="Perros" component={DogsScreen} />
      <Stack.Screen name="Aprendiz" component={ApprenticeScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
