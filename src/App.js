import './css/App.css';
import AboutMe from './AboutMe';
import Postulaty from './Postulaty';
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';
import { scrollToTop, updateAppHeight } from './scripts/helpers';

function App({ lorem }) {
  const [loremMap] = useState([
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: '2', text: 'Praesent tincidunt erat a lorem bibendum varius.' },
    { id: '3', text: 'Donec gravida metus at mi consequat, eget aliquam orci aliquam.' },
    { id: '4', text: 'Fusce consectetur neque vel urna aliquet eleifend.' },
    { id: '5', text: 'Vestibulum ullamcorper urna id ex elementum, nec euismod dui fringilla.' },
  ]);

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const appRef = useRef(null);
// useState for scroll position and animation
const [isScrollDone, setIsScrollDone] = useState(false);
const [waveVisible, setWaveVisible] = useState(false);
const [prevScrollPos, setPrevScrollPos] = useState(0);

// useEffect for scroll position
useEffect(() => {
  const handleScrollPosition = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;

    if (scrollPercentage >= 95) {
      setIsScrollDone(true);
    } else {
      setIsScrollDone(false);
    }

    setPrevScrollPos(scrollPosition);
  };

  window.addEventListener('scroll', handleScrollPosition);
  return () => window.removeEventListener('scroll', handleScrollPosition);
}, [prevScrollPos]);

// useEffect for wave visibility
useEffect(() => {
  if (isScrollDone) {
    setWaveVisible(true);
  } else {
    setWaveVisible(false);
  }
}, [isScrollDone]);


  // app height
  useEffect(() => {
    updateAppHeight(appRef);
    window.addEventListener('resize', () => updateAppHeight(appRef));
    return () => window.removeEventListener('resize', () => updateAppHeight(appRef));
  }, []);

  // menu shower
  useEffect(() => {
    const handleMenu = () => {
      const shouldShowMenu = window.innerWidth <= 420;
      setShowMenuButton(shouldShowMenu);
    };
    window.addEventListener('resize', handleMenu);
    return () => window.removeEventListener('resize', handleMenu);
  }, []);

  // scroll arrow
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScroll = window.scrollY > 0;
      setShowScrollButton(shouldShowScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clicked = () => console.log('clicked');

  // frontend
  return (
    <div className="App">
      <div className="app-wrapper" ref={appRef}>
          {showMenuButton
            && 
            <div className='menuButton'>
                <span className="material-icons" onClick={clicked}>menu</span>
            </div>
            }
        <div className="header">
          <img id="herb" src={herb} alt="herb" />
          <h1>Marysia Ancerowicz</h1>
        </div>
        
        <AboutMe lorem={lorem} />

        <div className="content-wrapper">

        <Postulaty lorem={loremMap} />

        {waveVisible && (
          <div className={`wave-container ${isScrollDone ? 'slide-up' : ''}`}>
            <div className="wave-animation">
              <Wave
                fill="#e8bdc3"
                paused={false}
                options={{
                  height: 20,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3,
                }}
              />
            </div>
          </div>
        )}

          {showScrollButton && (
            <div className="scroll-button" onClick={scrollToTop}>
              <span className="material-icons">&#xe5d8;</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
