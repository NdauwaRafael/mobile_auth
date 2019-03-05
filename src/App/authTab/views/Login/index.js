/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Input, Item, Label, Button, Text, Form, View} from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login() {
        
    }

    signUp(){

    }



    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <View>
                            <Text>{this.props.loginError}</Text>
                        </View>
                        <Item floatingLabel>
                            <Label>Email {this.props.loginError}</Label>
                            <Input
                                onChangeText={(email) => this.setState({email})}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>

                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>

                        <Button
                            style={{marginTop: 15}}
                            full
                            rounded
                            success
                            onPress={() => this.login()}>
                            <Text style={{color: '#fff'}}>Login</Text>
                        </Button>

                        <Button
                            style={{marginTop: 15}}
                            full
                            rounded
                            info
                            onPress={() => this.signUp()}>
                            <Text style={{color: '#fff'}}>Sign Up!</Text>
                        </Button>
                    </Form>
                </Content>
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
    }
});

export default Login;