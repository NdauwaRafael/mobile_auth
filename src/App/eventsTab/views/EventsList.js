/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as eventsActions from '../../../Redux/actions/Events'
import {bindActionCreators} from "redux";

class EventsList extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>{'EventsList Screen '}</Text>
                <TouchableOpacity
                    onPress={() => this.props.actions.addEvent('Hello World')}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: 'green',
                        marginTop: 20,
                        color: 'white'
                    }}>
                    <Text>{'Add an Event'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EventsForm')}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: 'purple',
                        marginTop: 20
                    }}>
                    <Text>{'Go to Event Form screen'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(eventsActions, dispatch)
    }
}

export default connect(mapDispatchToProps)(EventsList)