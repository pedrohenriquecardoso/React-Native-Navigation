import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: 'red', inactiveTintColor: 'blue', labelStyle: {fontSize: 30}}} initialRouteName='ViewB'>
            <Tab.Screen name='ViewA' component={ViewA}></Tab.Screen>
            <Tab.Screen name='ViewB' component={ViewB}></Tab.Screen>
            <Tab.Screen name='ViewC' component={ViewC}></Tab.Screen>
        </Tab.Navigator>     
    )
}