/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
export default class Event extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>{ 'Event Screen ' }</Text>
                <TouchableOpacity
                    onPress={ () => this.props.navigation.goBack()}
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