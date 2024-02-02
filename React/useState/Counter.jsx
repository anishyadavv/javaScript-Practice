import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state: 0

  const handleClick = () => {
    setCount(count + 1); // Update state using setCount
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
