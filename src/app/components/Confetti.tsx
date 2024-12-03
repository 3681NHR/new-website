'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function ConfettiSource() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [recycle, setRecycle] = useState(false);

  useEffect(() => {
    setRecycle(Math.random() < 0.5);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 pointer-events-none">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={50000}
        recycle={recycle}
      />
    </div>
  );
}
