/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import React, {Component} from 'react';
import {Container, Header, Form, Footer, Title, View, Item, Label, Input, Text, Button} from 'native-base';
import {StyleSheet} from "react-native";
import {connect} from 'react-redux';
import {createUser} from '../../../../Redux/actions/Auth'
import {bindActionCreators} from "redux/es/redux";


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
        this.register = this.register.bind(this);
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }

    userIsValid() {
        let isValid = true;
        let {email, password, errors, confirmPassword} = this.state;

        if (password.length < 6) {
            errors.password = 'Password is too short. Password should be atleast 6 characters long';
            isValid = false;
        } else {
            errors.password = ''
        }

        if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match.';
            isValid = false;
        } else {
            errors.confirmPassword = ''
        }


        if (!this.emailIsValid(email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        this.setState({errors});

        return isValid;
    };

    register() {
        if (!this.userIsValid()) {
            return;
        }
        let user = {email: this.state.email, password: this.state.password}
        this.props.createUser(user);
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

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: bindActionCreators(createUser, dispatch)
    }
};

const mapStateToProps = (state)=>{
    return {
        registerError: state.createUserError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);