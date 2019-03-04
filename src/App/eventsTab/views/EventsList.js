
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class EventsList extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>{ 'EventsList Screen ' }</Text>
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('Event') }
                    style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'purple',
                        marginTop:20
                    }}>
                    <Text>{'Go to Event screen'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}