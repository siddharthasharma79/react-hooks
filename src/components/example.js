import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="border p-3 bg-light mb-2">
      <h4>Using Hooks</h4>
      <p>Counter: {count} </p>

      {/* INCREMENT */}
      <button
        className="btn btn-sm btn-success mr-3"
        onClick={() => setCount(count + 1)}
      >
        <span class="fas fa-plus-circle" />
      </button>

      {/* DECREMENT */}
      <button
        className="btn btn-sm btn-success"
        onClick={() => setCount(count - 1)}
      >
        <span class="fas fa-minus-circle" />
      </button>
    </div>
  );
}

export default Example;
