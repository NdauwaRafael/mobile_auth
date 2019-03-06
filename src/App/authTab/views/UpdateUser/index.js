/**
 * Created by Raphael Karanja on 2019-03-06.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from 'native-base'
class UpdateUser extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Container>

            </Container>
        );
    }
}

export default connect()(UpdateUser);