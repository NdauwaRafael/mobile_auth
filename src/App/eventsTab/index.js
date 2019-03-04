/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { createStackNavigator } from 'react-navigation';

//SCREENS
import Event from './views/Event';
import EventsForm from  './views/EventsForm';
import EventsList from  './views/EventsList';
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

const routeConfiguration = {
    EventsList: { screen: EventsList },
    EventsForm: { screen: EventsForm },
    Event: { screen: Event },
}
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'EventsList',
    tabBarLabel: 'Events',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
};


export const EventsTabNavigator = createStackNavigator(routeConfiguration,stackNavigatorConfiguration)