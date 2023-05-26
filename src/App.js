import './App.css';
import herb from './img/asdasd.png'
import QR_CODE from './img/Debate-website.png'
import Wave from 'react-wavify'

import { useState, useEffect } from 'react';


function App({ lorem }) {
  // scroll arrow button
  const [showScrollButton, setShowScrollButton] = useState(false)
  
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

  // frontend
  return (
    <div className="App">
      <div className="holder-container">
        <div className="header">
          <img id="herb" src={herb} alt="herb" />
          <h1>Marysia Ancerowicz</h1>
        </div>
  
        <div className="container">
          {/* placeholder */}
          {lorem} <br />
          {lorem} <br />
          {lorem} <br />
          {lorem} <br />
          {lorem} <br />
        </div>
  
        {/* wave at the bottom*/}
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