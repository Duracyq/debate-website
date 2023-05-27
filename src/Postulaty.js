import React, { useState, useEffect, useRef } from 'react';
import './css/Postulaty.css';

const Postulaty = ({ lorem }) => {
  const [selectedID, setSelectedID] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const setID = (id) => {
    setSelectedID(id);
  };

  const handleSwipe = (deltaX) => {
    if (deltaX > 0) {
      // Swipe right, show previous item
      const prevItem = containerRef.current.previousElementSibling;
      if (prevItem) {
        setSelectedID(prevItem.dataset.id);
      }
    } else if (deltaX < 0) {
      // Swipe left, show next item
      const nextItem = containerRef.current.nextElementSibling;
      if (nextItem) {
        setSelectedID(nextItem.dataset.id);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === lorem.length - 1 ? 0 : prevIndex + 1
      );
    }, 25000);

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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    containerRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - containerRef.current.startX;
    containerRef.current.deltaX = deltaX;
  };

  const handleTouchEnd = () => {
    handleSwipe(containerRef.current.deltaX);
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
          <div
            className="background-container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="prev-btn" onClick={handlePrev}>
              <span class="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
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
            <button className="next-btn" onClick={handleNext}>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </div>
          {/* placeholder */}
        </div>
      </div>
    </div>
  );
};

export default Postulaty;
