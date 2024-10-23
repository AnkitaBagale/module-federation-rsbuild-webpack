import React from "react";
const RemoteTab = React.lazy(() => import('app1/Tab').then(module => ({ default: module.Tab || module.default })));

function App() {
  return (
    <div className="App">
      <h1>App2</h1>
      <React.Suspense fallback="Loading Tab">
       <RemoteTab tabContent={"Tab: federated module from App 1"} />
      </React.Suspense>
    </div>
  );
}

export default App;
