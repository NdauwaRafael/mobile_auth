/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addEvent} from '../../../Redux/actions/Events'
import {logoutUser} from '../../../Redux/actions/Auth'
import {bindActionCreators} from "redux";

class EventsList extends React.Component {

    componentDidMount(): void {
        console.log(this.props, 'props')
    }

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
                    onPress={() => this.props.addEvent('Hello World')}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: 'green',
                        marginTop: 20,

                    }}>
                    <Text style={{color: 'white'}}>{'Add an Event'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.logoutUser()}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: 'red',
                        marginTop: 20,

                    }}>
                    <Text style={{color: 'white'}}>{'Logout User'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EventsForm')}
                    style={{
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: 'purple',
                        marginTop: 20
                    }}>
                    <Text style={{color: 'white'}}>{'Go to Event Form screen'}</Text>
                </TouchableOpacity>

                <Text style={{color: 'white', marginTop: 20}}>{this.props.event}</Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        event: state.event.event
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: bindActionCreators(addEvent, dispatch),
        logoutUser: bindActionCreators(logoutUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)