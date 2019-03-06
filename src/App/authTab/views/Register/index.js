/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {Container, Header, Form, Footer, Title, View, Item, Label, Input, Text, Button} from 'native-base';
import {StyleSheet} from "react-native";

class Register extends Component {
    constructor(props) {
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
        this.register = this.register.bind(this);
    };

    register(){

    }

    render() {
        const {errors} = this.state;
        return (
            <Container style={styles.container}>
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
                        <Text style={styles.errorMessage}>{errors.confirmPassword} </Text>
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

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    errorMessage: {
        color: 'red',
        fontSize: 10
    }
});
export default Register;