import React from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight } from '../../styles/generalStyles';
import { Link, useRouteMatch } from 'react-router-dom';
import BackArrow from '../../assets/BackArrow.svg';
import GetMovieById from '../../graphql/movieByIdQuery';

const MenuFlex = styled.div `
  margin-top: 60px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

const MovieDetailView = () => {

  let match = useRouteMatch('/detail/:id');
  let id = match.params.id
  const { data, error, loading } = GetMovieById({ id });
  let movies = data;
  console.log(movies);

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
      </Container>
    </div>
  );
}

export default MovieDetailView;