import React from "react";
const RemoteButton = React.lazy(() =>
  // @ts-expect-error Import from remote which is a federated module
  import("app2/Button").then((module) => ({
    default: module.Button || module.default,
  }))
);

function App() {
  return (
    <div className="App">
      <h1>App 3</h1>
      <React.Suspense fallback="loading button..">
        {/*  @ts-expect-error Import from remote which is a federated module */}
        <RemoteButton>Button: federated module from App2</RemoteButton>
      </React.Suspense>
    </div>
  );
}

export default App;
