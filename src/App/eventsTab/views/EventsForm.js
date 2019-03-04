
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
export default class EventsForm extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>{ 'EventsForm Screen ' }</Text>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('EventsList') }
                    style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'purple',
                        marginTop:20
                    }}>
                    <Text>{'Go to back Event List screen'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}