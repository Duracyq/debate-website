import React, { useState } from 'react';
import './css/Postulaty.css';

const Postulaty = ({ lorem }) => {
  const [selectedID, setSelectedID] = useState(null);

  const setID = (id) => {
    setSelectedID(id);
  };

  return (
    <div className="App">
      <div className="holder-container">
        {/* nav-pannel */}
        <div className="nav">
          <ul>
            {lorem.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${selectedID === item.id ? 'active' : ''}`}
                onClick={() => setID(item.id)}
              >
                {item.title}
              </li>
            ))}
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
