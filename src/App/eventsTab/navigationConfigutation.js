/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { StackNavigator } from 'react-navigation';

//SCREENS
import Event from './views/Event';
import EventsForm from  './views/EventsForm';
import EventsList from  './views/EventsList';

const routeConfiguration = {
    EventsList: { screen: EventsList },
    EventsForm: { screen: EventsForm },
    Event: { screen: Event },
}
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'EventsList'
};


export const EventsTabNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)