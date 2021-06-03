import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from '../Source/Screens/SplashScreen';
import LocationScreen from '../Source/Screens/LocationScreen';
import LogInScreen from '../Source/Screens/LogInScreen';
import SignUpScreen from '../Source/Screens/SignUpScreen';
import HomeScreen from '../Source/Screens/HomeScreen';
import FoodScreen from '../Source/Screens/FoodScreen';
import GroceryScreen from '../Source/Screens/GroceryScreen';
import VegiScreen from '../Source/Screens/VegiScreen';
import DetailsScreen from '../Source/Screens/DetailsScreen';
import BasketScreen from '../Source/Screens/BasketScreen';
import OrderScreen from '../Source/Screens/OrderScreen';

const AuthStack = createStackNavigator();
const AuthFlow = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignUp' component={SignUpScreen}/>
        <AuthStack.Screen name='LogIn' component={LogInScreen} />
    </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeFlow = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{headerLeft: () => (
        <Ionicons name={'menu'} size={25}/>) }}/>
        <HomeStack.Screen name='Details' component={DetailsScreen} />
    </HomeStack.Navigator>
);

const GroceryStack = createStackNavigator();
const GroceryFlow = () => (
    <GroceryStack.Navigator>
        <GroceryStack.Screen name='Grocery' component={GroceryScreen} />
        <GroceryStack.Screen name='Details' component={DetailsScreen} />
    </GroceryStack.Navigator>
);

const FoodStack = createStackNavigator();
const FoodFlow = () => (
    <FoodStack.Navigator>
        <FoodStack.Screen name='Food' component={FoodScreen} />
        <FoodStack.Screen name='Details' component={DetailsScreen} />
    </FoodStack.Navigator>
);

const VegitableStack = createStackNavigator();
const VegitableFlow = () => (
    <VegitableStack.Navigator>
        <VegitableStack.Screen name='Vegitables' component={VegiScreen} />
        <VegitableStack.Screen name='Details' component={DetailsScreen} />
    </VegitableStack.Navigator>
);

const BasketStack = createStackNavigator();
const BasketFlow = () => (
    <BasketStack.Navigator>
        <BasketStack.Screen name='Basket' component={BasketScreen} />
    </BasketStack.Navigator>
);

const OrderStack = createStackNavigator();
const OrderFlow = () => (
    <OrderStack.Navigator>
        <OrderStack.Screen name='Orders' component={OrderScreen} />
    </OrderStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabFlow = () => (
    <Tabs.Navigator tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray',}} 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Basket') {
                iconName = focused ? 'basket' : 'basket';
          } else if (route.name === 'Food') {
              iconName = focused ? 'fast-food' : 'fast-food';
          } else if (route.name === 'Vegitables') {
              iconName = focused ? 'leaf' : 'leaf';
          } else if (route.name === 'Grocery') {
              iconName = focused ? 'cart' : 'cart';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tabs.Screen name='Home' component={HomeFlow} />
        <Tabs.Screen name='Grocery' component={GroceryFlow} />
        <Tabs.Screen name='Food' component={FoodFlow} />
        <Tabs.Screen name='Vegitables' component={VegitableFlow} />
        <Tabs.Screen name='Basket' component={BasketFlow} />
    </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerFlow = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabFlow} />
        <Drawer.Screen name='Orders' component={OrderFlow}/>
        <Drawer.Screen name='Profile' component={AuthFlow}/>
    </Drawer.Navigator>
);

export default function AppNavigation() {
    return(
       <NavigationContainer style={styles.container}>
           <DrawerFlow />
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#a6f7c7',
    }
});
