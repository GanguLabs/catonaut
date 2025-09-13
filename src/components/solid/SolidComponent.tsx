/** @jsxImportSource solid-js */
// /** @jsxImportSource solid-js */ is called JSX pragma
import { createSignal } from 'solid-js';

export default function MySolidComponent() {
  const [count, setCount] = createSignal(0);

  return (
    <div style={{ display: 'flex', 'align-items': 'center', gap: '10px' }}>
      <h2>Hello from Solid</h2>
      <button onClick={() => setCount(count() + 1)}>
        Solid Button: {count()}
      </button>
    </div>
  );
}
