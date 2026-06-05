import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += Math.floor(Math.random() * 8) + 2;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(interval);
        setCount(100);
        setTimeout(() => {
          setIsHidden(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 500);
      } else {
        setCount(currentCount);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div className={`loader ${isHidden ? 'hidden' : ''}`}>
      <div className="loader-inner">
        <div className="loader-line"></div>
        <span className="loader-text">MEET CHITRODA</span>
        <div className="loader-counter">{count}</div>
      </div>
    </div>
  );
};

export default Loader;
