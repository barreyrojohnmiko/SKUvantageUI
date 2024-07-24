import { createBrowserRouter } from 'react-router-dom';

import NotFound from './errors/NotFound';

import LandingPageComponent from './components/LandingPage/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageComponent />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
