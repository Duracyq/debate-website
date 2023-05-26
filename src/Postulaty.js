import React, { useState } from 'react';
import './css/Postulaty.css';

const Postulaty = ({ lorem }) => {
  const [selectedID, setSelectedID] = useState(lorem[0].id);

  const setID = (id) => {
    setSelectedID(id);
  };

  return (
    <div className="App">
      <div className="holder-container">
        {/* nav-pannel */}
        <div className="nav">
          <ul>
            <li
              className={`nav-item ${selectedID === '1' ? 'active' : ''}`}
              onClick={() => setID('1')}
            >
              Lorem
            </li>
            <li
              className={`nav-item ${selectedID === '2' ? 'active' : ''}`}
              onClick={() => setID('2')}
            >
              ipsum
            </li>
            <li
              className={`nav-item ${selectedID === '3' ? 'active' : ''}`}
              onClick={() => setID('3')}
            >
              dolor
            </li>
            <li
              className={`nav-item ${selectedID === '4' ? 'active' : ''}`}
              onClick={() => setID('4')}
            >
              sit
            </li>
            <li
              className={`nav-item ${selectedID === '5' ? 'active' : ''}`}
              onClick={() => setID('5')}
            >
              amed
            </li>
          </ul>
        </div>
        {/* nav-pannel */}

        <div className="container">
          {/* placeholder */}
          <div className="background-container">
            {lorem.map((item) => (
              <div
                className={`statement ${
                  selectedID === item.id ? '' : 'hidden'
                }`}
                key={item.id}
              >
                {item.text}
              </div>
            ))}
          </div>
          {/* placeholder */}
        </div>
      </div>
    </div>
  );
};

export default Postulaty;
