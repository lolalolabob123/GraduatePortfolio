import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button 
      onClick={() => setCount(count + 1)}
      className="px-6 py-3 bg-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-500 transition-colors cursor-pointer"
    >
      Clicked {count} times
    </button>
  );
}