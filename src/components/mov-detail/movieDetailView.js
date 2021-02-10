import React from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight, device } from '../../styles/generalStyles';
import { Link, useRouteMatch } from 'react-router-dom';
import BackArrow from '../../assets/BackArrow.svg';
import GetMovieById from '../../graphql/movieByIdQuery';
import DetailInfoBlock from './detailInfoBlock';
import NotFound from '../../notFound';

const MenuFlex = styled.div `
  margin-top: 60px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  background: white;
`;

const BackBtn = styled.div `
  display: flex;
  justify-content: center;
  margin: 5px 10px;
  width: 16px;
  height: 16px;
`;

const DetailContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  height: 70%;  
  margin: 10px 10px 10px 0;

  @media ${device.tablet} {
    display: block;
  }
`;

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

const MovieDetailView = () => {

  let match = useRouteMatch('/detail/:id');
  let id = match.params.id
  const { data, error, loading } = GetMovieById({ id });
  let movie = data;
  console.log(movie);

  if (loading) return <div>Loading...</div>

  if (!movie) return <NotFound />

  return(
    <div>
      <NavBar />
      <Container>
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
            <img src={movie.posterPath} />
          </XlCard>
          <DetailInfoBlock voteAverage={movie.voteAverage} 
                          title={movie.title} 
                          releaseDate={movie.releaseDate} 
                          director={movie.director.name} 
                          genres={movie.genres} 
                          overview={movie.overview} />
        </DetailContainer>
      </Container>
    </div>
  );
}

export default MovieDetailView;