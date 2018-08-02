import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, RowComp } from '../StyleComp';
import savlLogo from '../../img/icons/Logo-w.svg';

import AppStore from '../../img/AppStore.svg';
import Googleplay from '../../img/Googleplay_small.svg';

const SectionFooter = styled.div`
  padding: 49px 0 46px;
  background-image: -webkit-gradient(linear, left bottom, left top, from(#202743), to(#323d63));
  background-image: -webkit-linear-gradient(bottom, #202743, #323d63);
  background-image: linear-gradient(to top, #202743, #323d63);
`;
const Row = RowComp.extend`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
`;
const RowBtn = RowComp.extend`
  margin-left: 9%;
`;
const Logo = styled.div`
  color: #fff;
  margin-bottom: 10px;
  > img {
    width: 98px;
    height: 34px;
  }
`;
const ButtonSvg = styled.a`
  margin-right: ${props => props.left ? '20px' : 0};
  > img {
    display: block;
    width: 172px;
    height: 55px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    -webkit-transition: -webkit-box-shadow 0.2s;
    transition: -webkit-box-shadow 0.2s;
    transition: box-shadow 0.2s;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  }
`;
const SocRow = RowComp.extend`
  margin-left: auto;
  margin-right: 5%;
`;
const SocBtn = styled.a`
    width: 37px;
    height: 37px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    /* -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff; */
    margin-right: 16px;
    color: #fff;
    position: relative;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    > svg {
      position: relative;
    }
    &:before {
      content: '';
      background-image: -webkit-linear-gradient(315deg, #4984ff, #2c53a6);
      background-image: linear-gradient(135deg, #4984ff, #2c53a6);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      opacity: 0;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;
      z-index: 0;
    }
    &:hover {
      -webkit-box-shadow: none;
      box-shadow: none;
      &:before {
        opacity: 1;
      }
    }
`;

export default class Footer extends Component {
  state = {
    onScreen: false,
  }
  onViewScreen = () => {
      this.setState({
        onScreen: true,
      });
  }
  
  render() {
    const { onScreen } = this.state; 
    return (
      <Waypoint
        onEnter={this.onViewScreen}
      >
        <Animated animationIn="fadeIn" isVisible={onScreen}>
          <SectionFooter>
            <Container>
              <Row>
                <Logo>
                  <img src={savlLogo} alt="" />
                </Logo>
                <RowBtn>
                  <ButtonSvg left href="">
                    <img src={AppStore} alt="" />
                  </ButtonSvg>
                  <ButtonSvg href="">
                    <img src={Googleplay} alt="" />
                  </ButtonSvg>
                </RowBtn>
                <SocRow>
                  <SocBtn>
                    <svg id="a26f685c-f84f-4e3a-9f9f-b5af86a81d95" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M22.41,11.11v2.38H21a1.33,1.33,0,0,0-1,.32,1.49,1.49,0,0,0-.27,1v1.7h2.65L22,19.16h-2.3V26H16.9V19.16H14.59V16.49H16.9v-2a3.48,3.48,0,0,1,.94-2.6A3.42,3.42,0,0,1,20.35,11,15,15,0,0,1,22.41,11.11Z" style={{fill:'#fff'}}/></svg>
                  </SocBtn>
                  <SocBtn>
                   <svg id="e44c4a15-e282-47cb-aade-909caa092341" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M18.5,14.74a3.75,3.75,0,0,0-3.76,3.76,3.75,3.75,0,0,0,3.76,3.76,3.75,3.75,0,0,0,3.76-3.76,3.75,3.75,0,0,0-3.76-3.76Zm1.73,5.49a2.44,2.44,0,1,1,.72-1.73A2.35,2.35,0,0,1,20.23,20.23Z" style={{fill: '#fff'}}/><path d="M22.42,13.71A.88.88,0,1,0,23,14,.85.85,0,0,0,22.42,13.71Z" style={{fill: '#fff'}}/><path d="M25.79,15.47A4.48,4.48,0,0,0,24.6,12.4a4.48,4.48,0,0,0-3.08-1.18q-.84,0-3,0t-3,0A4.48,4.48,0,0,0,12.4,12.4a4.48,4.48,0,0,0-1.18,3.07q0,.84,0,3t0,3A4.48,4.48,0,0,0,12.4,24.6a4.49,4.49,0,0,0,3.08,1.18q.84,0,3,0t3,0A4.48,4.48,0,0,0,24.6,24.6a4.48,4.48,0,0,0,1.18-3.07q0-.84,0-3T25.79,15.47Zm-1.27,3.76q0,.66,0,1c0,.23,0,.54,0,.92a7.65,7.65,0,0,1-.1,1,3.81,3.81,0,0,1-.18.68,2.5,2.5,0,0,1-1.39,1.39,3.81,3.81,0,0,1-.68.18,7.5,7.5,0,0,1-1,.1l-.92,0H16.76l-.92,0a7.5,7.5,0,0,1-1-.1,3.81,3.81,0,0,1-.68-.18,2.5,2.5,0,0,1-1.39-1.39,3.81,3.81,0,0,1-.18-.68,7.48,7.48,0,0,1-.1-1c0-.38,0-.69,0-.92s0-.57,0-1,0-.69,0-.73,0-.29,0-.73,0-.78,0-1,0-.54,0-.92a7.5,7.5,0,0,1,.1-1,3.81,3.81,0,0,1,.18-.68,2.5,2.5,0,0,1,1.39-1.39,3.81,3.81,0,0,1,.68-.18,7.58,7.58,0,0,1,1-.1l.92,0h3.48l.92,0a7.58,7.58,0,0,1,1,.1,3.81,3.81,0,0,1,.68.18,2.5,2.5,0,0,1,1.39,1.39,3.81,3.81,0,0,1,.18.68,7.67,7.67,0,0,1,.1,1q0,.58,0,.92t0,1q0,.66,0,.73S24.52,18.79,24.52,19.23Z" style={{fill: '#fff'}}/></svg>
                  </SocBtn>
                  <SocBtn>
                    <svg id="fa4d3194-6c24-4d1f-b7bd-96ffff05deea" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M18,22.58,16.24,24.3a.92.92,0,0,1-.72.3.37.37,0,0,1-.37-.29c-.45-1.38-.9-2.76-1.34-4.15a.32.32,0,0,0-.24-.24l-3.14-1a1.79,1.79,0,0,1-.46-.21.33.33,0,0,1-.05-.55,2.13,2.13,0,0,1,.61-.38c1.28-.51,2.57-1,3.86-1.5l9.81-3.79a.7.7,0,0,1,1,.77A11.58,11.58,0,0,1,25,14.55q-1.06,5-2.13,10.06c-.17.8-.73,1-1.38.52L18.17,22.7Zm-2.46,1h0a.77.77,0,0,0,0-.09c.07-.76.14-1.52.21-2.28a.56.56,0,0,1,.2-.4l3-2.72,3.34-3a.94.94,0,0,0,.14-.25.94.94,0,0,0-.31,0,1.36,1.36,0,0,0-.37.18l-7.38,4.65a.22.22,0,0,0-.11.31c.18.52.35,1,.52,1.57Z" style={{fill: '#fff'}}/></svg>
                  </SocBtn>
                </SocRow>
              </Row>
            </Container>
          </SectionFooter>
        </Animated>
      </Waypoint>
    )
  }
}

