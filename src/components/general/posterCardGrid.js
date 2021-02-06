import React, { Suspense } from 'react';
import styled from 'styled-components';
import { CardGrid } from '../../styles/generalStyles';

const Poster = React.lazy(() => import('./posterCard'));
const TopFivePoster = React.lazy(() => import('./topFiveCard'));

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

const PosterCardGrid = ({ loading, data, error, isTopFive }) => {

  let movies = data;

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

export default PosterCardGrid;