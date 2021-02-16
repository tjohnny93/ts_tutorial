import React from "react";

function App() {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return <div>Hello World {sum(10, 16)}</div>;
}

export default App;
