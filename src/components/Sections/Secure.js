import React, { Component } from 'react'
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { Animated } from "react-animated-css";
import { Container, RowComp } from '../StyleComp/';

import advantBg from '../../img/advant-bg.jpg';


const Section = styled.div`
  padding: 91px 0 131px;
  background-image: url(${advantBg});
  background-size: cover;
  background-attachment: fixed;
  -webkit-box-shadow: 0 11px 29.6px 8.4px rgba(7, 19, 104, 0.05);
  box-shadow: 0 11px 29.6px 8.4px rgba(7, 19, 104, 0.05);
  z-index: 1;
`;
const Row = RowComp.extend`
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
`;
const ItemWrapper = styled.div`
  padding-left: ${props => props.left ? '9%' : 0};
  padding-right: ${props => props.left ? 0 : '9%'};
  width: 50%;  
`;
const Logo = styled.div`
  margin-bottom: 5px;
  margin-left: -20px;
  width: 212px;
  height: 178px;
  > svg {
    width: 212px;
    height: 178px;
  }
`;
const Content = styled.div`
    width: 100%;
    > h3 {
      width: 90%;
      font-family: 'Futura', Verdana, sans-serif;
      color: #ffffff;
      font-size: 44px;
      font-weight: 900;
      line-height: 1.17;
      margin-bottom: 45px;
    }
    > div {
      line-height: 1.7;
      color: #ced2e5;
      margin-bottom: 24px;
      > b {
        color: #fff;
        font-weight: 600;
      }
    }
`;


export default class Secure extends Component {
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
            <Row>
                <ItemWrapper>
                  <Animated animationIn="fadeInUp" animationInDelay={100} isVisible={onScreen}>
                    <Logo>

                    </Logo>
                    <Content>
                      <h3>User-exclusive security</h3>
                      <div>The SAVL wallet uses <b>end-user encryption</b> Create a <b>unique 12-word combination</b> that is stored only on your device and used to access your storage. Your personal word combination is also used to identify all your external transactions in the blockchain, verifying them for the future.
                      </div>
                    </Content>
                  </Animated>
                </ItemWrapper>
                <ItemWrapper>
                <Animated animationIn="fadeInUp" animationInDelay={300} isVisible={onScreen}>
                  <Logo>

                  </Logo>
                  <Content>
                    <h3>Accelerated performance</h3>
                    <div>We built the SAVL blockchain based on Ethereum, but disabled the mining protocol and introduced a nodes structure. This makes transactions much faster: all internal transactions are completed within <b>10–15 seconds</b>.
                    </div>
                  </Content>
                  </Animated>
                </ItemWrapper>
            </Row>
          </Container>
        </Section>
      </Waypoint>
    )
  }
}
