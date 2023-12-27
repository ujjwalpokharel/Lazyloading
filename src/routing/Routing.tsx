import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Loader } from '../Component/Loader';
export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      async lazy() {
        const { HomePage } = await import('../Component/Home Page');
        return { Component: HomePage, loader: Loader };
      },
    },
    {},
  ]);
  return <RouterProvider router={router} />;
};
