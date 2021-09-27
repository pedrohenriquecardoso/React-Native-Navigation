import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {props.goBack
                    ? <Button title='Go Back' onPress={()=>{props.navigation.goBack()}} />
                    : false
                }
                {props.advance
                    ?   <Button 
                            title='Advance' 
                            onPress={()=>{
                                props.navigation.navigate(
                                    props.advance, 
                                    props.advanceParam
                                )}
                            } 
                    
                        />
                    : false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View> 
        </View>
    )
}