import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Rect1, Rect2, Rect3, Rect1s, Rect2s, Rect3s, Rect4s } from '../StyleComp/Rects';
import { Container, RowComp, ButtonComp, Input } from '../StyleComp';

import mockup from '../../img/mockup-top.png';
import mockupLarge from '../../img/mockup-top_2x.png';

const TitleAnim = keyframes`
  100% {
		opacity: 1
	}
}
`;

const mockupAnim = keyframes`
  100% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
		opacity: 1
	}
}
`;

const Section = styled.div`
    position: relative;
    overflow: hidden;
`;
const ContentWrapper = styled.div`
  padding: 280px 0 350px;
  display: flex;
`;
const Content = styled.div`
    width: 70%;
    position: relative;
`;
const MocupWrapper = styled.div`
    position: absolute;
    right: -271px;
    top: -112px;
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    -webkit-filter: drop-shadow(0 50px 30px rgba(44, 50, 82, 0.11));
    filter: drop-shadow(0 50px 30px rgba(44, 50, 82, 0.11));
    opacity: 0;
    -webkit-animation: ${mockupAnim} 0.5s forwards ease-out;
    animation: ${mockupAnim} 0.5s forwards ease-out;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    /* animation-name: bounceInMockupTop; */
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;
const Img = styled.img`
    max-width: 100%;
    height: auto;
`;
const Title = styled.h1`
    width: 80%;
    font-family: 'Futura', Verdana, sans-serif;
    font-size: 60px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 36px;
    opacity: 0;
    -webkit-animation: ${TitleAnim} 0.5s forwards ease-out;
    animation: ${TitleAnim} 0.5s forwards ease-out;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    /* animation-name: bounceInMockupTop; */
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;
const Subtitle = styled.div`
      color: #58637e;
      margin-bottom: 56px;
      width: 70%;
      -webkit-transform: translate3d(0,20px,0);
      transform: translate3d(0,20px,0);
      opacity: 0;
      -webkit-animation: ${TitleAnim} 0.4s forwards ease-in-out;
      animation: ${TitleAnim} 0.4s forwards ease-in-out;
      -webkit-animation-delay: 0.9s;
      animation-delay: 0.9s;
`;
const Row = RowComp.extend`
  -webkit-transform: translate3d(0,20px,0);
  transform: translate3d(0,20px,0);
  opacity: 0;
  -webkit-animation: ${TitleAnim} 0.4s forwards ease-in-out;
  animation: ${TitleAnim} 0.4s forwards ease-in-out;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
`;
const ButtonDwnldApp = styled.button`
    line-height: 58px;
    margin-right: 30px;
    padding: 0 60px;
    display: inline-block;
    font-size: 19px;
    letter-spacing: 1px;
    border: none;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    outline: none;
    height: 60px;
    line-height: 60px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    text-align: center;
    padding: 0 40px;
    color: #fff;
    font-family: 'Futura', Verdana, sans-serif;
    font-weight: 500;
    letter-spacing: 0.2px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    outline: none;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.3);
      box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.3)
    }
`;
const ButtonSubscribeWrapper = styled.div`
    position: relative;
    width: 200px;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
`;
const SubsribeBut = ButtonComp.extend`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    cursor: pointer;
    font-size: 19px;
    font-weight: 700;
    border: none;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff5561), to(#ff8f5d));
    background-image: -webkit-linear-gradient(right, #ff5561, #ff8f5d);
    background-image: linear-gradient(to left, #ff5561, #ff8f5d);
    padding: 1px;
    outline: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transform: ${props => props.onOpen ? 'translateX(200px)' : 'translateX(0)'};
    -ms-transform: ${props => props.onOpen ? 'translateX(200px)' : 'translateX(0)'};
    transform: ${props => props.onOpen ? 'translateX(200px)' : 'translateX(0)'};
    &:hover {
      -webkit-box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.3);
      box-shadow: 0 0 30px 3px rgba(255, 108, 117, 0.3)
    }
    > span {
      display: block;
      background: #fff;
      color: #ff7374;
      -webkit-border-radius: 30px;
      border-radius: 30px;
      height: 58px;
      line-height: 58px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      &:hover {
        color: #fff;
        background: transparent;
      }
    }
`;
const SubscribeForm = styled.div`
    position: relative;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    /* -webkit-transform: ${props => props.onOpen ? 'translateX(100px)' : 'translateX(0)'};
    -ms-transform: ${props => props.onOpen ? 'translateX(100px)' : 'translateX(0)'};
    transform: ${props => props.onOpen ? 'translateX(100px)' : 'translateX(0)'}; */
`;
const InputSubs = Input.extend`
    border: solid 1px #b1bbd5;
    text-indent: 37px;
    opacity: ${props => props.opacity};
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
    width: 130%;
`;
const ScrollDown = RowComp.extend`
    position: absolute;
    bottom: -156px;
    left: 0;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    > div {
      width: 55px;
      height: 55px;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      -webkit-box-shadow: 0 2px 7px 1px rgba(7, 19, 104, 0.1);
      box-shadow: 0 2px 7px 1px rgba(7, 19, 104, 0.1);
      margin-right: 20px;
      text-align: center;
      line-height: 55px;
      color: #58637e;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      > svg {
        width: 55px;
        height: 55px;
      }
    }
    > span {
      font-family: 'Futura', Verdana, sans-serif;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.2px;
      color: #acb1c6;
    }
`;


