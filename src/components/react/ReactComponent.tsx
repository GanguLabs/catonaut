import React, { useState } from 'react';

export default function MyReactComponent({ message }: { message: string }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hello {message} from React!</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
