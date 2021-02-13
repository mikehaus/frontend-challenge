import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight } from '../../styles/generalStyles';
import BackArrow from '../../assets/BackArrow.svg';
import { Link, useRouteMatch } from 'react-router-dom';
import getMoviesByGenre from '../../graphql/moviesByGenreQuery';
import PosterCardGrid from '../general/posterCardGrid';
import NotFound from '../../notFound';


const GenreView = () => {

  const [ filter, setFilter ] = useState("Popularity");
  let genres = [];
  let match = useRouteMatch('/genre/:genre');
  console.log(match.params.genre);
  //genres.push(props.location.genreProps.genre);
  genres.push(match.params.genre);
  const { data, error, loading } = getMoviesByGenre({genres, filter});
  let movies = data;

  const handleSelect = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    movies = data;
  }

  if (data.length == 0) return <NotFound />

  return(
    <div>
      <NavBar />
      <Container>
        <Menu>
          <Headers>
            <Link to="/">
              <BackBtn>
                <img src={BackArrow} alt='back' />
              </BackBtn>
            </Link>
            <MainHeaderLeft>Movies: </MainHeaderLeft>
            {/*<MainHeaderRight>{props.location.genreProps.genre}</MainHeaderRight>*/}
            <MainHeaderRight>{match.params.genre}</MainHeaderRight>
          </Headers>
          <SelectSection>
            <SortByLabel>
              Sort by
            </SortByLabel>
            <SortByDropDown value={filter} onChange={handleSelect}>
              <option value="Popularity">Popularity</option>
              <option value="releaseDate">Release Date</option>
              <option value="budget">Budget</option>
              <option value="runtime">Runtime</option>
              <option value="voteCount">Vote Count</option>
              <option value="voteAverage">Vote Score</option>
            </SortByDropDown>
          </SelectSection>
        </Menu>
        <PosterCardGrid data={movies} error={error} loading={loading} />
      </Container>
    </div>
  );
}

const Menu = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackBtn = styled.div `
  display: inline;
  margin: 0px 15px 5px 0px;
  width: 16px;
  height: 16px;
`;

const Headers = styled.div `
  justify-self: flex-start;
`;

const SelectSection = styled.form `
  display: flex;
  justify-self: flex-end;
  align-items: center;
  font-family: "Roboto";
  font-weight: normal;
`;

const SortByLabel = styled.h6 `
  display: inline;
  color: rgb(143, 154, 162);
  font-size: 14px;
  margin-right: 10px;
`;

const SortByDropDown = styled.select `
  padding: 10px;
  display: inline;
  background: white;
  border-radius: 4px;
  border: 1px solid rgb(228, 228, 228);
  color: rgb(51, 51, 51);
  height: 40px;
  width: 164px;

  &:after {
    color: rgb(99, 114, 125);
  }
`;

export default GenreView;
