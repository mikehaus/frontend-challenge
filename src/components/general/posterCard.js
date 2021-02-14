import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device, PosterCardImg } from './generalStyles';

/*
 *  Component: PosterCard
 *  Description: General use PosterImage - No special styling
 *  @Props: 
 *  url: path to poster url
 * 
 *  Methods:
 * 
 *  useEffect => on initial load sets the poster path
 *  displayModal => On click, displays modal overlay (planned for implementation)
 */


const PosterCard = (props) => {

  const [ posterPath, setPosterPath ] = useState(null);

  useEffect(() => {
    setPosterPath(props.url)
  }, [])

  const displayModal = () => {
    console.log('clicked on poster')
  }

  return (
    <div>
      <PosterCardImg onClick={displayModal}>
        <img src={posterPath} alt="poster" />
      </PosterCardImg>
    </div>
  );
}

export default PosterCard;
