import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function SplashScreen() {
    return (
        <View style = {styles.container}> 
            <Text style = {styles.textDesign}>
                SAARTH
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a6f7c7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDesign: {
        fontFamily: 'Expo',
        fontWeight: 'bold',
        fontSize: 50
    }
});