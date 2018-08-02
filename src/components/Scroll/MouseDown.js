import React from 'react';
import styled from 'styled-components';
import mouse from '../../img/mouse.svg';

const Mouse = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 3%;
    left: 50%;
    margin-left: -22px;
  `;

export const MouseDown = ({toElScrol}) => (
  <Mouse
    src={mouse}
    onClick={() => toElScrol()}
></Mouse>
);
