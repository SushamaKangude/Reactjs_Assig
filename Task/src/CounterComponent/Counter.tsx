import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Increase Value
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Decrease Value
        </button>

      </div>
    </div>
  );
};
export default Counter;
