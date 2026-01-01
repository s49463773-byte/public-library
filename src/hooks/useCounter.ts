import { useState, useEffect } from 'react';

export const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};
