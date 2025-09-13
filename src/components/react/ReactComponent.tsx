import React from 'react';

export default function MyReactComponent({ message }: { message: string }) {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>{message}</p>
    </div>
  );
}
