import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BasketItems from '../Components/BasketItems';
import * as cartActions from '../Actions/Basket';
import * as orderActions from '../Actions/Order';

export default function BasketScreen({ route, navigation }) {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
            productId: key,
            productTitle: state.cart.items[key].productTitle,
            productPrice: state.cart.items[key].productPrice,
            quantity: state.cart.items[key].quantity,
            sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    });

    const dispatch = useDispatch();
    return(
      <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total:{' '}
            <Text style={styles.amount}>₹ {cartTotalAmount.toFixed(2)}</Text>
          </Text>
          <Button color="#4d4dff" title="Pay Now" disabled={cartItems.length === 0} 
          onPress={() => dispatch(orderActions.addOrder(cartItems, cartTotalAmount))}/>
          <Button color="#4d4dff" title="Order" disabled={cartItems.length === 0} 
          onPress={() => {
            dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
            ToastAndroid.show("Order Placed", ToastAndroid.SHORT, ToastAndroid.CENTER);
          }}/>
        </View>
          <FlatList
          data={cartItems}
          keyExtractor={item => item.productId}
          renderItem={itemData => (
            <BasketItems
              image={`https://saarth-store.herokuapp.com/api/inventory//${itemData.item.productId}/download`}
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {
                dispatch(cartActions.removeFromCart(itemData.item.productId));
                ToastAndroid.show("Removed From Basket", ToastAndroid.SHORT, ToastAndroid.CENTER);
              }}
            />
          )}
        />
        <View style={styles.breakDown} accessibility={cartItems.length === 0}>
          <Text style={styles.breakDownText}>
            Price Break Down
          </Text>
          <Text style={{color: 'black'}}>
            Total MRP: ₹ 
          </Text>
          <Text style={{color: 'black'}}>
            You Saved: ₹ 
          </Text>
          <Text style={styles.payable}>
            Payable: ₹ {cartTotalAmount.toFixed(2)}
          </Text>
        </View> 
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
      },
      summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
      },
      breakDown: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
      },
      summaryText: {
        fontSize: 18
      },
      amount: {
        color: '#00ff00'
      },
      breakDown: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    breakDownText: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize: 18
    },
    payable: {
        color: '#00ff00'
    },
});