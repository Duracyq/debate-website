import './App.css';
import herb from './img/asdasd.png'
import Wave from 'react-wavify'

import { useState, useEffect } from 'react';


function App({ lorem }) {
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

  return (
    <div className="App">
      <div className="holder-container">
        
        <div className="header">
          <img id='herb'src={herb} alt='herb'></img>
          <h1>Marysia Ancerowicz</h1>

        <div className='container'>
          {/* placeholder */}
          {lorem}        
          {lorem}        
          {lorem}        
          {lorem}        
          {lorem}        
        </div>  
        </div>
        {/* wave at the bottom*/}
          <Wave fill='#e8bdc3'
            paused={false}
            options={{
              height: 0,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
          />
          {/* scroll arrow */}
            {showScrollButton && (
            <div className="scroll-button" onClick={scrollToTop}>
              <span>&#8593;</span>
            </div>
            )}
          {/* scroll arrow end */}
      </div>
    </div>
  );
}

export default App;
