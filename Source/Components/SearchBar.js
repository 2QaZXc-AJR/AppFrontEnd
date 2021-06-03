import React from 'react';
import { View, 
        Text, 
        Image, 
        StyleSheet, 
        Button, 
        TouchableOpacity} 
from 'react-native';

export default function ProductItem(props) {
    return(
        <View style={styles.product}>
          <TouchableOpacity onPress={props.onViewDetails}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title.substring(0, 15)}</Text>
                <Text style={styles.price}>
                  ₹ {props.price}{' '}
                  <Text style={styles.mrp}>
                    mrp
                  </Text>
                  <Text style={styles.price}>
                    {' '}ab%
                  </Text>
                </Text>
            </View>
            <View style={styles.actions}>
                <Button title="To Basket" onPress={props.toBasket} />
            </View> 
          </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 0,
      elevation: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      height: 280,
      width: '49.4%',
      margin: 1
    },
    imageContainer: {
      width: '100%',
      height: '60%',
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      alignItems: 'center',
      height: '15%',
      padding: 10
    },
    title: {
      fontSize: 15,
      marginVertical: 4
    },
    price: {
      color: 'green',
      fontSize: 12,
    },
    mrp: {
      textDecorationStyle: 'solid',
      textDecorationLine: 'line-through',
      fontSize: 12,
      color: '#888'
    },
    actions: {
      //flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '25%',
      paddingHorizontal: 20
    }
});