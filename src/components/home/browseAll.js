import React from 'react';
import { useState, useEffect } from 'react';
import { SectionHeaderBot, SectionHeaderTop, Container }from '../../styles/generalStyles';
import styled from 'styled-components';
import PosterCardGrid from '../general/posterCardGrid';
import GetMoviesByFilter from '../../graphql/moviesByFilterQuery';
import PosterCard from '../general/posterCard';

const BrowseMargin = styled.div `
  margin: 60px 0;
`;

const BrowseAll = () => {

  const [ moviesFiltered, setMoviesFiltered ] = useState(null);

  const filter = "popularity";
  const { data, error, loading } = GetMoviesByFilter(filter);

  return(
    <div>
      <Container>
        <BrowseMargin>
          <SectionHeaderTop>Movies</SectionHeaderTop>
          <SectionHeaderBot>Browse All</SectionHeaderBot>
        </BrowseMargin>
      </Container>
    </div>
  );
}

export default BrowseAll;
