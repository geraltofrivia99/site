import React from 'react';
import styled from 'styled-components';

import GoUp from '../../img/GoUp.svg';

const Wrapper = styled.div`
  
  margin-right: 30px;
  color: #d7c0ff;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
  position: absolute;
  bottom: 70px;
  left: 224px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  &:hover img {
    -webkit-box-shadow: 0 2px 21.3px 3.8px rgba(7, 19, 104, 0.15);
    box-shadow: 0 2px 21.3px 3.8px rgba(7, 19, 104, 0.15);
  }
  > img {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    fill: #9971ff;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    width: 50px;
    height: 50px;
  }
  > span {
    font-family: 'Futura', Verdana, sans-serif;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #acb1c6;
    margin-left: 1rem;
  }
`;

export const ScrollUp = ({onClick}) => (
  <Wrapper>
    <img src={GoUp} onClick={() => onClick()}/>
    <span>Go Up</span>
  </Wrapper>
);

