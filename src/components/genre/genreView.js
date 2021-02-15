import { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../general/navBar';
import { Container, MainHeaderLeft, MainHeaderRight, device } from '../general/generalStyles';
import BackArrow from '../../assets/BackArrow.svg';
import { Link, useRouteMatch } from 'react-router-dom';
import getMoviesByGenre from '../../graphql/moviesByGenreQuery';
import PosterCardGrid from '../general/posterCardGrid';
import NotFound from '../../notFound';
import BackgroundImageBlock from '../general/backgroundImageBlock';

/*
 *  Component: GenreView
 *  Description: Main View for Movies by Genre - receives info by route
 *  @Route Props: 
 *  :genre - genre received to query
 * 
 *  About this component: 
 *  Default filter is Popularity and can be switched in the filter dropdown menu
 *  
 *  Methods:
 *  handleSelect - Takes in form event from submit, sets filter state and causes re-render
 */

const GenreView = () => {

  const [ filter, setFilter ] = useState("Popularity");
  let genres = [];
  let match = useRouteMatch('/genre/:genre');
  genres.push(match.params.genre);
  const { data, error, loading } = getMoviesByGenre({genres, filter});
  let movies = data;

  const handleSelect = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    movies = data;
  }

  if (data.length === 0) return <NotFound />

  return(
    <div>
      <NavBar />
      <Container>
        <BackgroundImageBlock />
        <Menu>
          <Headers>
            <Link to="/">
              <BackBtn>
                <img src={BackArrow} alt='back' />
              </BackBtn>
            </Link>
            <MainHeaderLeft>Movies: </MainHeaderLeft>
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

// Main header flex menu container => Handles heading, back button, sort by info
const Menu = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Back button container
const BackBtn = styled.div `
  display: inline;
  position: relative;
  background-color: white;
  z-index: 2;
  margin: 0px 15px 5px 0px;
  width: 16px;
  height: 16px;

  @media ${device.mobileL} {
    left: -15px;
  }
`;

// Basic header justification
const Headers = styled.div `
  justify-self: flex-start;
`;

// Selection box styleing
const SelectSection = styled.form `
  display: flex;
  position: relative;
  background: white;
  justify-self: flex-end;
  align-items: center;
  font-family: "Roboto";
  font-weight: normal;
`;

// Spaces and styles "Sort by"
const SortByLabel = styled.h6 `
  display: inline;
  color: rgb(143, 154, 162);
  font-size: 14px;
  margin-right: 10px;
`;

// Drop down menu
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

  @media ${device.mobileL} {
    width: 125px;
  }
`;

export default GenreView;
