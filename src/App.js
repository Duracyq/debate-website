import './App.css';
import Postulaty from './Postulaty';
import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';



function App({ lorem }) {
  // scroll arrow button
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [showMenuButton, setShowMenuButton] = useState(false)

  useEffect(() => {
    const handleMenu = () => {
      const shouldShowMenu = window.innerWidth <= 420
      setShowMenuButton(shouldShowMenu)
    }
    window.addEventListener('resize', handleMenu)
    return () => window.removeEventListener('resize', handleMenu)
  })
  
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScroll = window.scrollY > 0
      setShowScrollButton(shouldShowScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // scroll arrow end

  const clicked = () => console.log('clicked')

  // frontend
  return (
    <div className="App">
      <div className="holder-container">
        <div className="header">
                  <img id="herb" src={herb} alt="herb" />
                  <h1>Marysia Ancerowicz</h1>
              </div>
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