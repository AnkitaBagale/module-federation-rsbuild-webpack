import React from "react";
//@ts-expect-error Import from remote which is a federated module
const RemoteButton = React.lazy(() => import('app2/Button').then(module => ({ default: module.Button || module.default })));

const App = () => {
  return (
    <div className="content">
      <h1>App1</h1>
      {/* @ts-expect-error Import from remote which is a federated module */}
      <RemoteButton>Button: federated module from App2</RemoteButton>
    </div>
  );
};

export default App;
