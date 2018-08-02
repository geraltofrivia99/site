import React, { Component } from 'react'
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, TitleComp } from '../StyleComp';

import eco1 from '../../img/eco-img1.png';
import eco1Large from '../../img/eco-img1_2x.png';
import eco2 from '../../img/eco-img2.png';
import eco2Large from '../../img/eco-img2_2x.png';
import eco3 from '../../img/eco-img3.png';
import eco3Large from '../../img/eco-img3_2x.png';

const Section = styled.div`
  position: relative;
  padding: 170px 0 50px;
  `;
  const Rect = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  -webkit-border-radius: 60px;
  border-radius: 60px;
  background-image: -webkit-gradient(linear, left top, right top, from(#ff6a75), to(#ff9f74));
  background-image: -webkit-linear-gradient(left, #ff6a75, #ff9f74);
  background-image: linear-gradient(to right, #ff6a75, #ff9f74);
  top: 480px;
  right: -323px;
  -webkit-transform: rotate(-48deg);
  -ms-transform: rotate(-48deg);
  transform: rotate(-48deg);
`;
const Rect2 = Rect.extend`
  background-image: -webkit-gradient(linear, left top, right top, from(#8a68f0), to(#795dee));
  background-image: -webkit-linear-gradient(left, #8a68f0, #795dee);
  background-image: linear-gradient(to right, #8a68f0, #795dee);
  top: 1709px;
  left: -380px;
`;
const Title = TitleComp.extend`
  margin-bottom: 95px;
  
`;
const ContentWrapper = styled.div``;
const Row = styled.div`
  position: relative;
  margin-bottom: 142px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
`;
const ImgSec = styled.div`
  width: 51%;
  position: relative;
  text-align: center;
`;
const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: ${props => props.left ? '25px' : 0 };
  margin-left: ${props => props.left ? 0 : '25px' };
  &:before {
    content: '';
    position: absolute;
    top: 31px;
    right: 47px;
    left: ${props => props.left ? ' ' : '47px'};
    width: 100%;
    height: 100%;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 11px 29.6px 8.4px #07136814;
    box-shadow: 0px 11px 29.6px 8.4px #07136814;
    background-color: #f9f8fe;
  }
  > picture > img {
    position: relative;
    display: inline-block;
    -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.12));
    filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.12));
    max-width: 100%;
    height: auto;
  }
`;
const TextSec = styled.div`
  width: 49%;
   h3 {
    margin-bottom: 33px;
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
  }
   div {
    margin-bottom: 30px;
    width: 97%;
    > p {
      margin-bottom: 15px;
      letter-spacing: -0.1px;
    }
    > a {
      font-family: 'Futura', Verdana, sans-serif;
      color: #ff7374;
      font-weight: 500;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 22px;
      margin-top: 26px;
      > svg {
        height: 17px;
        width: 17px;
        -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
        margin-left: 24px;
        -webkit-transition: -webkit-transform 0.2s;
        transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
        transition: transform 0.2s, -webkit-transform 0.2s;
      }
    }
  }
`;
const CommingSoon = styled.div`
  font-family: 'Futura', Verdana, sans-serif;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 18px;
  margin-top: 26px;
  font-weight: 500;
  color: #36c95d;
`;

export default class Ecosystem extends Component {
  state = {
   onScreenOne: false,
   onScreenTwo: false,
   onScreenThree: false,
   onScreenFore: false,
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
  onViewScreenFore = () => {
      this.setState({
        onScreenFore: true,
      });
  }
  render() {
    const { onScreenOne, onScreenTwo, onScreenThree, onScreenFore } = this.state;
    return (
      <Waypoint onEnter={this.onViewScreenOne}>
        <Section>
          <Rect />
          <Rect2 />
          <Container>
            <Animated animationIn="fadeInUp" animationInDelay={100} isVisible={onScreenOne}>
              <Title>
                SAVL ecosystem in action
              </Title>
            </Animated>
            <ContentWrapper>
              <Row>
                <ImgSec>
                  <Animated animationIn="fadeInLeft" animationInDelay={200} isVisible={onScreenOne}>
                    <ImgWrapper left>
                        <picture>
                          <source srcSet={`${eco1}, ${eco1Large} 2x`}/>
                          <img src={eco1} alt=" "/>
                        </picture>
                    </ImgWrapper>
                  </Animated>
                </ImgSec>
                  <TextSec>
                    <Animated animationIn="fadeInRight" animationInDelay={200} isVisible={onScreenOne}>
                    <h3>
                      Saving Wallet
                    </h3>
                    <div>
                      <p>
                        Your personal secure financial vault. A user-encrypted mobile app that works as a savings account for both fiat and crypto currencies.
                      </p>
                      <p>
                        Zero transaction fees, lightning speed and intuitive design.
                      </p>
                      <a href="">
                        <span>Get the app</span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="20 18 16 20">
                          <path d="M26.55 18.95v14.8l-5.1-5.1A.95.95 0 1 0 20.11 30l6.72 6.72.14.12h1.04l.15-.12L34.89 30a.95.95 0 1 0-1.34-1.34l-5.1 5.1V18.95a.95.95 0 0 0-1.9 0z" fill="currentcolor"></path>
                        </svg>
                      </a>
                    </div>
                    </Animated>
                  </TextSec>
              </Row>
              <Waypoint onEnter={this.onViewScreenTwo}>
                <Row>
                  <TextSec>
                  <Animated animationIn="fadeInLeft" animationInDelay={100} isVisible={onScreenTwo}>
                    <h3>
                      Money Sharing
                    </h3>
                    <div>
                      <p>
                        Lend money to people you trust using smart contracts. Approve loans to several borrowers at the same time to reduce risk.
                      </p>
                      <p>
                        Track individual reputations based on past behaviour.
                      </p>
                      <CommingSoon>
                        <span>Comming soon</span>
                      </CommingSoon>
                    </div>
                    </Animated>
                </TextSec>
                <ImgSec>
                  <Animated animationIn="fadeInRight" animationInDelay={100} isVisible={onScreenTwo}>
                    <ImgWrapper>
                        <picture>
                          <source srcSet={`${eco2}, ${eco2Large} 2x`}/>
                          <img src={eco1} alt=" "/>
                        </picture>
                    </ImgWrapper>
                  </Animated>
                </ImgSec>
                </Row>
              </Waypoint>
              <Waypoint onEnter={this.onViewScreenThree}>
                <Row>
                  <ImgSec>
                    <Animated animationIn="fadeInLeft" animationInDelay={100} isVisible={onScreenThree}>
                      <ImgWrapper left>
                        <picture>
                          <source srcSet={`${eco3}, ${eco3Large} 2x`}/>
                          <img src={eco1} alt=" "/>
                        </picture>
                      </ImgWrapper>
                    </Animated>
                  </ImgSec>
                  <TextSec>
                    <Animated animationIn="fadeInRight" animationInDelay={100} isVisible={onScreenThree}>
                      <h3>
                        Investments Wallet
                      </h3>
                      <div>
                        <p>
                          Join a global trading community with our easy-to-use tool. Our Escrow platform allows you to deal with people directly. 
                        </p>
                        <p>
                          <b>Trade digital assets and hedge risk</b>
                        </p>
                        <CommingSoon>
                          <span>Comming soon</span>
                        </CommingSoon>
                      </div>
                    </Animated>
                  </TextSec>
                </Row>
              </Waypoint>
              <Waypoint onEnter={this.onViewScreenFore}>
                <Row>
                  <TextSec>
                    <Animated animationIn="fadeInLeft" animationInDelay={100} isVisible={onScreenFore}>
                      <h3>
                        SAVL buisness
                      </h3>
                      <div>
                        <p>
                          Migrate your group accounting into a fast and safe environment. Distribute incoming finances among group members, create templates and automate your asset management.
                        </p>
                        <p>
                          <b>Hold a private or public ICO on your own terms and raise funds from the SAVL community.</b>
                        </p>
                        <CommingSoon>
                          <span>Comming soon</span>
                        </CommingSoon>
                      </div>
                    </Animated>
                  </TextSec>
                  <ImgSec>
                    <Animated animationIn="fadeInRight" animationInDelay={100} isVisible={onScreenFore}>
                      <ImgWrapper>
                        <picture>
                          <source srcSet={`${eco2}, ${eco2Large} 2x`}/>
                          <img src={eco1} alt=" "/>
                        </picture>
                      </ImgWrapper>
                    </Animated>
                  </ImgSec>
                </Row>
              </Waypoint>
            </ContentWrapper>
          </Container>
        </Section>
      </Waypoint>
    )
  }
}

