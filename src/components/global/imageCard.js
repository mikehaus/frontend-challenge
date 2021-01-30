import React from 'react';
import '../../styles/components/global/imageCard.css';

const ImageCard = (props) => {
  return (
    <div className='image-card'>
      <img src={props.imgURL} />
    </div>
  );
}

export default ImageCard;