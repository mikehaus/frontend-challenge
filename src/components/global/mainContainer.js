import React from 'react';
import '../../styles/components/global/mainContainer.css';
import MainHeader from './mainHeader';


// Component Main Container
// Allows us to place global Components and load into main

// TODO: ADD DOTS TO BACKGROUND
const MainContainer = () => {
  return (
    <div className="main-container">
      <MainHeader topic="Movies"
                  title="Top 5" />
      
    </div>
  );
}

export default MainContainer;
