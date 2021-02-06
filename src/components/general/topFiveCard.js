import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { colors, device } from '../../styles/generalStyles';
import Star from '../../assets/Star.svg';
import { Link, withRouter } from 'react-router-dom';

// TODO: Button Uniform along bottom
// TODO: Truncate Header 3 lines for device query text size
const DetailsButton = styled.button `
  position: relative;
  display: none;
  align-items: center;
  background: ${colors.blue};
  color: white;
  margin: auto auto 0 auto;
  width: 100%;
  height: 47px;
  border-radius: 4px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  border: none;
  
  &:focus {
    outline: none;
  }
`;

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



const PosterCardBorder = styled.div `
  background-color: transparent;
  margin: 20px 0px 5px 0px;
  padding: 5px;
  height: auto;

  &:hover {
    ${PosterCardImg} {
      box-shadow: none;
    }

    ${DetailsButton} {
      display: block;
    }

    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  }

  @media ${device.desktopL} { 
    height: 725px;
    width: 370px;
  }
  @media ${device.desktop} {
    height: 526px;
    width: 243px;
  }
  @media ${device.laptopL} {
    height: 526px;
    width: 243px;
  }
  @media ${device.laptop} {
    height: 425px;
    width: 175px;
  }
  @media ${device.mobileL} {
    height: 325px;
    width: 131px;
  }
  @media ${device.mobileM} {
    height: 325px;
    width: 131px;
  }
  @media ${device.mobileS} {
    height: 325px;
    width: 131px;
  }
`;

const InfoBox = styled.div `
  position: relative;
  margin: 15px 10px;
  z-index: 2;
`;

const HeadingBox = styled.div `
  display: inline-block;
  overflow: hidden;
  width: 70%;
  overflow: hidden;
`

const CardHeading = styled.h2 `
  position: relative;
  display: inline;
  font-family: Roboto;
  font-weight: bold;
  color: ${colors.headerBlack};

  @media ${device.desktopL} { 
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
`;

const StarImage = styled.div `
  display: inline-block;
  position: absolute;
  top: 0px;
  margin: 5px;
  color: ${colors.blue};
  width: 11px;
  height: 11px;

  @media ${device.desktopL} { 
    width: 11px;
    height: 11px;
    right: 25px;
  }
  @media ${device.desktop} {
    width: 11px;
    height: 11px;
    right: 25px;
  }
  @media ${device.laptopL} {
    width: 11px;
    height: 11px;
    right: 25px;
  }
  @media ${device.laptop} {
    width: 11px;
    height: 11px;
    right: 22px;
  }
  @media ${device.mobileL} {
    width: 7px;
    height: 7px;
    right: 25px;
  }
  @media ${device.mobileM} {
    width: 7px;
    height: 7px;
    right: 25px;
  }
  @media ${device.mobileS} {
    width: 7px;
    height: 7px;
    right: 25px;
  }
`;

const RatingText = styled.p `
  position: absolute;
  top: 0;
  display: inline-block;
  font-weight: bold;
  margin: 5px;
  width: 11px;
  height: 11px;
  right: 5px;
  color: ${colors.blue};

  @media ${device.desktopL} { 
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
  }
`;

const GenreTextBlock = styled.p `
  display: block;
  color: ${colors.subheaderGray};
  font-size: 14px;
  width: 90%;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const TopFivePosterCard = (props) => {

  const [title, setTitle] = useState(null);
  const [voteAvg, setVoteAvg] = useState(null);
  const [id, setId] = useState(null);

  const posterPath = props.url;
  const genreStr = props.genres.join(', ');

  useEffect(() => {
    setTitle(props.title);
    setVoteAvg(props.voteAvg);
    setId(props.id)
  }, []);

  return (
    <div>
      <PosterCardBorder>
        <PosterCardImg>
          <img src={posterPath} alt="poster" />
        </PosterCardImg>
        <InfoBox>
          <HeadingBox>
            <CardHeading>
              {title}
            </CardHeading>
          </HeadingBox>
          <StarImage>
            <img alt="star" src={Star}/>
          </StarImage>
          <RatingText>
            {voteAvg}
          </RatingText>
          <GenreTextBlock>
            {genreStr}
          </GenreTextBlock>
          <Link to="/detail">
            <DetailsButton>
              View Details
            </DetailsButton>
          </Link>
        </InfoBox>
      </PosterCardBorder>
    </div>
  );
}

export default TopFivePosterCard;