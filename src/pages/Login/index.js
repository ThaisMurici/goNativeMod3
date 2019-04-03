import React, { Component } from 'react';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

import api from '~/services/api';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;

    try {
      await api.get(`users/${username}`);
    } catch (error) {}
  };

  render() {
    const { username } = this.state;
    return (
      <Container>
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
