import React from "react";

const componentLoader = (
  loadComponent: any,
  retryCount = 3,
  interval = 1000
) => {
  return new Promise((resolve, reject) => {
    loadComponent()
      .then(resolve)
      .catch((error: any) => {
        setTimeout(() => {
          if (retryCount === 0) {
            reject(error);
            return;
          }
          componentLoader(loadComponent, retryCount - 1, interval * 1.25).then(
            resolve,
            reject
          );
        }, interval);
      });
  });
};

const lazyLoadWithRetry = (importStatement: any) => {
  // @ts-expect-error Import from vendor portal which is a federated module
  const Component = React.lazy(() => componentLoader(importStatement));
  // @ts-expect-error Import from vendor portal which is a federated module
  Component.preload = importStatement;
  return Component;
};

export const RemoteButton = lazyLoadWithRetry(
  // @ts-expect-error Import from vendor portal which is a federated module
  // eslint-disable-next-line import/no-unresolved
  () => import("remote/Button")
);
