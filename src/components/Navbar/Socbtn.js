import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 16px;
  border: 1px solid #ffffff;
  color: #fff;
  transition: color 0.5s ease-out;
`;
const BtnDark = Btn.extend`
  border: 1px solid #58637e;
  color: #58637e;
`;

export const SocBtn = ({ children }) => (
  <Btn>
    {children}
  </Btn>
)

export const SocBtnDark = ({children}) => (
  <BtnDark>
    {children}
  </BtnDark>
)
