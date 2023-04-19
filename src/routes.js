import {
    createBrowserRouter
} from "react-router-dom";
  
import Page from './pages/Page';
import Testing from './pages/Testing';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
    },
    {
      path: "/page",
      element: <Page />,
    },
    {
      path: "/testing",
      element: <Testing />,
    },
]);

export default router;