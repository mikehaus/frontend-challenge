import React from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight } from '../../styles/generalStyles';
import BackArrow from '../../assets/BackArrow.svg';
import { Link } from 'react-router-dom';
import getMoviesByGenre from '../../graphql/moviesByGenreQuery';
import PosterCardGrid from '../general/posterCardGrid';


const MenuFlex = styled.div `
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: white;
`;

const MenuSpacer = styled.div `

`;

const BackBtn = styled.div `
  display: flex;
  justify-content: center;
  margin: 5px 10px 5px 0px;
  width: 16px;
  height: 16px;
`;


const GenreView = (props) => {

  let genres = []
  genres.push(props.location.genreProps.genre);
  const { data, error, loading } = getMoviesByGenre({genres})
  let movies = data;

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
          <MainHeaderRight>{props.location.genreProps.genre}</MainHeaderRight>
        </MenuFlex>
        <PosterCardGrid data={movies} error={error} loading={loading} />
      </Container>
    </div>
  );
}

export default GenreView;
