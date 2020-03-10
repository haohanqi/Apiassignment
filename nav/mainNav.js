import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Animation from '../screens/Animation'
const Stack = createStackNavigator()

function HomeStack (){
    return (
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Animation' component={Animation}/>
        </Stack.Navigator>
    )
}

export default HomeStack