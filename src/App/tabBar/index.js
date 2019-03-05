/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {EventsTabNavigator} from '../eventsTab';
import {ProfileTabNavigator} from '../profileTab';
import {AuthTabNavigator} from "../authTab";
import React, {Component} from "react";
import {connect} from 'react-redux';

const routeConfiguration = {
    Events: EventsTabNavigator,
    Profile: ProfileTabNavigator
}

const tabBarConfiguration = {
    navigationOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white'
    }
};

const TabBar = createBottomTabNavigator(routeConfiguration, tabBarConfiguration);

const TabBarNavigation = createAppContainer(TabBar);

//auth
const authRouteConfiguration = {
    Auth: AuthTabNavigator
}

const AuthTab = createBottomTabNavigator(authRouteConfiguration, tabBarConfiguration);
const AuthTabBarNavigation = createAppContainer(AuthTab);


class TabBarMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        const {isLoggedIn} = this.props.auth;
        if (!isLoggedIn){
            return (
                <AuthTabBarNavigation />
            )
        } else {
            return(
                <TabBarNavigation />
            )
        }

}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(TabBarMain)