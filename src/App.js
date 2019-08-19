import React from "react";
import Navbar from "./components/navbar";
import Example from "./components/example";
import ExampleC from "./components/exampleC";

export default function App() {
  const title = "React Hooks Practice";
  return (
    <div class="container">
      <Navbar title={title} />
      <Example />
      <ExampleC />
    </div>
  );
}
