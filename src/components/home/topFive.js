import React from 'react';
import styled from 'styled-components';
import * as StyledCompsGeneral from '../../styles/generalStyles';
import getTopFiveMovies from '../../graphql/topFiveQuery';
import PosterCard from '../general/posterCard';

const ImageList = ({ loading, data }) => {
  
  let topFive = data;

  return (    
    <div>
        <ol>
          <StyledCompsGeneral.CardGrid>
              {topFive.map(movie => (
                <li key={movie.id}>
                      <PosterCard url={movie.posterPath} title={movie.title} genres={movie.genres} />
                </li>
              ))}
          </StyledCompsGeneral.CardGrid>
        </ol>
    </div>
  );
}


const TopFive = () => {

  let { data, error, loading } = getTopFiveMovies();
  console.log(data);

  return (
    <div>
      <StyledCompsGeneral.MainHeaderLeft>Movies:</StyledCompsGeneral.MainHeaderLeft>
      <StyledCompsGeneral.MainHeaderRight>Top Five</StyledCompsGeneral.MainHeaderRight>
      <ImageList loading={loading} data={data} />
    </div>
  );
}

export default TopFive;