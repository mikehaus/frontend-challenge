import React, { Suspense } from 'react';
import styled from 'styled-components';
import { CardGrid } from '../../styles/generalStyles';

/*
 *  Component: PosterCardGrid
 *  Description: General use PosterImage - No special styling
 *  @Props: 
 *  loading: boolean if loading from query
 *  data: Movie information array from query
 *  error: boolean if received error from query
 *  isTopFive: Boolean tells if it is the TopFive section so it knows which type of cards to display
 */


const Poster = React.lazy(() => import('./posterCard'));
const TopFivePoster = React.lazy(() => import('./topFiveCard'));

const PosterCardGrid = ({ loading, data, error, isTopFive }) => {

  const movies = data;

  if (loading) return <Loading>Loading...</Loading>
  if (error) return <Loading>Error</Loading>

  return (    
    <div>
        <ol>
          <CardGrid>
            <Suspense fallback={<Loading>Loading...</Loading>} >
              {movies.map(movie => (
                <li key={movie.id}> 
                  { isTopFive ? (
                    <TopFivePoster url={movie.posterPath} title={movie.title} genres={movie.genres} id={movie.id} voteAvg={movie.voteAverage}/>
                  ) : (
                    <Poster url={movie.posterPath} />
                  )
                  }             
                </li>
              ))}
            </Suspense>
          </CardGrid>
        </ol>
    </div>
  );
}

const Loading = styled.div `
  width: 100%;
  height: 500px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 45px;
  display: flex;
  align-items: center;
  margin: 60px;
  justify-content: center;
`;

export default PosterCardGrid;