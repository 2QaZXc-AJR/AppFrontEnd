import React, { useState } from 'react';
import {View, Input, Text} from 'react-native';

export default function OtpScreen () {
    const login = () => {

    }
    const [otp, setOtp] = useState();
    const [token, setToken] = useState("");
    return (
        <View>
            <Text >
                Enter OTP
            </Text>
            <Input 
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChange={text => {setOtp(text)}} 
            />
            <Button title="Login" onPress={login}/>
        </View>
    );
}