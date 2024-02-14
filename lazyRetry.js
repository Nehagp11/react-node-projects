import React from 'react'

const lazyRetry = function(componentImport) {
    return new Promise((resolve, reject) => {
        // check if the window has already been refreshed
        const hasRefreshed = JSON.parse(
            typeof window.sessionStorage == 'object' && window.sessionStorage.getItem('retry-lazy-refreshed') || 'false'
        );
        // try to import the component
        componentImport().then((component) => {
            typeof window.sessionStorage == 'object' && window.sessionStorage.setItem('retry-lazy-refreshed', 'false'); // success so reset the refresh
            resolve(component);
        }).catch((error) => {
            if (!hasRefreshed) { // not been refreshed yet
                typeof window.sessionStorage == 'object' && window.sessionStorage.setItem('retry-lazy-refreshed', 'true'); // we are now going to refresh
                return window.location.reload(); // refresh the page
            }
            reject(error); // Default error behaviour as already tried refresh
        });
    });

};

export default lazyRetry;

const lazyReactNaiveRetry = (importer) => {
    const retryImport = async () => {
      try {
        return await importer();
      } catch (error) {
        // retry 5 times with 1 second delay
        for (let i = 0; i < 5; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          try {
            return await importer();
          } catch (e) {
            console.log("retrying import");
          }
        }
        throw error;
      }
    };
    return React.lazy(retryImport);
  };