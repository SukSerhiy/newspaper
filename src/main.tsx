import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ERoutes from 'enums/routes';
import TopHeadlines from 'pages/TopHeadlines';
import Everything from 'pages/Everything';
import Notification from 'components/Notification';
import 'assets/styles/styles.scss';

const router = createBrowserRouter([
  {
    path: ERoutes.home,
    element: <TopHeadlines />,
  },
  {
    path: ERoutes.everything,
    element: <Everything />,
  },
  {
    path: ERoutes.sources,
    element: <Everything />,
  },
]);

render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Notification />
  </Provider>,
  document.getElementById('root')
);
