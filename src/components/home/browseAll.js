import React from 'react';
import { useState, useEffect } from 'react';
import { SectionHeaderBot, SectionHeaderTop, Container }from '../../styles/generalStyles';
import styled from 'styled-components';
import PosterCardGrid from '../general/posterCardGrid';
import GetMoviesByFilter from '../../graphql/moviesByFilterQuery';

const BrowseMargin = styled.div `
  margin: 60px 0;
`;

const BrowseAll = () => {

  let filter = 'popularity';
  const { data, error, loading } = GetMoviesByFilter({filter});
  let movies = data;

  return(
    <div>
      <Container>
        <BrowseMargin>
          <SectionHeaderTop>Movies</SectionHeaderTop>
          <SectionHeaderBot>Browse All</SectionHeaderBot>
          <PosterCardGrid loading={loading} data={movies} error={error} />
        </BrowseMargin>
      </Container>
    </div>
  );
}

export default BrowseAll;
