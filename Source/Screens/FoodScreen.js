import React, {useEffect} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../Components/ProductItem';
import * as cartActions from '../Actions/Basket';
import * as productActions from '../Actions/Products';

export default function HomeScreen( {route, navigation} ) {
    function filterByType(obj) {
        if(obj.type.toLowerCase() == 'food') {
            return true;
        }
    }
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
                    toBasket={() => {dispatch(cartActions.addToCart(itemData.item, 1));}}/> 
                )
            }
        /> 
    );
}

const styles = StyleSheet.create({
    listDesign: {
        backgroundColor: '#abe3e0'
    },
});