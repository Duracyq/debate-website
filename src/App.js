import './css/App.css';
import AboutMe from './AboutMe'
import Postulaty from './Postulaty';
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';
import { scrollToTop, updateAppHeight } from './scripts/helpers';


function App({ lorem }) {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [showMenuButton, setShowMenuButton] = useState(false)
  const appRef = useRef(null)

  // app hegiht
  useEffect(() => {
    updateAppHeight(appRef)
    window.addEventListener('resize', () => updateAppHeight(appRef))
    return () => window.removeEventListener('resize', () => updateAppHeight(appRef))
  })

  // menu shower
  useEffect(() => {
    const handleMenu = () => {
      const shouldShowMenu = window.innerWidth <= 420
      setShowMenuButton(shouldShowMenu)
    }
    window.addEventListener('resize', handleMenu)
    return () => window.removeEventListener('resize', handleMenu)
  })

  // scroll arrow
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScroll = window.scrollY > 0
      setShowScrollButton(shouldShowScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const clicked = () => console.log('clicked')

  // frontend
  return (
    <div className="App" ref={appRef}>
      <div className="holder-container">
        <div className="header">
                  <img id="herb" src={herb} alt="herb" />
                  <h1>Marysia Ancerowicz</h1>
              </div>

        {/* <AboutMe
          lorem={lorem}
        />
         */}
        <Postulaty
          showMenuButton={showMenuButton}
          clicked={clicked}
          lorem={lorem}
          showScrollButton={showScrollButton}
          scrollToTop={scrollToTop}
        />

        {/* wave at the bottom*/}
        <div className="wave">
        <Wave
            fill="#e8bdc3"
            paused={false}
            options={{
              height: 0,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
        </div>
    
          {/* scroll arrow */}
          {showScrollButton && (
            <div className="scroll-button" onClick={scrollToTop}>
              <span className="material-icons">&#xe5d8;</span>
            </div>
          )}
          {/* scroll arrow */}
      </div>
    </div>
  );
  
}

export default App;