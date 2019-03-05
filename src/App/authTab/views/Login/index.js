/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Input, Item, Label, Button, Text, Form, View} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {loginUser} from "../../../../Redux/actions/Auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
        this.login = this.login.bind(this);
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }


    userIsValid() {
        let isValid = true;
        let {email, password, errors} = this.state;

        if (password === '') {
            errors.password = 'Password field is empty';
            isValid = false;
        } else {
            errors.password = ''
        }


        if (!this.emailIsValid(email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        this.setState({errors});

        return isValid;
    }

    login() {
        let {email, password} = this.state;
        if (!this.userIsValid()) {
            return;
        }
        this.props.loginUser({email, password});
    }

    signUp() {

    }


    render() {
        const {errors} = this.state;
        return (
            <Container style={styles.container}>
                <Form>
                    <View>
                        <Text>{this.props.loginError}</Text>
                    </View>

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

function mapStateToProps({auth}) {
    return {auth};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: bindActionCreators(loginUser, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);