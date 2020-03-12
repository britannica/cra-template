import React, { Fragment, lazy, Suspense } from 'react';

const LazySignUpPage = lazy(() => import('./TestPage'));

const TestPage = props => (
  <Suspense fallback={<Fragment />}>
    <LazySignUpPage {...props} />
  </Suspense>
);

export default TestPage;
