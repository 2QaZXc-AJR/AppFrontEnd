import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import LocationScreen from './Source/Screens/LocationScreen';

import productReducer from './Source/Reducer/Products';
import cartReducer from './Source/Reducer/Basket';
import orderReducer from './Source/Reducer/Order';

import AppNavigation from './Navigation/AppNavigation';

const rootReducer = combineReducers({
  Products: productReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))


export default function App() {
  return (
    <Provider store={store} styl={styles.container}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2052',
  },
});
