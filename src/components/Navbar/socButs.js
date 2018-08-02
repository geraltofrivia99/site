import React, { Component } from 'react';
import styled from 'styled-components';
import yt from '../../img/yt.svg';
import rss from '../../img/rss.svg';
import tw from '../../img/twitter.svg';
import vk from '../../img/vk-logo.svg';


const Wrapper = styled.div`
  position: fixed;
  top: 0.5%;
  right: 1%;

`;
const SocImg = styled.img`
  height: 32px;
  width: 32px;
  
`;
const RssImg = styled.img`
  height: 22px;
  width: 22px;
  
`;

export default class SocBut extends Component {
  state = {
    activeMenu: true,
    activeLink: false
  }
  activeMenu = (e) => {
    e.preventDefault();
    this.setState({
      activeMenu: !this.state.activeMenu,
      activeLink: !this.state.activeLink
    })
  } 
  render() {
    const { activeLink, activeMenu } = this.state;
    return (
      <Wrapper>
        <div className="menu-block">
          <a href="" className={activeLink ? 'menu-btn menu-btn_active' : 'menu-btn'} onClick={(e) => this.activeMenu(e)}>
            {activeMenu && <RssImg src={rss}/>}
            {!activeMenu && <span />}
          </a>
      
          <nav className={activeLink? 'menu menu_active' : 'menu'}>
            <a href="/"><SocImg src={yt}/></a>
            <a href="/"><SocImg src={vk}/></a>
            <a href="/"><SocImg src={tw}/></a>
          </nav>
          
        </div>
      </Wrapper>
    )
  }
}
