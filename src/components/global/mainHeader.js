import React from 'react';
import '../../styles/components/ui/headers.css';

const MainHeader = (props) => {

  return (
    <div>
      <h1><span className="main-header-left">{props.topic}:</span> {props.title}</h1>
    </div>
  );
}

export default MainHeader;