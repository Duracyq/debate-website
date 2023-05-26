import React from 'react';
import './App.css';


const Postulaty = ({ showMenuButton, clicked, lorem, showScrollButton, scrollToTop }) => {
  return (
    <div className="App">
        <div className="holder-container">            
            {/* nav-pannel */}
            {showMenuButton
            && 
            <div className='menuButton'>
                <span className="material-icons" onClick={clicked}>menu</span>
            </div>
            }
            {/* about me */}

            {/* about me */}
            <div className="nav">
            <ul>
                <li>
                <span>Lorem</span>
                </li>
                <li>
                <span>ipsum</span>
                </li>
                <li>
                <span>dolor</span>
                </li>
                <li>
                <span>sit</span>
                </li>
                <li>
                <span>amed</span>
                </li>
            </ul>
            </div>
            {/* nav-pannel */}


            <div className="container">
            {/* placeholder */}
                <div className='statement'> {lorem} <br /> </div>
                <div className='statement'> {lorem} <br /> </div>
                <div className='statement'> {lorem} <br /> </div>
                <div className='statement'> {lorem} <br /> </div>
                <div className='statement'> {lorem} <br /> </div>
            {/* placeholder */}
            </div>
        </div>
    </div>
  );
};

export default Postulaty