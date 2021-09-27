import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'
import StackStep from '../components/StackStep';

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='ViewA' screenOptions={{headerShown: true}}>
            <Stack.Screen name='ViewA' options={{title: 'Initial Informations'}} >
                {props => (
                    <StackStep {...props} advance='ViewB'>
                        <ViewA />
                    </StackStep>
                )}
            </Stack.Screen>
            <Stack.Screen name='ViewB'>
                {props => (
                    <StackStep {...props} advance='ViewC' goBack>
                        <ViewB />
                    </StackStep>
                )}
            </Stack.Screen>
            <Stack.Screen name='ViewC' component={ViewC} />
        </Stack.Navigator>
    )
}