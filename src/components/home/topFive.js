import React from 'react';
import { MainHeaderLeft, MainHeaderRight, Container } from '../general/generalStyles';
import getTopFiveMovies from '../../graphql/topFiveQuery';
import PosterCardGrid from '../general/posterCardGrid';

/*
 *  Component: TopFive
 *  Description: Homepage Top Five Section - Contains header and card grid for top five posters.
 *  About: Used to get top five movie info and pass down as props to PosterCardGrid
 *  
 *  @Methods:
 * 
 *  getTopFiveMovies => GQL query to filter only top 5 movies based first on score then ranked on popularity
 */

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