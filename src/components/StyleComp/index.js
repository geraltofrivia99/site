import styled, { keyframes } from 'styled-components';

const OpacityTranslate = keyframes`
  100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1
	}  
`;
export const Container = styled.div`
margin-right: auto;
margin-left: auto;
padding-left: 30px;
padding-right: 30px;
height: 100%;
@media (min-width: 768px) {
  width: 768px;
  padding-left: 40px;
  padding-right: 40px;
}
@media (min-width: 1200px) {
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
}
`;

export const TitleComp = styled.h2`
font-weight: 900;
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
`;

export const RowComp = styled.div`
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

export const ItemComp = styled.div`
 -webkit-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0 6px 57px 0 rgba(44, 50, 82, 0.1);
  box-shadow: 0 6px 57px 0 rgba(44, 50, 82, 0.1);
  padding: 47px 40px 36px 50px;
  position: relative;
  overflow: hidden;
  > svg {
    right: -18px;
    bottom: -11px;
  }
  > div {
    height: 184px;
    overflow: hidden;
    > div {
      font-family: 'Futura', Verdana, sans-serif;
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
      line-height: 1.2;
      -webkit-box-sizing: inherit;
      box-sizing: inherit;
      
    }
    > p {
      font-size: 16px;
      color: #f1eff7;
      line-height: 1.63;
      width: 90%;
      overflow: hidden;
      margin-bottom: 5px;
    }
  }
  > p {
    font-family: 'Futura', Verdana, sans-serif;
    margin-top: 3px;
  }
`;
export const Input = styled.input`
  height: 60px;
    width: 100%;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    font-size: 19px;
    border: none;
    outline: none;
`;
export const ButtonComp = styled.button`
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
`;
export const SocBtn = styled.a`
  width: 37px;
    height: 37px;
    color: #f2f0fe;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: inset 0 0 0 1px #f2f0fe;
    box-shadow: inset 0 0 0 1px #f2f0fe;
    /* border: 1px solid #f2f0fe; */
    /* text-align: center; */
    /* line-height: 37px; */
    margin-right: 16px;
    position: relative;
    -webkit-transition: -webkit-box-shadow 0.2s;
    transition: -webkit-box-shadow 0.2s;
    transition: box-shadow 0.2s;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    opacity: 0;
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-animation: ${OpacityTranslate} 0.3s forwards;
    animation: ${OpacityTranslate} 0.3s forwards;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      opacity: 0;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }
    &:nth-child(1) {
      -webkit-animation-delay: .4s;
      animation-delay: .4s;
      &:before {
        background-image: -webkit-linear-gradient(315deg, #4984ff, #2c53a6);
        background-image: linear-gradient(135deg, #4984ff, #2c53a6);
      }
    }
  &:nth-child(2) {
    -webkit-animation-delay: .3s;
      animation-delay: .3s;
    &:before {
      background-image: -webkit-linear-gradient(45deg, #ffbb2a, #ff5445 37%, #fc2b82 70%, #8e40b7);
      background-image: linear-gradient(45deg, #ffbb2a, #ff5445 37%, #fc2b82 70%, #8e40b7);
    }
  }
  &:nth-child(3) {
    -webkit-animation-delay: .2s;
      animation-delay: .2s;
    &:before {
      background-image: -webkit-linear-gradient(315deg, #4984ff, #2c53a6);
        background-image: linear-gradient(135deg, #4984ff, #2c53a6);
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;