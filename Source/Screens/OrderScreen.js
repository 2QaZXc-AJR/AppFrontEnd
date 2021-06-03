import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList} from 'react-native';

export default function OrderScreen() {
    const orders = useSelector(state => state.orders.orders);
    return(
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
        />
    );
}

const style = StyleSheet.create({
    
});