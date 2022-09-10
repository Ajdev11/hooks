import React, { useState, useEffect } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);
  const ticks = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const intervals = setInterval(ticks, 2000);
    return () => {
      clearInterval(intervals);
    };
  });
  return (
    <div>
      <button>IntervalCounter{count}</button>
    </div>
  );
}

export default IntervalCounter;
