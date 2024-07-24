import { createBrowserRouter } from 'react-router-dom';

import LandingPageComponent from './components/LandingPage/page';
import NotFound from './errors/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPageComponent />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: '/SKUvantageUI/',
  }
);

export default router;
