import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, TitleComp, Input, RowComp } from '../StyleComp';
import { ScrollUp } from '../Scroll/MouseUp';

import Podpiska from '../../img/bg/Podpiska.jpg';
import mockupSubs from '../../img/mockup_subs.png';
import mockupSubsLarge from '../../img/mockup_subs_2x.png';

const fadeInRight = keyframes`
  100% {
     opacity: 1;
     -webkit-transform: translate3d(0,0,0);
     transform: translate3d(0,0,0);
   }
`;

const Section = styled.div`
  position: relative;
  padding: 174px 0 210px;
  background-image: url(${Podpiska});
  background-size: cover;
  /* background-attachment: fixed; */
  z-index: 1;
`;
const Content = styled.div`
  width: 58%;  
  > div {
    position: relative;
  }
`;
const Row = RowComp.extend`

`;
const Form = styled.form`
  width: 89%;
  > ${Row} > div {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-right: 30px;
  }
`;
const InputSub = Input.extend`
  background-color: #ffffff;
  text-indent: 37px;
`;
const Title = TitleComp.extend`
  color: #fff;
  margin-bottom: 59px;
  font-size: 60px;
  line-height: 1.2;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 60px;
    font-size: 19px;
    text-align: center;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    font-family: 'Futura', Verdana, sans-serif;
    font-weight: 500;
    letter-spacing: 0.2px;
    text-align: center;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    border: none;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    outline: none;
    /* line-height: 1.15; */
    &:hover {
      -webkit-box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.2);
      box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.2);
      -webkit-filter: brightness(80%) contrast(155%);
      filter: brightness(80%) contrast(155%);
    }
`;
const SubsImg = styled.div`
  position: absolute;
  right: -309px;
  top: 208px;
  opacity: 0;
  -webkit-transform: translate3d(100px,0,0);
  transform: translate3d(100px,0,0);
  pointer-events: none;
  -webkit-animation: ${props => props.onScreen ? fadeInRight : ' '} 0.5s 0.3s forwards ease-out;
   animation: ${props => props.onScreen ? fadeInRight : ' '} 0.5s 0.3s forwards ease-out;
  transition: opacity 0.5;
  img {
    max-width: 100%;
    height: auto;
  }
`;


export default class Subscribe extends Component {
  state = {
    onScreen: false,
  }
  onViewScreen = () => {
    console.log('Enter');
      this.setState({
        onScreen: true,
      });
  }
  onScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}
  render() {
    const { onScreen } = this.state;
    return (
      <Section>
        <Container>
          <Content>
            <Title>
              Subscribe for our latest updates
            </Title>
            <div>
              <Waypoint
                onEnter={this.onViewScreen}
              >
                <Animated animationIn="fadeInUp" isVisible={onScreen}>
                  <Form>
                  <Row>
                    <div>
                      <InputSub type="email" placeholder="email"/>
                    </div>
                    <Button>Subscribe</Button>
                  </Row>
                  </Form>
                </Animated>
              </Waypoint>
            </div>
          </Content>
        </Container>
        <ScrollUp onClick={this.onScrollTop}/>
            <SubsImg onScreen={onScreen}>
              <picture>
                <source srcSet={`${mockupSubs}, ${mockupSubsLarge} 2x`} />
                <img src={mockupSubs} alt=" "/>
              </picture>
            </SubsImg>
      </Section>
    )
  }
}
