import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import shopBg from '../../img/shop-bg.jpg';
import mock from '../../img/mockup_one.png';
import AppStore from '../../img/AppStore.svg';
import GooglePlay from '../../img/Googleplay_Large.svg';
import { Container, RowComp } from '../StyleComp';

const RectAnim = keyframes`
  100% {
     opacity: 1;
     -webkit-transform: translate3d(0,-50%,0) rotate(-43deg);
     transform: translate3d(0,-50%,0) rotate(-43deg);
   }
 }
`;

const Section = styled.div`
  background-image: url(${shopBg});
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
`;
const SectionWrapper = styled.div`
 background: inherit;
 position: relative;
`;
const Row = RowComp.extend`
  padding: 160px 0 160px;
`;
const Rect = styled.div`
    position: absolute;
    /* opacity: 0; */
    width: 800px;
    height: 800px;
    -webkit-border-radius: 150px;
    border-radius: 150px;
    background-image: -webkit-linear-gradient(214deg, #c64df9, #525ffc);
    background-image: linear-gradient(236deg, #c64df9, #525ffc);
    -webkit-box-shadow: 0 0 114px 0 rgba(28, 0, 87, 0.16);
    box-shadow: 0 0 114px 0 rgba(28, 0, 87, 0.16);
    top: 50%;
    left: -294px;
    -webkit-transform: translate3d(-100px,-50%,0) rotate(-43deg);
    transform: translate3d(-100px,-50%,0) rotate(-43deg);
    -webkit-animation: ${props => props.onScreen ? RectAnim : ' '} 0.3s forwards ease-out;
    animation: ${props => props.onScreen ? RectAnim : ' '} 0.3s forwards ease-out;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
`;
const ImageWrapper = styled.div`
  position: absolute;
  left: 200px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;
const Img = styled.img`
  -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.15));
    filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.15));
`;
const ContentWrapper = styled.div`
  height: 100%;
  width: 49%;
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    font-size: 60px;
    margin-bottom: 22px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-family: 'Futura', Verdana, sans-serif;
    font-size: 52px;
    font-weight: 600;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  > div {
    font-size: 22px;
    line-height: 1.55;
    width: 90%;
    margin-bottom: 26px;
    
  }
  > p {
    font-size: 22px;
    line-height: 1.55;
    width: 90%;
    margin-bottom: 26px;
  }
`;
const SvgWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const SvgBtn = styled.div`
  margin-right: 35px;
  > img {
    -webkit-border-radius: 37px;
    border-radius: 37px;
    -webkit-transition: -webkit-box-shadow 0.2s;
    transition: -webkit-box-shadow 0.2s;
    transition: box-shadow 0.2s;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    width: 235px;
    height: 75px;
  }
`;

export default class OneStopSec extends Component {
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
      <Waypoint onEnter={this.onViewScreen}>
        <Section>
         <SectionWrapper>
          <Rect onScreen={onScreen}/>
            <Container>
              <Row>
              <Animated animationIn="fadeIn" animationInDelay={100} isVisible={onScreen}>
                <ImageWrapper>
                  <Img src={mock} alt=""/>
                </ImageWrapper>
              </Animated>
                <ContentWrapper>
                  <Animated animationIn="fadeInUp" animationInDelay={300} isVisible={onScreen}>
                    <h2>
                      One Stop Shop
                    </h2>
                    <div>
                      All of SAVL’s functionality is accessible via a sleek and easy-to-use mobile app. The app is currently under development, with new features being added all the time.
                    </div>
                    <p>
                      <b>Download the app, sync your contacts and you’re ready to go.</b>
                    </p>
                  <SvgWrapper>
                    <SvgBtn>
                      <img src={AppStore} alt="" />
                    </SvgBtn>
                    <SvgBtn>
                      <img src={GooglePlay} alt="" />
                    </SvgBtn>
                  </SvgWrapper>
                </Animated>
              </ContentWrapper>
              </Row>
            </Container>
         </SectionWrapper>
        </Section>
      </Waypoint>
    )
  }
}
