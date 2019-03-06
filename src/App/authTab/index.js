/**
 * Created by Raphael Karanja on 2019-03-05.
 */
//REACT
import React from "react";
import {createStackNavigator} from "react-navigation";


//ICON
import Icon from "react-native-vector-icons/FontAwesome";

//SCREENS
import Login from './views/Login';
import Register from './views/Register';
import UpdateDetails from './views/UpdateUser';

const routeConfiguration = {
    Login: {screen: Login},
    Register: {screen: Register},
    UpdateDetails: {screen: UpdateDetails}
}

const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Login',
    tabBarLabel: 'Auth',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
};

export const AuthTabNavigator = createStackNavigator(routeConfiguration,stackNavigatorConfiguration);
