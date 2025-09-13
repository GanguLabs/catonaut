import { createSignal } from 'solid-js';

function MySolidComponent() {
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

export default MySolidComponent;
