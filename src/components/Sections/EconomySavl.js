import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, TitleComp, RowComp } from '../StyleComp';

import change1 from '../../img/change1.png';
import change1Large from '../../img/change1_2x.png';
import change1Dop from '../../img/change1-dop.png';
import change1DopLarge from '../../img/change1-dop_2x.png';
import change2Dop from '../../img/change2-dop.png';
import change2 from '../../img/change2.png';
import change2Large from '../../img/change2_2x.png';
import change2DopLarge from '../../img/change2-dop_2x.png';

const Rect1Anim = keyframes`
  100% {
     opacity: 1;
     -webkit-transform: translate3d(0,0,0) rotate(-48deg);
     transform: translate3d(0,0,0) rotate(-48deg);
   }
`;
const Section = styled.div`
  padding: 66px 0 54px;
  background: #f9f8fe;
  position: relative;
`;
const Rect = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  -webkit-border-radius: 118px;
  border-radius: 118px;
  background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
  background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
  background-image: linear-gradient(to left, #ff6a75, #ff9f74);
  top: 256px;
  left: -350px;
  opacity: 0;
  -webkit-transform: translate3d(100px,0,0) rotate(-48deg);
  transform: translate3d(100px,0,0) rotate(-48deg);
  -webkit-animation: ${props => props.onScreenOne ? Rect1Anim : ' '} 0.3s forwards ease-out;
   animation: ${props => props.onScreenOne ? Rect1Anim : ' '} 0.3s forwards ease-out;
`;
const Rect2 = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  background-image: -webkit-gradient(linear, left top, right top, from(#8a68f0), to(#795dee));
  background-image: -webkit-linear-gradient(left, #8a68f0, #795dee);
  background-image: linear-gradient(to right, #8a68f0, #795dee);
  top: 1300px;
  right: -360px;
  -webkit-transform: translate3d(-100px,0,0) rotate(-48deg);
  transform: translate3d(-100px,0,0) rotate(-48deg);
  -webkit-animation: ${props => props.onScreenThree ? Rect1Anim : ' '} 0.3s forwards ease-out;
  animation: ${props => props.onScreenThree ? Rect1Anim : ' '} 0.3s forwards ease-out;
`;
const Title = TitleComp.extend`
  text-align: center;
  margin-bottom: 24px;
  font-weight: 900;
`;
const Subtitle = styled.div`
  width: 85%;
  margin: 0 auto 175px;
  font-family: Avenir, Verdana, sans-serif;
  text-align: center;
  font-size: 22px;
  line-height: 1.55;
  > b {
    font-weight: 600;
  }
`;
const Wrapper = styled.div`
  margin-bottom: 114px;
  position: relative;
`;
const Row = RowComp.extend`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 100px -15px 130px;
`;
const ItemWrapper = styled.div`
  position: relative;
  width: 50%;
  padding: 0 15px;
  text-align: ${props => props.Right ? 'right' : 'left'};
`;
const Img = styled.img`
    display: inline-block;
    -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.1));
    filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.1));
    max-width: 100%;
    height: auto;
`;
const ImgDop = styled.img`
    position: absolute;
    bottom: -47px;
    right: 65px;
    -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.05));
    filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.05));
    max-width: 100%;
    height: auto;
`;
const TextWrapper = styled.div`
    width: 50%;
    padding: 0 15px;
    > div {
      font-size: 22px;
      margin-bottom: 28px;
      line-height: 1.5;
      color: #5e6881;
      > b {
        display: inline;
        font-weight: 900;
      }
    }
`;
const ItemTitle = styled.h3`
  margin-bottom: 38px;
  line-height: 1.25;
  font-family: 'Futura', Verdana, sans-serif;
  font-size: 44px;
  font-weight: 900;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const Line = styled.div`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.15);
`;


export default class Economy extends Component {
  state = {
    onScreenOne: false,
    onScreenTwo: false,
    onScreenThree: false,
  }
  onViewScreenOne = () => {
      this.setState({
        onScreenOne: true,
      });
  }
  onViewScreenTwo = () => {
    this.setState({
      onScreenTwo: true,
  });
}
  onViewScreenThree = () => {
    this.setState({
      onScreenThree: true,
  });
  }
  render() {
    const { onScreenOne, onScreenTwo, onScreenThree } = this.state;
    return (
      <Section>
        <Rect onScreenOne/>
        <Rect2 onScreenThree/>
        <Container>
          <Waypoint onEnter={this.onViewScreenOne}>
            <Animated animationIn="fadeInUp" animationInDelay={100} isVisible={onScreenOne}>
              <Title>Creating the future economy<br />(Leading the financial services revolution)</Title>
              <Subtitle>
                We simplify and humanize the system of financial relations, rendering traditional banks obsolete. Build your own financial community and deal directly with individuals.<br/><b>No middle institutions needed.</b>
              </Subtitle>
            </Animated>
          </Waypoint>
        </Container>
        <Wrapper>
          <Container>
            <Waypoint onEnter={this.onViewScreenTwo}>
            <Row>
                <ItemWrapper>
                  <Animated animationIn="fadeInLeft" animationInDelay={100} isVisible={onScreenTwo}>
                    <picture>
                      <source srcSet={`${change1}, ${change1Large} 2x`}/>
                        <Img src={change1} alt="" />
                    </picture>
                    <picture>
                      <source srcSet={`${change1Dop}, ${change1DopLarge} 2x`}/>
                        <ImgDop src={change1Dop} alt="" />
                    </picture>
                  </Animated>
                </ItemWrapper>
                <TextWrapper>
                  <Animated animationIn="fadeInRight" animationInDelay={100} isVisible={onScreenTwo}>
                    <ItemTitle>
                      SAVL blockchain
                    </ItemTitle>
                    <div>
                      SAVL’s ecosystem works on our custom-built Ethereum-based platform. We have harnessed the potential of the Ethereum-blockchain to maximise transaction speed.
                    </div>
                    <div>
                      <b>12 seconds</b> is all it takes.
                    </div>
                  </Animated>
                </TextWrapper>
            </Row>
            </Waypoint>
            <Line />
            <Waypoint onEnter={this.onViewScreenThree}>
              <Row>
                <TextWrapper>
                  <Animated animationIn="fadeInLeft" animationInDelay={100} isVisible={onScreenThree}>
                    <ItemTitle>
                      Personal wallet community functions
                    </ItemTitle>
                    <div>
                      SAVL works like a wallet, but one which has access to a global financial community. Through the SAVL app you can build relationships with other users, do business using a secure messaging service, and even manage joint finances. The ratings-based system encourages users to be more transparent, creating a safe and secure environment for cryptocurrency transactions. 
                    </div>
                  </Animated>
                </TextWrapper>
                <ItemWrapper Right>
                  <Animated animationIn="fadeInRight" animationInDelay={100} isVisible={onScreenThree}>
                    <picture>
                      <source srcSet={`${change2}, ${change2Large} 2x`}/>
                      <Img src={change2} alt="" />
                    </picture>
                    <picture>
                      <source srcSet={`${change2Dop}, ${change2DopLarge} 2x`}/>
                      <ImgDop src={change2Dop} alt="" />
                    </picture>
                  </Animated>
                </ItemWrapper>
              </Row>
            </Waypoint>
          </Container>
        </Wrapper>
      </Section>
    )
  }
}
