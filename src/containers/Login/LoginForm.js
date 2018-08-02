import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Form = styled.form`
  width: 500px;
  height: 300px;
  border: 1px solid black;
`;

export default class LoginForm extends Component {
  render() {
    return (
      <div>
      <Form>
        <h1>Login</h1>
        <Input
        placeholder="Placeholder"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Placeholder"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        
        <Icon >send</Icon>
      </Button>
      </Form>
      <Link to='/dash'>Send </Link>
      </div>
    )
  }
}
