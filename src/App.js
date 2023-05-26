import './css/App.css';
import AboutMe from './AboutMe';
import Postulaty from './Postulaty';
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import herb from './img/asdasd.png';
import { scrollToTop, updateAppHeight } from './scripts/helpers';

function App({ lorem }) {
  const [loremMap] = useState([
    { id: '1', text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere volutpat elit, ut rutrum turpis feugiat a. Mauris sit amet iaculis ex. Nam eu risus euismod, suscipit urna id, convallis nunc. Proin consectetur odio eu gravida cursus. Aliquam ac varius justo. Suspendisse id ligula metus. Vestibulum dictum orci ut nibh dapibus, nec rhoncus elit commodo. Integer id ipsum quis mi tempus dapibus non a arcu. Quisque scelerisque, ex at rhoncus tincidunt, lorem eros viverra enim, et dignissim justo nulla sed leo. Vestibulum sit amet quam et nibh tincidunt suscipit vitae nec libero. Sed convallis, justo a semper bibendum, sem massa gravida neque, ac blandit neque justo eget metus.\n\nNunc malesuada elit ut lectus dignissim, sed rhoncus ipsum volutpat. Cras aliquam eros id libero cursus, nec facilisis orci malesuada. Mauris vitae malesuada turpis. Aliquam at lobortis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar faucibus magna, vel feugiat sapien ultricies ac.\n\nUt eleifend lectus sit amet tortor maximus, ut rutrum odio vestibulum. Aliquam eu mauris quis nisl pellentesque efficitur. Integer fringilla feugiat ligula. Suspendisse aliquam tortor vel tortor placerat tincidunt. Morbi lobortis feugiat nibh at bibendum. Nullam vel tortor feugiat, cursus orci vitae, condimentum urna.Sed ut nunc in erat auctor consequat. Pellentesque iaculis rutrum lectus, ut pharetra nibh venenatis nec. Morbi lacinia lectus ut urna tempor, ut malesuada lacus elementum. Curabitur vehicula diam nec neque facilisis, id dictum odio maximus. Aenean feugiat commodo enim, in feugiat diam varius quis.' },
    { id: '2', text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere volutpat elit, ut rutrum turpis feugiat a. Mauris sit amet iaculis ex. Nam eu risus euismod, suscipit urna id, convallis nunc. Proin consectetur odio eu gravida cursus. Aliquam ac varius justo. Suspendisse id ligula metus. Vestibulum dictum orci ut nibh dapibus, nec rhoncus elit commodo. Integer id ipsum quis mi tempus dapibus non a arcu. Quisque scelerisque, ex at rhoncus tincidunt, lorem eros viverra enim, et dignissim justo nulla sed leo. Vestibulum sit amet quam et nibh tincidunt suscipit vitae nec libero. Sed convallis, justo a semper bibendum, sem massa gravida neque, ac blandit neque justo eget metus.\n\nNunc malesuada elit ut lectus dignissim, sed rhoncus ipsum volutpat. Cras aliquam eros id libero cursus, nec facilisis orci malesuada. Mauris vitae malesuada turpis. Aliquam at lobortis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar faucibus magna, vel feugiat sapien ultricies ac.\n\nUt eleifend lectus sit amet tortor maximus, ut rutrum odio vestibulum. Aliquam eu mauris quis nisl pellentesque efficitur. Integer fringilla feugiat ligula. Suspendisse aliquam tortor vel tortor placerat tincidunt. Morbi lobortis feugiat nibh at bibendum. Nullam vel tortor feugiat, cursus orci vitae, condimentum urna.Sed ut nunc in erat auctor consequat. Pellentesque iaculis rutrum lectus, ut pharetra nibh venenatis nec. Morbi lacinia lectus ut urna tempor, ut malesuada lacus elementum. Curabitur vehicula diam nec neque facilisis, id dictum odio maximus. Aenean feugiat commodo enim, in feugiat diam varius quis.' },
    { id: '3', text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere volutpat elit, ut rutrum turpis feugiat a. Mauris sit amet iaculis ex. Nam eu risus euismod, suscipit urna id, convallis nunc. Proin consectetur odio eu gravida cursus. Aliquam ac varius justo. Suspendisse id ligula metus. Vestibulum dictum orci ut nibh dapibus, nec rhoncus elit commodo. Integer id ipsum quis mi tempus dapibus non a arcu. Quisque scelerisque, ex at rhoncus tincidunt, lorem eros viverra enim, et dignissim justo nulla sed leo. Vestibulum sit amet quam et nibh tincidunt suscipit vitae nec libero. Sed convallis, justo a semper bibendum, sem massa gravida neque, ac blandit neque justo eget metus.\n\nNunc malesuada elit ut lectus dignissim, sed rhoncus ipsum volutpat. Cras aliquam eros id libero cursus, nec facilisis orci malesuada. Mauris vitae malesuada turpis. Aliquam at lobortis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar faucibus magna, vel feugiat sapien ultricies ac.\n\nUt eleifend lectus sit amet tortor maximus, ut rutrum odio vestibulum. Aliquam eu mauris quis nisl pellentesque efficitur. Integer fringilla feugiat ligula. Suspendisse aliquam tortor vel tortor placerat tincidunt. Morbi lobortis feugiat nibh at bibendum. Nullam vel tortor feugiat, cursus orci vitae, condimentum urna.Sed ut nunc in erat auctor consequat. Pellentesque iaculis rutrum lectus, ut pharetra nibh venenatis nec. Morbi lacinia lectus ut urna tempor, ut malesuada lacus elementum. Curabitur vehicula diam nec neque facilisis, id dictum odio maximus. Aenean feugiat commodo enim, in feugiat diam varius quis.' },
    { id: '4', text: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere volutpat elit, ut rutrum turpis feugiat a. Mauris sit amet iaculis ex. Nam eu risus euismod, suscipit urna id, convallis nunc. Proin consectetur odio eu gravida cursus. Aliquam ac varius justo. Suspendisse id ligula metus. Vestibulum dictum orci ut nibh dapibus, nec rhoncus elit commodo. Integer id ipsum quis mi tempus dapibus non a arcu. Quisque scelerisque, ex at rhoncus tincidunt, lorem eros viverra enim, et dignissim justo nulla sed leo. Vestibulum sit amet quam et nibh tincidunt suscipit vitae nec libero. Sed convallis, justo a semper bibendum, sem massa gravida neque, ac blandit neque justo eget metus.\n\nNunc malesuada elit ut lectus dignissim, sed rhoncus ipsum volutpat. Cras aliquam eros id libero cursus, nec facilisis orci malesuada. Mauris vitae malesuada turpis. Aliquam at lobortis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar faucibus magna, vel feugiat sapien ultricies ac.\n\nUt eleifend lectus sit amet tortor maximus, ut rutrum odio vestibulum. Aliquam eu mauris quis nisl pellentesque efficitur. Integer fringilla feugiat ligula. Suspendisse aliquam tortor vel tortor placerat tincidunt. Morbi lobortis feugiat nibh at bibendum. Nullam vel tortor feugiat, cursus orci vitae, condimentum urna.Sed ut nunc in erat auctor consequat. Pellentesque iaculis rutrum lectus, ut pharetra nibh venenatis nec. Morbi lacinia lectus ut urna tempor, ut malesuada lacus elementum. Curabitur vehicula diam nec neque facilisis, id dictum odio maximus. Aenean feugiat commodo enim, in feugiat diam varius quis.' },
    { id: '5', text: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere volutpat elit, ut rutrum turpis feugiat a. Mauris sit amet iaculis ex. Nam eu risus euismod, suscipit urna id, convallis nunc. Proin consectetur odio eu gravida cursus. Aliquam ac varius justo. Suspendisse id ligula metus. Vestibulum dictum orci ut nibh dapibus, nec rhoncus elit commodo. Integer id ipsum quis mi tempus dapibus non a arcu. Quisque scelerisque, ex at rhoncus tincidunt, lorem eros viverra enim, et dignissim justo nulla sed leo. Vestibulum sit amet quam et nibh tincidunt suscipit vitae nec libero. Sed convallis, justo a semper bibendum, sem massa gravida neque, ac blandit neque justo eget metus.\n\nNunc malesuada elit ut lectus dignissim, sed rhoncus ipsum volutpat. Cras aliquam eros id libero cursus, nec facilisis orci malesuada. Mauris vitae malesuada turpis. Aliquam at lobortis ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar faucibus magna, vel feugiat sapien ultricies ac.\n\nUt eleifend lectus sit amet tortor maximus, ut rutrum odio vestibulum. Aliquam eu mauris quis nisl pellentesque efficitur. Integer fringilla feugiat ligula. Suspendisse aliquam tortor vel tortor placerat tincidunt. Morbi lobortis feugiat nibh at bibendum. Nullam vel tortor feugiat, cursus orci vitae, condimentum urna.Sed ut nunc in erat auctor consequat. Pellentesque iaculis rutrum lectus, ut pharetra nibh venenatis nec. Morbi lacinia lectus ut urna tempor, ut malesuada lacus elementum. Curabitur vehicula diam nec neque facilisis, id dictum odio maximus. Aenean feugiat commodo enim, in feugiat diam varius quis.' },
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
          {/* {showMenuButton
            && 
            <div className='menuButton'>
                <span className="material-icons" onClick={clicked}>menu</span>
            </div>
            } */}
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
