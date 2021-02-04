import React from 'react';
import styled from 'styled-components';
import PosterCardImg from './posterCard';
import TopFivePosterCard from './topFiveCard';
import { CardGrid } from '../../styles/generalStyles';

const PosterCardGrid = ({ loading, data, isTopFive }) => {

  let movies = data;

  return (    
    <div>
        <ol>
          <CardGrid>
              {movies.map(movie => (
                <li key={movie.id}> 
                  { isTopFive ? (
                    <TopFivePosterCard url={movie.posterPath} title={movie.title} genres={movie.genres} voteAvg={movie.voteAverage}/>
                  ) : (
                    <PosterCardImg url={movie.posterPath} />
                  )
                  }             
                </li>
              ))}
          </CardGrid>
        </ol>
    </div>
  );
}

export default PosterCardGrid;