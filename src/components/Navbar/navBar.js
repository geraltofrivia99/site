import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {Container, RowComp} from '../StyleComp';
// import { SocBtn, SocBtnDark } from '../Navbar/Socbtn';
import savlLogo from '../../img/icons/Logo.svg';


const OpacityAnim = keyframes`
  100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1
	}
`;

const NavBarStyled = styled.div`
    position: ${props => props.position};
    top: 0;
    left: 0;
    right: 0;
    font-family: 'Futura', Verdana, sans-serif;
    font-weight: 400;
    z-index: 10;
    padding: 28px 0;
    -webkit-transform: ${props => props.translate};
    -ms-transform: ${props => props.translate};
    transform: ${props => props.translate};
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
    transition: transform 0.4s, -webkit-transform 0.4s;
    transition: all 0.3s ease;
  /* background-color: ${props => props.opacity ? '#000' : 'inherit'}; */
    /* background-color: ${props => props.translate === 'translateY(0)' && window.pageYOffset === 0 ? 'inherit' : '#fff'}; */
    background-color: ${props => props.position === 'absolute' ? 'inherit' : '#fff'};
`;
const Row = RowComp.extend`
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;
const Logo = RowComp.extend`
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #1a1b1f;
    margin-bottom: 8px;
    background-color: transparent;
    > img {
      width: 97.99px;
      height: 34.26px;
    }
`;
const RowUpdateLink = RowComp.extend`
    margin-left: 11.5%;
    > div {
      margin-right: 0;
      font-size: 19px;
      font-weight: 500;
      margin-right: 21px;
      padding: 15px;
      position: relative;
      opacity: 0;
      -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      transform: translateY(-10px);
      -webkit-animation: ${OpacityAnim} 0.3s forwards;
      animation: ${OpacityAnim} 0.3s forwards;
      span {
        color: #58637e;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
      }
    }
`;
const RowSocbut = RowComp.extend`
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