export default class MainSection extends Component {
  state = {
    opacity: 0,
    value: '',
    onOpen: false,
  }
  handleChange = value => {
    this.setState({value})
  }
  onClickButtonSubscribe = () => {
    this.setState({ onOpen: true, opacity: 1 })
  }

  render() {
    const { value, opacity, onOpen } = this.state;
    return (
      <Section>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <Rect1s />
        <Rect2s />
        <Rect3s />
        <Rect4s />
        <Container>
          <ContentWrapper>
            <Content>
              <MocupWrapper>
                <picture>
                  <source srcSet={`${mockup}, ${mockupLarge} 2x`}/>
                  <Img src={mockup} alt=""/>
                </picture>
              </MocupWrapper>
              <Title>
                  Human centered financial ecosystem
                </Title>
                <Subtitle>
                  SAVL is a community-based mobile platform that simplifies cryptocurrency peer-to-peer lending, savings and payments and makes them faster and more secure. It is suitable for traders, investors, crypto-enthusiasts and beginners alike.
                </Subtitle>
                <Row>
                  <ButtonDwnldApp>
                    Download App
                  </ButtonDwnldApp>
                  <ButtonSubscribeWrapper>
                    <SubscribeForm>
                      <InputSubs
                        placeholder='Email'
                        onChange={(e) => this.handleChange(e.target.value)}
                        opacity={opacity}
                        value={value}/>
                      <SubsribeBut onOpen={onOpen} onClick={this.onClickButtonSubscribe}>
                        <span>Subscribe</span>
                      </SubsribeBut>
                    </SubscribeForm>
                  </ButtonSubscribeWrapper>
                </Row>
                <ScrollDown>
                  <div>
                    <svg id="ScrollDown" viewBox="0 0 54.99 54.99" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><title>4Artboard 3</title><circle cx="27.5" cy="27.5" r="27.5" style={{fill: '#fff'}}></circle><path d="M26.55,18.95V33.75l-5.1-5.1A.95.95,0,1,0,20.11,30l6.72,6.72h0l.14.12.07,0,.09,0,.1,0,.08,0,.19,0h0l.18,0,.08,0,.09,0,.09,0,.07,0,.15-.12L34.89,30a.95.95,0,1,0-1.34-1.34l-5.1,5.1V18.95a.95.95,0,0,0-1.9,0Z" style={{fill: '#58637e'}}></path></svg>
                  </div>
                  <span>Scroll Down</span>
                </ScrollDown>
            </Content>
          </ContentWrapper>
        </Container>
      </Section>
    )
  }
}
