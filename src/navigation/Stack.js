import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='ViewA' screenOptions={{headerShown: true}}>
            <Stack.Screen name='ViewA' component={ViewA} options={{title: 'Initial Informations'}} />
            <Stack.Screen name='ViewB' component={ViewB} />
            <Stack.Screen name='ViewC' component={ViewC} />
        </Stack.Navigator>
    )
}