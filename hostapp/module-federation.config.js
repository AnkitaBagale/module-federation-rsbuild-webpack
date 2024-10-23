import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  filename: "host.remoteEntry.js",
  remotes: {
    remote: "remote@https://r47wsx-3000.csb.app/remoteEntry.js",
  },
  exposes: {
    "/Tab": "./src/Tab",
  },
};
