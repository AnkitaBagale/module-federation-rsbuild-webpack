import React from "react";
import "./App.css";
//@ts-expect-error Import from remote which is a federated module
const RemoteButton = React.lazy(() => import('remote/Button').then(module => ({ default: module.Button || module.default })));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      {/* @ts-expect-error Import from remote which is a federated module */}
      <RemoteButton>Remote app ka button</RemoteButton>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
