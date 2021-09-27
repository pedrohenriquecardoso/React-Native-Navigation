import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator initialRouteName='ViewB'>
            <Drawer.Screen name='ViewA' component={ViewA} />
            <Drawer.Screen name='ViewB' component={ViewB} />
            <Drawer.Screen name='ViewC' component={ViewC} />
        </Drawer.Navigator> 
    )
}