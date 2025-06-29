/** @jsxImportSource solid-js */
import { createSignal } from 'solid-js';

export default function MySolidComponent() {
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count()} times (Solid)
    </button>
  );
}