import React from 'react';
import styled from 'styled-components';
import { MainHeaderLeft, MainHeaderRight, Container }from '../../styles/generalStyles';
import getTopFiveMovies from '../../graphql/topFiveQuery';
import PosterCardGrid from '../general/posterCardGrid';

const TopFive = () => {

  let { data, error, loading } = getTopFiveMovies();

  return (
    <div>
      <Container>
        <MainHeaderLeft>Movies:</MainHeaderLeft>
        <MainHeaderRight>Top Five</MainHeaderRight>
        <PosterCardGrid loading={loading} data={data} error={error} isTopFive={true} />
      </Container>
    </div>
  );
}

export default TopFive;