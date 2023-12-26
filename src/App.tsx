import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./Component/Home Page'));
export const App = () => {
  const data = 'data is data';
  console.log(data);
  return (
    <Suspense fallback="loading">
      <HomePage />
    </Suspense>
  );
};
