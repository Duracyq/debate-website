import './css/App.css';
import AboutMe from './AboutMe';
import Postulaty from './Postulaty';
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';
import { scrollToTop, updateAppHeight } from './scripts/helpers';

function App({ lorem, testTxt }) {
  const [loremMap] = useState([
    { id: '1', text: '1 ' + testTxt },
    { id: '2', text: '2 ' + testTxt },
    { id: '3', text: '3 ' + testTxt },
    { id: '4', text: '4 ' + testTxt },
    { id: '5', text: '5 ' + testTxt },
    { id: '6', text: '6 ' + testTxt },
    { id: '7', text: '7 ' + testTxt },
    { id: '8', text: '8 ' + testTxt },
    { id: '9', text: '9 ' + testTxt },
    { id: '10', text:'10 ' + testTxt },
  ]);

  const [showScrollButton, setShowScrollButton] = useState(false);
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

          if (scrollPercentage >= 83) {
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

  // scroll arrow
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScroll = window.scrollY > 0;
      setShowScrollButton(shouldShowScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // frontend
  return (
    <div className="App">
      <div className="app-wrapper" ref={appRef}>
        {/* version 1 */}
        <div className="header">
          <img id="herb" src={herb} alt="herb" />
          <h1>Marysia Ancerowicz</h1>
        </div>
        
        <AboutMe lorem={lorem} />

        <div className="content-wrapper">

        <Postulaty lorem={loremMap} />


        {waveVisible && (
          <div className={`wave-container ${prevScrollPos > 0 ? 'slide-up' : ''}`}>
            <div className='vote'>
              <h2>Zagłosuj na mnie!</h2>
              <g>Marysia Ancerowicz</g>
            </div>
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
