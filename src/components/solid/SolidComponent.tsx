/** @jsxImportSource solid-js */
// /** @jsxImportSource solid-js */ is called JSX pragma
import { createSignal } from 'solid-js';

export default function MySolidComponent() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h2>Hello from Solid</h2>
      <button onClick={() => setCount(count() + 1)}>
        Solid Button: {count()}
      </button>
    </>
  );
}
