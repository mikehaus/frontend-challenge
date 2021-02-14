import styled from 'styled-components';
import Dots from '../../assets/Dots.svg';
import { device } from '../general/generalStyles';

// Image background for dots along top

const BackgroundImageBlock = () => {
  return (
    <div>
      <DotsContainer>
      <Dots1>
        <img alt="dots" src={Dots} />
      </Dots1>
      <Dots2>
        <img alt="dots" src={Dots} />
      </Dots2>
      <Dots3>
        <img alt="dots" src={Dots} />
      </Dots3>
      </DotsContainer>
    </div>
  );
}

const DotsContainer = styled.div `
  position: relative;
  margin: 0px;
  width: 100vw;

  &:outer {
    overflow: hidden;
  }
`;

const DotsImg = styled.div `
  display: inline;
  width: auto;
  height: auto;
  overflow-x: hidden;
`;

const Dots1 = styled(DotsImg) `
  z-index: 0;
  position: absolute;
  top: -100px;
  left: 200px;

  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: none;
  }
  @media ${device.laptopL} {
    display: none;
  }
  @media ${device.desktop} {
    top: -75px;
    left: 200px;
  }
`;

const Dots2 = styled(DotsImg) `
  position: absolute;
  right: -50px;
  top: -75px;

  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const Dots3 = styled(DotsImg) `
  z-index: 0;
  position: absolute;
  left: -500px;
  top: -50px;

  @media ${device.tablet} {
    left: 0;
    top: 0;
  }
`;


export default BackgroundImageBlock;