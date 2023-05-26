import React, { useState, useEffect } from 'react';
import './css/Postulaty.css';


const Postulaty = ({ lorem }) => {
    const [showLoremID, setShowLoremID] = useState([])

    const setID = (id) => {
        setShowLoremID(id)
    }
    


  return (
    <div className="App">
        <div className="holder-container">            
            {/* nav-pannel */}
            <div className="nav">
            <ul>
                <li>
                    <span onClick={() => setID('1')}>Lorem</span>
                </li>
                <li>
                    <span onClick={() => setID('2')}>ipsum</span>
                </li>
                <li>
                    <span onClick={() => setID('3')}>dolor</span>
                </li>
                <li>
                    <span onClick={() => setID('4')}>sit</span>
                </li>
                <li>
                    <span onClick={() => setID('5')}>amed</span>
                </li>
            </ul>
            </div>
            {/* nav-pannel */}


            <div className="container">
            {/* placeholder */}
                {lorem.map((item) => (
                    <div className="statement" key={item.id}>
                    {item.text}
                    </div>
                ))}
            {/* placeholder */}
            </div>
        </div>
    </div>
  );
};

export default Postulaty