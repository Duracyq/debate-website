import React from 'react';
import './css/AboutMe.css';
import './css/App.css';
import marysia from './img/marsyia2.jpg';

function AboutMe({ lorem }) {
  return (
    <div className="AboutMe">
      <div className="container_aboutme">
        <img id="photo" src={marysia} alt="marysia" />
        <div className="statement" id="aboutme">
          {lorem}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
