import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as StyleComponentsGeneral from '../../styles/generalStyles';

const PosterCard = (props) => {

  const [title, setTitle] = useState(null);
  const [genres, setGenres] = useState(null);

  let posterPath = props.url;
  console.log(posterPath);

  useEffect(() => {
    setTitle(props.title);
    setGenres(props.genres);
  }, []);

  return (
    <div>
      <StyleComponentsGeneral.PosterCard>
        <img src={posterPath} />
      </StyleComponentsGeneral.PosterCard>
    </div>
  );
}

export default PosterCard;
