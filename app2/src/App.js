import React from "react";
// const RemoteTab = React.lazy(() => import('app1/Tab').then(module => ({ default: module.Tab || module.default })));
// const RemotePill = React.lazy(() => import('x/ui/Pill').then(module => ({ default: module.Pill || module.default })).catch(console.error));

function App() {
  return (
    <div className="App">
      <h1>App2</h1>
      {/* <React.Suspense fallback="Loading Tab"> */}
       {/* <RemoteTab tabContent={"Tab: federated module from App 1"} /> */}
      {/* <RemotePill type="success">Pill: federated module from x</RemotePill> */}

      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
