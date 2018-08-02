import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Main from '../../containers/mainPage';
import {openSideMenu, closeSideMenu} from '../../redux/actions/sidemenu';


const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
 
  
  
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  flex-direction: column;
  > a {
    text-decoration: none;
    font-weight: 900;
  }
`;
const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 4rem;
  z-index: 99;
  width: 15%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: 0.5s;
  transform: translateX(-100%);
  
`;

const CloseBtn = styled.button`
  position: fixed; 
  top: 50px;
  right: 2%;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: #000;
  border: 2px solid #000;
  z-index: 101;
`;

class SideBar extends Component {
  

  onBtnMenuClick = () => {
    this.props.openSideMenu();
  }
  onCloseSideMenu = () => {
    this.props.closeSideMenu()
  }

  render() {
    const { isOpen, offset } = this.props;
    console.log(offset)
    return (
      <Wrapper offset={offset} isOpen={isOpen}>
        <Menu offset={offset} className={isOpen === 'OPEN' ? 'side-menu_active' : ''}>
          
          <CloseBtn onClick={() => this.onCloseSideMenu()}> C</CloseBtn>
          <Nav >
            <a href="/">Главная</a>
            <a href="/">Новости</a>
            <a href="/">Контакты</a>
            <a href="/">Портфолио</a>
          </Nav>
        </Menu>
      </Wrapper>
    )
  }
}
const mapStateToProps = state => ({
  offset: state.scroll.offset,
  isOpen: state.sidemenu.open
})
const mapDispatchToPorps = dispatch => ({
  openSideMenu: () => {dispatch(openSideMenu())},
  closeSideMenu: () => {dispatch(closeSideMenu())}
})

export default connect(mapStateToProps, mapDispatchToPorps)(SideBar)
