/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {Container, Header, Form, Footer, Title, View, Item, Label, Input, Text, Button} from 'native-base';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }
    render() {
        const {errors} = this.state;
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

                    <View>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>
                        <Text style={styles.errorMessage}>{errors.password} </Text>
                    </View>

                    <View>
                        <Item floatingLabel>
                            <Label>Confirm Password</Label>
                            <Input
                                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>
                        <Text style={styles.errorMessage}>{errors.password} </Text>
                    </View>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        success
                        onPress={() => this.register()}>
                        <Text style={{color: '#fff'}}>Register User</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;