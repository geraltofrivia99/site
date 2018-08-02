import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, TitleComp } from '../StyleComp';

import mapImg from '../../img/map-img.svg';

const Section = styled.div`
  padding: 152px 0 162px;
  position: relative;
  text-align: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${mapImg}) no-repeat -6% -70%;
    opacity: 0.6;
  }
`;
const Content = styled.div`
  width: 78%;
  margin: 0 auto;
  position: relative;
  > div {
    font-size: 22px;
    /* color: #58637e; */
    line-height: 1.56;
    margin-bottom: 31px;
  }
`;
const Title = TitleComp.extend`
  line-height: 1.2;
  margin-bottom: 56px;
  font-weight: 900;
`;
const Subtitle = styled.div`
  font-size: 22px;
  line-height: 1.27;
  margin-bottom: 30px;
  > b {
    font-weight: 600;
  }
`;


export default class Inter extends Component {
  state = {
    onScreen: false,
  }
  onViewScreen = () => {
    console.log('Enter');
      this.setState({
        onScreen: true,
      });
  }
  render() {
    const { onScreen } = this.state;
    return (
      <Waypoint onEnter={this.onViewScreen}>
        <Section>
        <Container>
          <Content>
            <Animated animationIn="fadeInUp" animationInDelay={0} isVisible={onScreen}>
              <Title>
                We think globally
              </Title>
            </Animated>
              <Animated animationIn="fadeInUp" animationInDelay={300} isVisible={onScreen}>
                <Subtitle >
                  <b>SAVL</b>  was incorporated in Zug, Switzerland in February 2018.
                </Subtitle>
              </Animated>
              <Animated animationIn="fadeInUp" animationInDelay={500} isVisible={onScreen}> 
                <div>
                  It was the first company in the world to use just Bitcoin to meet the charter capital requirements for company registration at the Swiss Chamber of Commerce. The team includes developers from the US, Europe, South America and Russia.
                </div>
              </Animated>
          </Content>
        </Container>
      </Section>
      </Waypoint>
    )
  }
}


