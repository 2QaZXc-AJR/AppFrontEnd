import React, { useState, useEffect} from 'react';
import { StyleSheet, FlatList, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../Components/ProductItem';
import * as cartActions from '../Actions/Basket';
import * as productActions from '../Actions/Products';

export default function HomeScreen( {route, navigation} ) {
    ////
    function filterByType(obj) {
        if(obj.type.toLowerCase() == 'food') {
            return true;
        }
        //sub category -> stapels, household, personal care, baby care, tea and drinks, snaks and treats
    }

    const [quantity, setQuantity] = useState(1);
    
    ////
    const Products = useSelector(state => state.Products.availableProducts.filter(filterByType));
    const dispatch = useDispatch();

    useEffect(() => {dispatch(productActions.fetchProducts());}, [dispatch]);
    return(
        <FlatList 
            style={styles.listDesign}
            numColumns={2}
            data={Products} 
            key={itemData => itemData.item.id}
            renderItem={itemData => 
                (<ProductItem 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    price={itemData.item.price} 
                    onViewDetails={() => {
                            navigation.navigate('Details', 
                            {productId: itemData.item.id})
                        }
                    }
                    toBasket={() => {
                        dispatch(cartActions.addToCart(itemData.item, quantity)); 
                        ToastAndroid.show("Added To Basket", ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }}/> 
                )
            }
        /> 
    );
}

const styles = StyleSheet.create({
    listDesign: {
        backgroundColor: '#a4accc'
    },
});