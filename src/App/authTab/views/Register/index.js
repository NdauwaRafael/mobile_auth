/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {Container, Header, Form, Footer, Title, View, Item, Label, Input, Text} from 'native-base';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render() {
        return(
            <Container>
                <Form>
                    <View>
                        <Item floatingLabel>
                            <Label>Email </Label>
                            <Input
                                onChangeText={(email) => this.setState({email})}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>
                        <Text style={styles.errorMessage}>{errors.email} </Text>
                    </View>
                </Form>
            </Container>
        );
    }
}

export default Register;