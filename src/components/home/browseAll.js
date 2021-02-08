import React from 'react';
import { useState, useEffect } from 'react';
import { SectionHeaderBot, SectionHeaderTop, Container }from '../../styles/generalStyles';
import styled from 'styled-components';
import PosterCardGrid from '../general/posterCardGrid';
import GetMoviesByFilter from '../../graphql/moviesByFilterQuery';

const BrowseMargin = styled.div `
  margin: 60px 0;
`;

const Menu = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const BrowseAll = () => {

  const [ filter, setFilter ] = useState("Popularity");
  const { data, error, loading } = GetMoviesByFilter({filter});
  let movies = data;

  const handleSelect = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
    movies = data;
  }

  return(
    <div>
      <Container>
        <BrowseMargin>
          <Menu>
            <Headers>
              <SectionHeaderTop>Movies</SectionHeaderTop>
              <SectionHeaderBot>Browse All</SectionHeaderBot>
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
          <PosterCardGrid loading={loading} data={movies} error={error} />
        </BrowseMargin>
      </Container>
    </div>
  );
}

export default BrowseAll;
