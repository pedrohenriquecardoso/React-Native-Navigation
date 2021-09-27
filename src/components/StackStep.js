import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
    return (
        <View style={{flex: 1}}>
            <View>
                {props.advance
                    ? <Button title='Advance' onPress={()=>{props.navigation.navigate(props.advance)}} />
                    : false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View> 
        </View>
    )
}