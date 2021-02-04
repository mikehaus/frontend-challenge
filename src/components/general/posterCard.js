import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PosterCardImg } from '../../styles/generalStyles';


const PosterCard = (props) => {

  let posterPath = props.url;

  return (
    <div>
      <PosterCardImg>
        <img src={posterPath} />
      </PosterCardImg>
    </div>
  );
}

export default PosterCard;
