import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PosterCardImg, colors, device } from '../../styles/generalStyles';
import Star from '../../assets/Star.svg';


// TODO: Button Uniform along bottom
const DetailsButton = styled.button `
  position: relative;
  display: none;
  align-items: center;
  background: ${colors.blue};
  color: white;
  margin: 10px auto;
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
`
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
`;

const HeadingBox = styled.div `
  display: inline-block;
  width: 60%;
`

const CardHeading = styled.p `
  position: relative;
  font-family: Roboto;
  display: inline;
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
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }
`;

const StarImage = styled.div `
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 30px;
  margin: 5px;
  width: 11px;
  height: 11px;
  color: ${colors.blue};
`;

const RatingText = styled.p `
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 10px;
  display: inline-block;
  font-weight: bold;
  margin: 5px;
  width: 11px;
  height: 11px;
  color: ${colors.blue};
`;

const GenreTextBlock = styled.p `
  display: block;
  color: ${colors.subheaderGray};
  font-size: 14px;
  width: 80%;
  margin-bottom: 5px;

  /*@media ${device.desktopL} { 
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
  }*/
`;

const TopFivePosterCard = (props) => {

  const [title, setTitle] = useState(null);
  const [voteAvg, setVoteAvg] = useState(null);

  console.log(props.genres);

  const posterPath = props.url;
  const genreStr = props.genres.join(', ');

  useEffect(() => {
    setTitle(props.title);
    setVoteAvg(props.voteAvg);
  }, []);

  return (
    <div>
      <PosterCardBorder>
        <PosterCardImg>
          <img src={posterPath} />
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
          <DetailsButton>
            View Details
          </DetailsButton>
        </InfoBox>
      </PosterCardBorder>
    </div>
  );
}

export default TopFivePosterCard;