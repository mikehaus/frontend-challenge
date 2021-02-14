import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight, device, colors, Loading } from '../general/generalStyles';
import BackgroundImageBlock from '../general/backgroundImageBlock';
import { Link, useRouteMatch } from 'react-router-dom';
import BackArrow from '../../assets/BackArrow.svg';
import GetMovieById from '../../graphql/movieByIdQuery';
import DetailInfoBlock from './detailInfoBlock';
import NotFound from '../../notFound';
import Avatar from '../../assets/Avatar.svg';

/*
 *  Component: MovieDetailView
 *  Description: Movie Detail Information container main view. Contains Movie image, detail info block, lower cast card grid
 *  About: Gets info from routed url info  
 * 
 *  @Props:
 *  :id => Movie identifier to allow gql query for movie by id
 */


const MovieDetailView = () => {

  let match = useRouteMatch('/detail/:id');
  let id = match.params.id
  const { data, error, loading } = GetMovieById({ id });
  let movie = data;
  console.log(movie);

  if (loading) return <Loading>Loading...</Loading>

  if (!movie || error) return <NotFound />

  return(
    <div>
      <NavBar />
      <Container>
        <BackgroundImageBlock />
        <MenuFlex>
          <Link to="/">
            <BackBtn>
              <img src={BackArrow} alt='back' />
            </BackBtn>
          </Link>
          <MainHeaderLeft>Movies: </MainHeaderLeft>
          <MainHeaderRight>Top 5</MainHeaderRight>
        </MenuFlex>
        <DetailContainer>
          <XlCard>
            <img alt={movie.title} src={movie.posterPath} />
          </XlCard>
          <DetailInfoBlock voteAverage={movie.voteAverage} 
                          title={movie.title} 
                          releaseDate={movie.releaseDate} 
                          director={movie.director.name} 
                          genres={movie.genres} 
                          overview={movie.overview} />
        </DetailContainer>
        <MenuFlex>
          <MovieDetailHeader>
            Cast
          </MovieDetailHeader>
        </MenuFlex>
        <CardFlex>
          {movie.cast.map(castMember => (
            <li key={castMember.name}>
              <CardBorder>
              { castMember.profilePath ? (
                <CastCard src={castMember.profilePath} alt={castMember.name} />
              ) : (
                <CastCard src={Avatar} alt="avatar" />
              )}
              <NameSubheader>
                {castMember.name}
              </NameSubheader>
              <PlayingAsSubheader>
                {castMember.character}
              </PlayingAsSubheader>
              </CardBorder> 
            </li>
          ))}
        </CardFlex>
      </Container>
    </div>
  );
}

// main flex container
const FlexDisplay = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  background: white;
`;

// menu flex container
const MenuFlex = styled(FlexDisplay) `
  margin-top: 60px;
  justify-content: flex-start;
  position: relative
`;

// cast card flex container
const CardFlex = styled(FlexDisplay) `
  margin-top: 10px;
  justify-content: space-between;
  list-style: none;
`;

// Cast Card sizing styles for holding image and info headers
const CardBorder = styled.div `
  position: relative;
  margin: 25px 15px;
  @media ${device.desktopL} { 
    height: 275px;
    width: 200px;
  }
  @media ${device.desktop} {
    height: 275px;
    width: 200px;
  }
  @media ${device.laptopL} {
    height: 250px;
    width: 140px;
  }
  @media ${device.laptop} {
    height: 250px;
    width: 140px;
  }
  @media ${device.mobileL} {
    height: 225px;
    width: 125px;
  }
  @media ${device.mobileM} {
    height: 225px;
    width: 125px;
  }
  @media ${device.mobileS} {
    height: 225px;
    width: 125px;
  }
`;

// Cast card image box
const CastCard = styled.img `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 20px 0;
  object-fit: cover;
  background: ${colors.blue};

  @media ${device.desktopL} { 
    height: 232px;
    width: 200px;
  }
  @media ${device.desktop} {
    height: 232px;
    width: 200px;
  }
  @media ${device.laptopL} {
    height: 175px;
    width: 140px;
  }
  @media ${device.laptop} {
    height: 175px;
    width: 140px;
  }
  @media ${device.mobileL} {
    height: 150px;
    width: 125px;
  }
  @media ${device.mobileM} {
    height: 150px;
    width: 125px;
  }
  @media ${device.mobileS} {
    height: 150px;
    width: 125px;
  }
`;

// Back button container
const BackBtn = styled.div `
  display: flex;
  position: relative;
  justify-content: center;
  margin: 5px 10px;
  width: 16px;
  background-color: white;
  z-index: 4;
  height: 16px;
`;

// flex box to hold movie detail section => helps with size proportions and resize issues
const DetailContainer = styled.div `
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 70%;  
  margin: 10px 10px 10px 0;

  @media ${device.tablet} {
    display: block;
  }
`;

// Special type of poster card that's same as others BUT BIGGER
const XlCard = styled.div `
display: flex;
border-radius: 4px;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
margin: 10px;
object-fit: cover;

  @media ${device.desktopL} { 
    height: 527px;
    width: 350px;
  }
  @media ${device.desktop} {
    height: 448px;
    width: 290px;
  }
  @media ${device.laptopL} {
    height: 438px;
    width: 290px;
  }
  @media ${device.laptop} {
    height: 324px;
    width: 205px;
  }
  @media ${device.mobileL} {
    height: 255px;
    width: 164px;
  }
  @media ${device.mobileM} {
    height: 255px;
    width: 164px;
  }
  @media ${device.mobileS} {
    height: 255px;
    width: 164px;
  }
`;

// Main header for Cast
const MovieDetailHeader = styled.h1 `
  display: inline;
  font-family: "Roboto";
  font-weight: normal;
  margin: 0px 10px;

  @media ${device.desktopL} { 
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 32px;
  }
  @media ${device.laptopL} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;

// Cast Name style
const NameSubheader = styled.div `
  color: ${colors.headerBlack};
  display: block;
  font-family: "Roboto";
  font-weight: medium;
  margin-top: 10px;
  word-wrap: wrap;
  width: 150px;

  @media ${device.desktopL} { 
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 18px;
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
    font-size: 14px;
  }
  @media ${device.mobileS} {
    font-size: 14px;
  }
`

// Cast Character playing as header
const PlayingAsSubheader = styled.div `
  color: ${colors.subheaderGray};
  display: inline-block;
  font-family: "Roboto";
  font-weight: medium;
  margin-top: 10px;
  word-wrap: wrap;

  @media ${device.desktopL} { 
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 16px;
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
  }
`

export default MovieDetailView;