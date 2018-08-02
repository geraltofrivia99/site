import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {Container, RowComp} from '../StyleComp';
import { SocBtn, SocBtnDark } from '../Navbar/Socbtn';
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
// const SocBtns = styled(SocBtn)`
//   /* border: ${props => props.top === 0 ? '1px solid #fffff' : '1px solid #f2f0fe'};
//   border: 1px solid black;
//   color: ${props => props.top === 0 ? '#fffff' : '#f2f0fe'}; */
// `;


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
          {this.state.translate !== 'translateY(0)' &&
          <RowSocbut>
            <SocBtn >
              <i className="fab fa-facebook-f"></i>
            </SocBtn>
            <SocBtn top={this.state.top}>
              <i className="fab fa-facebook-f"></i>
            </SocBtn>
            <SocBtn top={this.state.top}>
              <i className="fab fa-facebook-f"></i>
            </SocBtn>
          </RowSocbut>}
          {this.state.translate === 'translateY(0)' &&
          <RowSocbut>
            <SocBtnDark >
              <i className="fab fa-facebook-f"></i>
            </SocBtnDark>
            <SocBtnDark top={this.state.top}>
              <i className="fab fa-facebook-f"></i>
            </SocBtnDark>
            <SocBtnDark top={this.state.top}>
              <i className="fab fa-facebook-f"></i>
            </SocBtnDark>
          </RowSocbut>}
          </Row>
        </Container>
      </NavBarStyled>
    );
  }
}



export default (NavBar)