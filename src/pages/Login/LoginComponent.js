/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input/InputComponent';
import Button from '../../components/Button/ButtonComponent';

import { Container, Box, Title, Form, Footer } from './LoginStyles';

const LoginComponent = props => {
  const { handleSubmit, username, setUsername, password, setPassword } = props;

  return (
    <Container>
      <Box>
        <Title>Bem Vindo</Title>
        <Form>
          <label>Username</label>
          <Input
            hasBox
            id='username'
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <label>Password</label>
          <Input
            hasBox
            id='username'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Footer>
            <Button onClick={e => handleSubmit(e)}>Login</Button>
          </Footer>
        </Form>
      </Box>
    </Container>
  );
};

LoginComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default LoginComponent;
