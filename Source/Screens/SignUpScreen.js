import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, Image } from 'react-native';

const userRegister = () => {
    console.log('Phone Number');
}

export default function SignUpScreen({ navigation }) {
    return(
        <View Style={styles.container}>
            <Image source={{uri:''}}/>
            <Text> REGISTER </Text>
            <Text>
                Enter Phone Number
            </Text>
            <TextInput keyboardType='number-pad'/>
            <Text> 
                Enter Your Name
            </Text>
            <TextInput />
            <Text>
                Enter Delivary Address
            </Text>
            <TextInput />

            <Button title='Get OTP' onPress={() => userRegister()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff94aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});