import styled from 'styled-components';
import Star from '../../assets/Star.svg';
import { colors, device } from '../general/generalStyles';

/*
 *  Component: DetailInfoBlock
 *  Description: Movie Detail Information container. Holds the title, genre info, description, etc.
 *  
 *  @Props:
 *  voteAverage: Movie Vote score
 *  title: Movie Title
 *  genres: Array of genre strings, joined at beginning by commas
 *  releaseDate: Release data string sliced to show year
 *  director: Movie Director
 *  overview: Movie Description
 */

const DetailInfoBlock = (props) => {

  const genreStr = props.genres.join(', ');

  return (
    <div>
      <DetailBox>
        <RatingHeader>
          <StarImg src={Star} />
          <LeftRatingText>{props.voteAverage}</LeftRatingText>
          <RightRatingText> /10</RightRatingText>
        </RatingHeader>
        <LeftDetailHeader>{props.title}</LeftDetailHeader>
        <RightDetailHeader>({props.releaseDate.slice(0, 4)})</RightDetailHeader>
        <GenreHeader>{genreStr}</GenreHeader>
        <DetailHeaderSpacer>
          <DirectorHeader>Director: {props.director}</DirectorHeader>
          <OverviewHeader>{props.overview}</OverviewHeader>
        </DetailHeaderSpacer>
      </DetailBox>
    </div>
  );
}

// margin container for movie information
const DetailBox = styled.div `
  margin: 30px 20px;
`;

// Heading box for rating info
const RatingHeader = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0;
`;

// Simple star image styled comp
const StarImg = styled.img `
  display: inline-block;
  width: 16px;
  height: 16px;
  color: ${colors.blue};
`;

// styling for rating score
const LeftRatingText = styled.div `
  margin: 0px 3px;
  display: inline-block;
  font-size: 16px;
  color: ${colors.blue};
  font-weight: bold;
`;

// styling for /10
const RightRatingText = styled.div `
  display: inline-block;
  margin-top: auto;
  font-size: 12px;
  color: rgb(187, 186, 186);
  font-weight: 500;
`;

// Main detail header style
const MovieDetailHeader = styled.h1 `
  display: inline;
  font-family: "Roboto";
  font-weight: bold;
  margin: 10px 0;

  @media ${device.desktopL} { 
    font-size: 56px;
  }
  @media ${device.desktop} {
    font-size: 56px;
  }
  @media ${device.laptopL} {
    font-size: 42px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
  @media ${device.mobileL} {
    font-size: 26px;
  }
  @media ${device.mobileM} {
    font-size: 26px;
  }
  @media ${device.mobileS} {
    font-size: 26px;
  }
`;

// Left Main Heading for movie name
const LeftDetailHeader = styled(MovieDetailHeader) `
  color: ${colors.headerBlack};
`;

// Right header for release year
const RightDetailHeader = styled(MovieDetailHeader) `
  color: rgb(187, 186, 186);
  margin-left: 10px;
`;

// Header for Genre String
const GenreHeader = styled.h2 `
  color: rgb(99, 114, 125);
  font-weight: normal;
  margin: 10px 0;
  
  @media ${device.desktopL} { 
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;

// Spacer between genre and director section
const DetailHeaderSpacer = styled.div `
  margin: 40px 0;

  @media ${device.tablet} {
    margin: 20px 0;  
  }
`;

const DirectorHeader = styled.h6 `
  margin: 10px 0;
  color: ${colors.headerBlack};
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
`;

const OverviewHeader = styled.h5 `
  margin: 5px 0;
  max-width: 100%;
  color: ${colors.headerGray};
  font-family: "Roboto";
  font-weight: normal;
  font-size: 20px;

  @media ${device.laptop} {
    font-size: 16px;  
  }
  @media ${device.mobileL} {
    font-size: 16px;  
  }
`;

export default DetailInfoBlock;