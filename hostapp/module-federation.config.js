export const mfConfig = {
  name: "host",
  // filename: "host.remoteEntry.js",
  remotes: {
    remote: "remote@http://localhost:3000/remoteEntry.js",
  },
  // exposes: {
  //   "/Tab": "./src/Tab",
  // },
  shared: {
    react: { singleton: true, eager: true },
    'react-dom': { singleton: true, eager: true },
  },
};