class NavBar extends Component {
  state = {
    prev: window.pageYOffset,
    cur: null,
    translate: 'translateY(0)',
    position: 'absolute',
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => this.scrolling())
  }
  scrolling = () => {
    const num = 200;
    const { prev } = this.state;
    const cur = window.pageYOffset;
    if (cur > num) {
      this.setState({position: 'fixed', translate: 'translateY(-130%)' })
      if (prev > cur) {
        // ReactDOM.findDOMNode(this.NavigationTop).style.top = '0';
        this.setState({ translate: 'translateY(0)' })
      } else {
        // ReactDOM.findDOMNode(this.NavigationTop).style.top = '-4rem';
        this.setState({ translate: 'translateY(-130%)' })
      }
      this.setState({
        prev: cur
      })
    }
    else {this.setState({ position: 'absolute' })}
  }
  render() {
    return (
      <NavBarStyled ref={node => this.NavigationTop = node} translate={this.state.translate} position={this.state.position}>
        <Container>
          <Row>
            <Logo>
              <img src={savlLogo} alt="" />
            </Logo>
            <RowUpdateLink>
            <div>
              <Link to="/"><span>Updates</span></Link>
            </div>
          </RowUpdateLink>
            <RowSocbut>
              <SocBtn>
                  <svg id="a26f685c-f84f-4e3a-9f9f-b5af86a81d95" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M22.41,11.11v2.38H21a1.33,1.33,0,0,0-1,.32,1.49,1.49,0,0,0-.27,1v1.7h2.65L22,19.16h-2.3V26H16.9V19.16H14.59V16.49H16.9v-2a3.48,3.48,0,0,1,.94-2.6A3.42,3.42,0,0,1,20.35,11,15,15,0,0,1,22.41,11.11Z" style={{fill:'#fff'}}/></svg>
                  </SocBtn>
                  <SocBtn>
                   <svg id="e44c4a15-e282-47cb-aade-909caa092341" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M18.5,14.74a3.75,3.75,0,0,0-3.76,3.76,3.75,3.75,0,0,0,3.76,3.76,3.75,3.75,0,0,0,3.76-3.76,3.75,3.75,0,0,0-3.76-3.76Zm1.73,5.49a2.44,2.44,0,1,1,.72-1.73A2.35,2.35,0,0,1,20.23,20.23Z" style={{fill: '#fff'}}/><path d="M22.42,13.71A.88.88,0,1,0,23,14,.85.85,0,0,0,22.42,13.71Z" style={{fill: '#fff'}}/><path d="M25.79,15.47A4.48,4.48,0,0,0,24.6,12.4a4.48,4.48,0,0,0-3.08-1.18q-.84,0-3,0t-3,0A4.48,4.48,0,0,0,12.4,12.4a4.48,4.48,0,0,0-1.18,3.07q0,.84,0,3t0,3A4.48,4.48,0,0,0,12.4,24.6a4.49,4.49,0,0,0,3.08,1.18q.84,0,3,0t3,0A4.48,4.48,0,0,0,24.6,24.6a4.48,4.48,0,0,0,1.18-3.07q0-.84,0-3T25.79,15.47Zm-1.27,3.76q0,.66,0,1c0,.23,0,.54,0,.92a7.65,7.65,0,0,1-.1,1,3.81,3.81,0,0,1-.18.68,2.5,2.5,0,0,1-1.39,1.39,3.81,3.81,0,0,1-.68.18,7.5,7.5,0,0,1-1,.1l-.92,0H16.76l-.92,0a7.5,7.5,0,0,1-1-.1,3.81,3.81,0,0,1-.68-.18,2.5,2.5,0,0,1-1.39-1.39,3.81,3.81,0,0,1-.18-.68,7.48,7.48,0,0,1-.1-1c0-.38,0-.69,0-.92s0-.57,0-1,0-.69,0-.73,0-.29,0-.73,0-.78,0-1,0-.54,0-.92a7.5,7.5,0,0,1,.1-1,3.81,3.81,0,0,1,.18-.68,2.5,2.5,0,0,1,1.39-1.39,3.81,3.81,0,0,1,.68-.18,7.58,7.58,0,0,1,1-.1l.92,0h3.48l.92,0a7.58,7.58,0,0,1,1,.1,3.81,3.81,0,0,1,.68.18,2.5,2.5,0,0,1,1.39,1.39,3.81,3.81,0,0,1,.18.68,7.67,7.67,0,0,1,.1,1q0,.58,0,.92t0,1q0,.66,0,.73S24.52,18.79,24.52,19.23Z" style={{fill: '#fff'}}/></svg>
                  </SocBtn>
                  <SocBtn>
                    <svg id="fa4d3194-6c24-4d1f-b7bd-96ffff05deea" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><title>4Artboard 1</title><path d="M18.5,1A17.5,17.5,0,1,1,1,18.5,17.52,17.52,0,0,1,18.5,1m0-1A18.5,18.5,0,1,0,37,18.5,18.5,18.5,0,0,0,18.5,0Z" style={{fill: '#fff'}}/><path d="M18,22.58,16.24,24.3a.92.92,0,0,1-.72.3.37.37,0,0,1-.37-.29c-.45-1.38-.9-2.76-1.34-4.15a.32.32,0,0,0-.24-.24l-3.14-1a1.79,1.79,0,0,1-.46-.21.33.33,0,0,1-.05-.55,2.13,2.13,0,0,1,.61-.38c1.28-.51,2.57-1,3.86-1.5l9.81-3.79a.7.7,0,0,1,1,.77A11.58,11.58,0,0,1,25,14.55q-1.06,5-2.13,10.06c-.17.8-.73,1-1.38.52L18.17,22.7Zm-2.46,1h0a.77.77,0,0,0,0-.09c.07-.76.14-1.52.21-2.28a.56.56,0,0,1,.2-.4l3-2.72,3.34-3a.94.94,0,0,0,.14-.25.94.94,0,0,0-.31,0,1.36,1.36,0,0,0-.37.18l-7.38,4.65a.22.22,0,0,0-.11.31c.18.52.35,1,.52,1.57Z" style={{fill: '#fff'}}/></svg>
                  </SocBtn>
                </RowSocbut>
          </Row>
        </Container>
      </NavBarStyled>
    );
  }
}



export default (NavBar)