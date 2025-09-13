/** @jsxImportSource preact */
// /** @jsxImportSource preact */ is called JSX pragma

function MyPreactComponent({ name }: { name: string }) {
  return (
    <div>
      <h2>Hello, {name} from Preact!</h2>
    </div>
  );
}

export default MyPreactComponent;
