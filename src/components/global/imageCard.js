import React from 'react';

const ImageCard = (props) => {
  return (
    <div>
      <img src={props.imgURL} />
    </div>
  );
}

export default ImageCard;