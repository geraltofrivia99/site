import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Login extends Component {
  render() {
    return (
      <Wrapper>
        {/* <LoginForm /> */}
        hello
        <NavLink to='/dash'> send</NavLink>
      </Wrapper>
    )
  }
}
