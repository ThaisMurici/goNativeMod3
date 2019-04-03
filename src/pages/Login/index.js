import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '~/store/actions/login';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

import api from '~/services/api';

class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure, navigation } = this.props;

    try {
      await api.get(`users/${username}`);
      navigation.navigate('Repositories');
      loginSuccess(username);
    } catch (error) {
      loginFailure();
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;
    return (
      <Container>
        {error && <Error>User does not exist.</Error>}
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your username here"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
