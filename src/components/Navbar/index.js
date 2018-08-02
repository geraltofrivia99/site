import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Navbar, NavItem, Nav, NavLink } from 'reactstrap';
import './style.css';
import { saveOffset } from '../../redux/actions/scroll';
import { openSideMenu } from '../../redux/actions/sidemenu';


import SocBut from './socButs';

const NavBarStyled = styled(Navbar)`
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease;
  /* background-color: ${props => props.opacity ? '#000' : 'inherit'}; */
  background-color: #000;
`;

const Logo = styled.div`
  font-family: 'Federo', sans-serif;
  font-size: 2em;
  font-weight: 300; 
   > span {
    /* font-family: 'Black And White Picture', sans-serif; */
    font-size: 1.2em;
  }
`;
const NavStyled = styled(Nav)`
  display: flex;
  justify-content: center;
  width: 100%;

`;
const MenuOpenBtn = styled.button`
  position: absolute; 
  
  left: 2%;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #000;
`;


class NavBar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', () => this.props.saveoffset(window.pageYOffset));
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', () => this.props.saveoffset(window.pageYOffset));
  }
  onBtnMenuClick = () => {
    this.props.openSideMenu();
  }
 
  render() {
    const { offset,logoEvent } = this.props;
    return (
      <div >
        <NavBarStyled opacity={offset > 800 ? true : false}>
          <SocBut />
          {/* <MenuOpenBtn onClick={() => this.onBtnMenuClick()}>O</MenuOpenBtn> */}
          <NavStyled >
            <NavItem>
            <Logo onClick={() => logoEvent()}><small>the</small><span>New</span>s</Logo>
            </NavItem> 
          </NavStyled>
        </NavBarStyled>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  offset: state.scroll.offset
});

const mapDispatchToProps = dispatch => ({
  saveoffset: (offset) => { dispatch(saveOffset(offset)); }, 
  openSideMenu: () => {dispatch(openSideMenu())},
});

export default connect(mapStatetoProps, mapDispatchToProps)(NavBar)