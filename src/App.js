import './css/App.css';
import AboutMe from './AboutMe';
import Postulaty from './Postulaty';
import Copyright from './Copyright';
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';
import { scrollToTop, updateAppHeight } from './scripts/helpers';

function App({ lorem, about_me, title }) {
  const [loremMap] = useState([
    { id: '1', text: lorem['1']},
    { id: '2', text: lorem['2'] },
    { id: '3', text: lorem['3'] },
    { id: '4', text: lorem['4'] },
    { id: '5', text: lorem['5'] },
    { id: '6', text: lorem['6'] },
    { id: '7', text: lorem['7'] },
    { id: '8', text: lorem['8'] },
    { id: '9', text: lorem['9'] },
    { id: '10', text: lorem['10'] }
  ]);

  const [loremTitle] = useState([
    { id: '1', text: title['1']},
    { id: '2', text: title['2'] },
    { id: '3', text: title['3'] },
    { id: '4', text: title['4'] },
    { id: '5', text: title['5'] },
    { id: '6', text: title['6'] },
    { id: '7', text: title['7'] },
    { id: '8', text: title['8'] },
    { id: '9', text: title['9'] },
    { id: '10', text: title['10'] }
  ])

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
          const windowWidth = window.innerWidth
          const windowHeight = window.innerHeight;
          const fullHeight = document.documentElement.scrollHeight;
          const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;

          setIsScrollDone(
            (windowWidth > 600 && windowWidth < 1000) ||
            (scrollPercentage >= 85 && (windowWidth <= 600 || windowWidth >= 1000))
          )

          setPrevScrollPos(scrollPosition);
        };
        const event = (window.innerWidth > 600 && window.innerWidth < 1000) ? 'load' : 'scroll'
        window.addEventListener(event, handleScrollPosition);
        return () => window.removeEventListener(event, handleScrollPosition);
      }, [prevScrollPos]);
      useEffect(() => {
        if (isScrollDone && prevScrollPos > window.innerHeight) {
          setIsScrollDone(false);
        }
      }, [isScrollDone, prevScrollPos]);

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
  <div className="App" class='notranslate'>
    <div className='background-image'>  
      <div className="app-wrapper" ref={appRef}>
        {/* version 1 */}
        <div className="header">
          <img id="herb" src={herb} alt="herb" />
          <h1>Marysia Ancerowicz</h1>
        </div>
        
        <AboutMe lorem={about_me} />

        <div className="content-wrapper">

          <Postulaty lorem={loremMap} title={loremTitle} />


          {waveVisible && (
            <div className={`wave-container ${
              prevScrollPos > 0
              ? 'slide-up'
              : ''
            }`}>
              <div className='vote'>
                <h2>Zagłosuj na mnie!</h2>
                <g>Marysia Ancerowicz</g>
              </div>
              <div className="wave-animation">
                <Copyright className="copyright" />
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
  </div>
  );
}

export default App;
