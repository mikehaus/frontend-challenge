import React from 'react';
import { useState, useEffect } from 'react';
import ImageCard from '../global/imageCard';
import '../../styles/components/global/imageCard.css';

const ImageList = (props) => {
  console.log(props.data)

  return (
    <div>
        <ol>
          {props.data.map(movie => (
            <li key={movie.id}>
              <ul>
                <li>
                  <ImageCard imgURL={movie.posterData} />
                </li>
              </ul>
            </li>
          ))}
        </ol>
    </div>
  );
}


const ImageCardTopGrid = (props) => {

  return (
    <div className="image-card-flex-container">
      <ImageList data={props.topFive} />
    </div>
  );
}


export default ImageCardTopGrid;