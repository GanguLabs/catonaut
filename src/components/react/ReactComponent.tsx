import React, { useState } from 'react';

export default function MyReactComponent() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <h2>Hello from React!</h2>
      <button onClick={() => setCount(count + 1)}>React Count {count}</button>
    </div>
  );
}
