import React, { Component } from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
// import Sup from '../../img/scrollup.svg';
import Twl from '../../img/Twlogo.png';
import styled from 'styled-components';
import { checkSection } from '../../redux/actions/sections';
import scrollToComponent from 'react-scroll-to-component';

import './style.css';



const Twlogo = styled.img`
  height: 25px;
  width: 25px;
  margin-top: -2px;
`;
const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  right: 2%;
  color: red;
  min-height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  > div {
    padding: .5rem;
    display: flex;
    align-items: center;
    position: relative;
    > a {
      transition: 0.4s;
      position: absolute;
      left: calc(50% - 15px);
      top: calc(50% - 15px);
      z-index: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 120px;
      opacity: 0;
    }
    &:nth-child(1) > a {
      transition-delay: 0.1s;

    }
    &:nth-child(2) > a {
      transition-delay: 0.15s;
      
    }
    &:nth-child(3) > a {
      transition-delay: 0.2s;
    }
    &:nth-child(4) > a {
      transition-delay: 0.25s;
    }
  }
`;
const ButSecList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: 1px solid #000;
  border-radius: 25px;
  width: 23px;
  height: 23px;
  margin-left: 1rem;
  outline: 0!important;
  padding: 0;
`;
const SecTitle = styled.span`

`;

class ScrollList extends Component {
  state = {
    active: false
  }
  onClickButSec = (id) => {
    this.props.checkSection(id)
    scrollToComponent(this.props.Num, { offset: -200, align: 'top', duration: 1500, ease:'inExpo'})
    
  }
  render() {
    const { sections, checkSection } = this.props;
    const { active } = this.state;
    return (
      <Wrapper
        onMouseEnter={() => this.setState({ active: !active })}
        onMouseLeave={() => this.setState({ active: !active })}
      >
        {sections.map(c => (
          <div className={active ? 'menu_a' : ''} key={c.id} 
          >
            <a>{active && c.title}</a>
            <ButSecList onClick={() => this.onClickButSec(c.id)}>{c.active && <Twlogo src={Twl}/>}</ButSecList>
          </div>
        ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  sections: state.sections.list
});
const mapDispatchToProps = dispatch => ({
  checkSection: (id) => { dispatch(checkSection(id)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollList)
