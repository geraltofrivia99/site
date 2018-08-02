import React, { Component } from 'react';
// import WayPointComp from '../WayPointComp';
import styled from 'styled-components';

import change1 from '../../img/change1_2x.png';
import changeDop from '../../img/change1-dop.png';
import change2Dop from '../../img/change2-dop.png';
import change2 from '../../img/change2.png';


const FirstSecEc = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f9f8fe;
  position: relative;
`;
const Rect1 = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    -webkit-border-radius: 118px;
    border-radius: 118px;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    top: 20%;
    left: -400px;
    /* opacity: 0; */
    -webkit-transform: translate3d(100px,0,0) rotate(-47deg);
    transform: translate3d(100px,0,0) rotate(-47deg);
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
    top: 10%;
    right: -360px;
    /* opacity: 0; */
    -webkit-transform: translate3d(-70px,0,0) rotate(-47deg);
    transform: translate3d(-70px,0,0) rotate(-47deg);
`;

const Section1 = styled.div`
  height: ${props => props.height};
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const Title2 = styled.div`
    font-family: 'Futura', Verdana, sans-serif;
    font-size: 52px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    > span {
      font-size: .8em;
    }
`;
const Title3 = styled.div`
    width: 85%;
    margin: 0 auto 50px;
    font-family: Avenir, Verdana, sans-serif;
    text-align: center;
    font-size: 22px;
    line-height: 1.55;
`;
const Row = styled.div`
  width: 100vw;
    position: absolute;
    top: 100%;
    margin-left: -50vw;
    left: 50%;
    height: 1px;
    /* background: rgba(0, 0, 0, 0.15); */
    background-color: black;
`;

const Img1 = styled.img``;
const Img2 = styled.img``;
const ImageWrapper = styled.div`
  position: relative;
  > ${Img1} {
    width: 400px;
    height: 300px;
    display: inline-block;
   -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.1));
   filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.1));
  }
  > ${Img2} {
    position: absolute;
    width: 160px;
    height: 160px;
    bottom: -14%;
    right: -9%;
    -webkit-filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.05));
    filter: drop-shadow(0 11px 22px rgba(7, 19, 104, 0.05));
  }
`;
const RightSec = styled.div`
/* width: ${props => props.top ? '55%' : '45%'}; */
`;
const LeftSec = styled.div`
/* width: ${props => props.top ? '45%' : '55%'}; */
`;
const ContainerContent = styled.div`
  
  /* max-height: 353px; */
  display: flex;
  justify-content: center;
  align-items: center;
  > ${LeftSec}, ${RightSec} {
    display: flex;
    width: 50%;
  }
  > ${LeftSec} {
    justify-content: center;
    justify-content: flex-start;

  }
  > ${RightSec} {
    justify-content: flex-end;

   
  }
  
`;
const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2em;
  > h2 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  > div {
    margin-bottom: .9rem;
  }
`;


export default class Economy extends Component {
  render() {
    return (
      <FirstSecEc>
       <Section1 height={'100vh'}>
       <TittleWrapper className='container'>
        <Title2>Creating the future economy <br /><span>(Leading the financial services revolution)</span></Title2>
        <Title3 class="section-subtitle animate1">We simplify and humanize the system of financial relations, rendering traditional banks obsolete. Build your own financial community and deal directly with individuals. <br /> <b>No middle institutions needed.</b>
			  </Title3>
      </TittleWrapper>
        <div className="container">
          <ContainerContent>
              <LeftSec top>
                <ImageWrapper>
                  <Img1 src={change1} alt="" />
                  <Img2  src={changeDop} alt="" />
                </ImageWrapper>
              </LeftSec>
              <RightSec top>
                <TextWrapper>
                    <h2>
                      SAVL blockchain
                    </h2>
                    <div>
                      SAVL’s ecosystem works on our custom-built Ethereum-based platform. We have harnessed the potential of the Ethereum-blockchain to maximise transaction speed.
                    </div>
                    <div>
                      <b>12 seconds</b> is all it takes.
                    </div>
                </TextWrapper>
              </RightSec>
          </ContainerContent>
        </div>
        <Row/>
        <Rect1 />
       </Section1>
       <Section1 height={'60vh'}>
       <div className="container">
        <ContainerContent>
          <LeftSec bot>
            <TextWrapper>
                <h2>
                  <b>Personal wallet, community functions</b>
                </h2>
                <div>
                  SAVL works like a wallet, but one which has access to a global financial community. Through the SAVL app you can build relationships with other users, do business using a secure messaging service, and even manage joint finances. The ratings-based system encourages users to be more transparent, creating a safe and secure environment for cryptocurrency transactions.
                </div>
            </TextWrapper>
          </LeftSec>
          <RightSec bot>
            <ImageWrapper>
              <Img1 src={change2} alt="" />
              <Img2  src={change2Dop} alt="" />
            </ImageWrapper>
          </RightSec>
        </ContainerContent>
        </div>
        <Rect2 />
       </Section1>
      </FirstSecEc>
      
    )
  }
}
