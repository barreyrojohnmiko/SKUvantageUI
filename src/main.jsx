import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
    <ToastContainer hideProgressBar position="bottom-right" />
  </Provider>
);
