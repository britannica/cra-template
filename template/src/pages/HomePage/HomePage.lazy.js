import React, { Fragment, lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('./HomePage'));

const HomePage = props => (
  <Suspense fallback={<Fragment />}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
