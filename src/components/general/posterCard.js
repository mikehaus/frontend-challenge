import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/generalStyles';

const PosterCardImg = styled.div `
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  margin: 10px;

  @media ${device.desktopL} { 
    height: 527px;
    width: 350px;
  }
  @media ${device.desktop} {
    height: 337px;
    width: 223px;
  }
  @media ${device.laptopL} {
    height: 337px;
    width: 223px;
  }
  @media ${device.laptop} {
    height: 234px;
    width: 155px;
  }
  @media ${device.mobileL} {
    height: 168px;
    width: 111px;
  }
  @media ${device.mobileM} {
    height: 168px;
    width: 111px;
  }
  @media ${device.mobileS} {
    height: 168px;
    width: 111px;
  }
`;

const PosterCard = (props) => {

  let posterPath = props.url;

  const displayModal = () => {
    
  }

  return (
    <div>
      <PosterCardImg onClick={displayModal}>
        <img src={posterPath} alt="poster" />
      </PosterCardImg>
    </div>
  );
}

export default PosterCard;
