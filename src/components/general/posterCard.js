import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../styles/generalStyles';

/*
 *  Component: PosterCard
 *  Description: General use PosterImage - No special styling
 *  @Props: 
 *  url: path to poster url
 */


const PosterCard = (props) => {

  const [ posterPath, setPosterPath ] = useState(null);

  useEffect(() => {
    setPosterPath(props.url)
  }, [])

  const displayModal = () => {
    console.log('clicked on poster')
  }

  return (
    <div>
      <PosterCardImg onClick={displayModal}>
        <img src={posterPath} alt="poster" />
      </PosterCardImg>
    </div>
  );
}

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

export default PosterCard;
