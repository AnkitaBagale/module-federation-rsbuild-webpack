export const mfConfig = {
  name: "app1",
  filename: "app1.remoteEntry.js",
  remotes: {
    app2: "app2@http://localhost:3000/app2.remoteEntry.js",
    // x: 'x@https://localhost:8080/dist/x.remoteEntry.js'
  },
  // exposes: {
  //   "./Tab": "./src/Tab",
  // },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
};
