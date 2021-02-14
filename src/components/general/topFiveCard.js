import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { colors, device, PosterCardImg } from './generalStyles';
import Star from '../../assets/Star.svg';
import { Link } from 'react-router-dom';

/*
 *  Component: TopFiveCard
 *  Description: Combined poster and info display for view in Top Five Grid
 * 
 *  @Props: 
 *  title: title of Movie
 *  voteAvg: vote score average value
 *  id: movie identifier value
 *  url: url path to the image we are displaying
 *  genres: array of genres from movie object
 * 
 *  methods:
 *  useEffect => Sets props initially
 */


const TopFivePosterCard = (props) => {

  const [title, setTitle] = useState(null);
  const [voteAvg, setVoteAvg] = useState(null);
  const [id, setId] = useState(null);
  const [posterPath, setPosterPath] = useState(null);

  const genreStr = props.genres.join(', ');

  useEffect(() => {
    setTitle(props.title);
    setVoteAvg(props.voteAvg);
    setId(props.id);
    setPosterPath(props.url);
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
            <img alt="star" src={Star} />
          </StarImage>
          <RatingText>
            {voteAvg}
          </RatingText>
          <GenreTextBlock>
            {genreStr}
          </GenreTextBlock>
          <Link to={`/detail/${id}`}>
            <DetailsButton>
              View Details
            </DetailsButton>
          </Link>
        </InfoBox>
      </PosterCardBorder>
    </div>
  );
}

// View Details button => Leads to MovieDetailView
const DetailsButton = styled.button `

  display: none;
  align-items: center;
  background: ${colors.blue};
  color: white;
  margin: auto auto 5px auto;
  width: 100%;
  height: 47px;
  border-radius: 4px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 14px;
  border: none;
  
  &:focus {
    outline: none;
  }
`;

// Main Poster container => Allows for hovering reveal of DetailsButton and changes box shadow from poster image to outer border
const PosterCardBorder = styled.div `
  background-color: transparent;
  position: relative;
  margin: 20px 0px 5px 0px;
  padding: 5px;
  height: auto;

  &:hover {
    ${PosterCardImg} {
      box-shadow: none;
    }

    ${DetailsButton} {
      display: inline-block;
      position: absolute;
      margin-top: auto;
      bottom: 40px;

      @media ${device.desktopL} { 
        bottom: 125px;
      }
      @media ${device.desktop} {
        bottom: 50px;
      }
      @media ${device.laptopL} {
        bottom: 45px;
      }
      @media ${device.laptop} {
        bottom: 5px;
      }
      @media ${device.tablet} {
        bottom: 5px;
      }
      @media ${device.mobileL} {
        height: 32px;
        bottom: 0px;
      }
      @media ${device.mobileM} {
        height: 32px;
        bottom: 0px;
      }
      @media ${device.mobileS} {
        height: 32px;
        bottom: 0px;
      }
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

// Main info container => for headings, star image, movie rating, genre details, details button
const InfoBox = styled.div `
  height: 40%;
  position: relative;
  margin: 15px 10px;
  z-index: 2;
`;

// Heading container => used for main header containment
const HeadingBox = styled.div `
  display: inline-block;
  overflow: hidden;
  width: 60%;
  overflow: hidden;
`

// Heading box => Sets media query text sizes and overall styling of main movie title heading in top five box
const CardHeading = styled.h2 `
  position: relative;
  margin: -2px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  font-family: Roboto;
  font-weight: bold;
  color: ${colors.headerBlack};
  overflow: hidden;
  text-overflow: ellipsis;

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

// Simple container for star image
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

// Simple container for rating text next to star image
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

// container for genre text. Handles line overflow and width
const GenreTextBlock = styled.p `
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${colors.subheaderGray};
  font-size: 14px;
  width: 90%;
  margin: 5px 0 20px 0;
`;

export default TopFivePosterCard;