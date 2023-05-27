import React, { useState, useEffect, useRef } from 'react';
import './css/Postulaty.css';

const Postulaty = ({ lorem }) => {
  const [selectedID, setSelectedID] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const setID = (id) => {
    setSelectedID(id);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === lorem.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => {
      clearInterval(timer);
    };
  }, [lorem.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lorem.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lorem.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setSelectedID(lorem[activeIndex].id);
  }, [activeIndex, lorem]);

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
          <div className="background-container" ref={containerRef}>
            {lorem.map((item, index) => (
              <div
                className={`statement ${
                  selectedID === item.id ? '' : 'hidden'
                }`}
                key={item.id}
              >
                {item.text}
              </div>
            ))}
            <div className="button-container">
              <button className="prev-btn" onClick={handlePrev}>
                <span class="material-symbols-outlined">arrow_back_ios_new</span>
              </button>
              <button className="next-btn" onClick={handleNext}>
                <span class="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
          {/* placeholder */}
        </div>
      </div>
    </div>
  );
};

export default Postulaty;
