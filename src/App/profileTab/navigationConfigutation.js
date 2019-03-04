/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { StackNavigator } from 'react-navigation';

//SCREENS
import ProfileDetails from './views/ProfileDetails';
import EditProfile from  './views/ProfileEdit'

const routeConfiguration = {
    ProfileDetails: { screen: ProfileDetails },
    EventsForm: { screen: EditProfile }
}
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'ProfileDetails'
};


export const ProfileTabNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)