import React from "react";
import "./App.css";
import { RemoteButton } from "./imports";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <RemoteButton>Remote app ka button</RemoteButton>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
