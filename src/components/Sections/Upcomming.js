import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, TitleComp, ItemComp } from '../StyleComp';

const Section = styled.div`
  padding: 100px 0 140px;
  background-color: #f9f8fe;
  -webkit-box-shadow: 0px 11px 58.5px 16.5px #0713681e;
  box-shadow: 0px 11px 58.5px 16.5px #0713681e;
}
`;
const Title = TitleComp.extend`
  text-align: center;
  margin-bottom: 54px;  
`;
const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const ItemWrapper = styled.div`
  width: 33.33%;
  padding: 0 15px;
`;
const ItemOne = ItemComp.extend`
  background-image: -webkit-linear-gradient(23deg, #a54dff, #5f57ff);
  background-image: linear-gradient(67deg, #a54dff, #5f57ff);
`;
const ItemTwo = ItemComp.extend`
  background-image: -webkit-linear-gradient(45deg, #ff6a75, #ff9f74);
  background-image: linear-gradient(45deg, #ff6a75, #ff9f74);
`;
const ItemThree = ItemComp.extend`
  background-image: -webkit-linear-gradient(47deg, #22c196, #35c95b);
  background-image: linear-gradient(43deg, #22c196, #35c95b);
`;


export default class Upcomming extends Component {
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
            <Animated animationIn="fadeInUp" animationInDelay={100} isVisible={onScreen}>
              <Title>
                Upcomming features
              </Title>
            </Animated>
            <Row>
                <ItemWrapper>
                  <Animated animationIn="fadeInUp" animationInDelay={100} isVisible={onScreen}>
                    <ItemOne>
                      <div>
                        <div>Loyalty Program</div>
                        <p>Invite new users to SAVL and receive bonuses on their transactions!</p>
                      </div>
                      <p>Date: <b>October 2018</b></p>
                    </ItemOne>
                  </Animated>
                </ItemWrapper>
              <ItemWrapper>
                <Animated animationIn="fadeInUp" animationInDelay={200} isVisible={onScreen}>
                  <ItemTwo>
                    <div>
                      <div>Scrolling</div>
                      <p>Financial Reputation Transparency of SAVL community members</p>
                    </div>
                    <p>Date: <b>October 2018</b></p>
                  </ItemTwo>
                </Animated>
              </ItemWrapper>
              <ItemWrapper>
                <Animated animationIn="fadeInUp" animationInDelay={300} isVisible={onScreen}>
                  <ItemThree>
                    <div>
                      <div>Consulting & support</div>
                      <p>Get professional financial advice from experienced crypto traders.</p>
                    </div>
                    <p>Date: <b>October 2018</b></p>
                  </ItemThree>
                </Animated>
              </ItemWrapper>
            </Row>
          </Container>
        </Section>
      </Waypoint>
    )
  }
}
