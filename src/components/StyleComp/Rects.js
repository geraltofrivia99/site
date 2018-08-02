import styled, { keyframes } from 'styled-components';

const rect1Anim = keyframes`
  100% {
      opacity: 1;
    }
  }
`;
const rect2Anim = keyframes`
  100% {
      -webkit-transform: rotate(-45deg) translate3d(0,0,0);
      transform: rotate(-45deg) translate3d(0,0,0);
    }
  }
`;
const bounceInMockupTop = keyframes`
  from,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.8, 0.8, 0.8);
		transform: scale3d(0.8, 0.8, 0.8);
	}

	20% {
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}

	40% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97);
	}

	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.01, 1.01, 1.01);
		transform: scale3d(1.01, 1.01, 1.01);
	}

	80% {
		-webkit-transform: scale3d(0.99, 0.99, 0.99);
		transform: scale3d(0.99, 0.99, 0.99);
	}

	to {
		opacity: 1;
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
`;
export const Rect1 = styled.div`
  position: absolute;
    width: 1400px;
    height: 2000px;
    -webkit-border-radius: 180px;
    border-radius: 180px;
    background-image: -webkit-gradient(linear, left bottom, right top, from(#c64df9), to(#525ffc));
    background-image: -webkit-linear-gradient(bottom left, #c64df9, #525ffc);
    background-image: linear-gradient(to top right, #c64df9, #525ffc);
    top: -260px;
    right: -420px;
    -webkit-transform: rotate(-40deg);
    -ms-transform: rotate(-40deg);
    transform: rotate(-40deg);
    opacity: 0;
    -webkit-animation: ${rect1Anim} 0.3s forwards ease-out;
    animation: ${rect1Anim} 0.3s forwards ease-out;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
`;
export const Rect2 = styled.div`
  position: absolute;
    width: 1400px;
    height: 1400px;
    -webkit-border-radius: 264px;
    border-radius: 264px;
    background-color: #fff;
    top: -32px;
    /* right: 315px; */
    right: -webkit-calc((100vw - 830px)/2);
    right: calc((100vw - 830px)/2);
    -webkit-transform: rotate(-45deg) translate3d(30px,0,0);
    transform: rotate(-45deg) translate3d(30px,0,0);
    -webkit-animation: ${rect2Anim} 0.3s forwards ease-out;
    animation: ${rect2Anim} 0.3s forwards ease-out;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
`;
export const Rect3 = styled.div`
  position: absolute;
    width: 4000px;
    height: 2000px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #f9f8fe;
    -webkit-box-shadow: 0 0 63px 7px rgba(44, 50, 82, 0.12);
    box-shadow: 0 0 63px 7px rgba(44, 50, 82, 0.12);
    top: 88%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`;
export const Rect1s = styled.div`
  position: absolute;
    left: 54%;
    top: 78%;
    width: 25px;
    height: 25px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    opacity: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
    -webkit-animation-name: ${bounceInMockupTop};
    animation-name: ${bounceInMockupTop};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;
export const Rect2s = styled.div`
  position: absolute;
    left: 90%;
    top: 19%;
    width: 15px;
    height: 15px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    -webkit-filter: blur(2px);
    filter: blur(2px);
    opacity: 0;
    -webkit-animation-delay: 1.4s;
    animation-delay: 1.4s;
    -webkit-animation-name: ${bounceInMockupTop};
    animation-name: ${bounceInMockupTop};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;
export const Rect3s = styled.div`
  position: absolute;
    left: -25px;
    top: 45%;
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#c64df9), to(#525ffc));
    background-image: -webkit-linear-gradient(bottom, #c64df9, #525ffc);
    background-image: linear-gradient(to top, #c64df9, #525ffc);
    -webkit-filter: blur(7px);
    filter: blur(7px);
    opacity: 0;
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
    -webkit-animation-name: ${bounceInMockupTop};
    animation-name: ${bounceInMockupTop};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;
export const Rect4s = styled.div`
  position: absolute;
    right: -25px;
    top: 53%;
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff6a75), to(#ff9f74));
    background-image: -webkit-linear-gradient(right, #ff6a75, #ff9f74);
    background-image: linear-gradient(to left, #ff6a75, #ff9f74);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
    -webkit-animation-name: ${bounceInMockupTop};
    animation-name: ${bounceInMockupTop};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;