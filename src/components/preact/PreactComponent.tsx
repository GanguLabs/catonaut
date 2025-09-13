/** @jsxImportSource preact */
// /** @jsxImportSource preact */ is called JSX pragma
import { useState } from 'preact/hooks';
import { h } from 'preact';

export default function MyPreactComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello from Preact!</h2>
      <button onClick={() => setCount(count + 1)}>Preact Count: {count}</button>
    </div>
  );
}
