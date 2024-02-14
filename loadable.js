import React, { lazy, Suspense } from 'react';
import lazyRetry from './lazyRetry';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(() => lazyRetry(importFunc));

  return props => (
    <Suspense fallback={(fallback !== null)?fallback:null}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;

// import loadable from 'utils/loadable';
// export default loadable(() => import('./index'));

// The React.lazy function lets you render a dynamic import as a regular component.

const OtherComponent = React.lazy(() => import('./OtherComponent'));

// React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

<Suspense fallback={<div>Loading...</div>}>
<OtherComponent />
</Suspense>

// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

// useTransition allows to update states smoothly so that user can see updates on UI in a non-blocking way, it skips suspense fallback re-rendering, useTransition takes no argument and returns array of [isPending, startTransition]
// startTransition function should be synchronous  

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}

// <Profiler id="test-2" onRender={onRender} /> Component measure the dom Tree performance via its rendering time, and updated nodes information

// id: A string identifying the part of the UI you are measuring.
// onRender: An onRender callback that React calls every time components within the profiled tree update. It receives information about what was rendered and how much time it took.

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {}

// Profiling adds some additional overhead, so it is disabled in the production build by default. To opt into production profiling, you need to enable a special production build with profiling enabled.

// adding function in a state variable 

const [fn, setFn] = useState(() => someFunction);

function handleClick() {
  setFn(() => someOtherFunction);
}


import {cache} from 'react';
import calculateMetrics from 'lib/metrics';

const getMetrics = cache(calculateMetrics);

function Chart({data}) {
  const report = getMetrics(data);
  // ...
}

// cache is for use in Server Components only and saves the results in memory as per arguments passed to the function 

// Note : Calling `cache` in component creates new `getWeekReport` for each render

lazy(load) 

//  here load is A function that returns a Promise or another thenable (a Promise-like object with a then method). React will not call load until the first time you attempt to render the returned component. After React first calls load, it will wait for it to resolve, and then render the resolved value’s .default as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call load more than once. If the Promise rejects, React will throw the rejection reason for the nearest Error Boundary to handle.

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

// its calling with lazy like this and then we can wrap it with Suspense Component 

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));
