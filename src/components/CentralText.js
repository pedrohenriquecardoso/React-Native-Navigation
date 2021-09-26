import React from 'react';
import {
    View,
    Text
} from 'react-native';


export default props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.colorBackground}}>
            <Text style={{fontSize: 50, color: props.colorText || '#FFF'}}>{props.children}</Text>
        </View>
    )
}