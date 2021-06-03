import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native';

const logInAction = () => {
    navigation.navigate("Home", {Screen: "HomeScreen"});
}

const signUpAction = () => {
    navigation.navigate("SignUp", {Screen: "SignUpScreen"});
}

export default function LogInScreen({ navigation }) {
    return(
        <View Style={styles.container}>
            <Text>
                Log In Screen.
            </Text>
            <Button title='Sign Up' onPress={signUpAction} />
            <Button title='Login' onPress={logInAction}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});