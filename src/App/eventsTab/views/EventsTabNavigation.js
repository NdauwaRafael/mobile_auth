/**
 * Created by Raphael Karanja on 2019-03-03.
 */

// React
import React from 'react'
import {createAppContainer, NavigationActions} from 'react-navigation';


// Navigation
import { EventsTabNavigator} from '../navigationConfigutation'


// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';


const EventsNavigator = createAppContainer(EventsTabNavigator);

class EventsTabNavigation extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props;
        return (
            <EventsNavigator/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.eventsTab
    }
}

export default connect(mapStateToProps)(EventsTabNavigation);