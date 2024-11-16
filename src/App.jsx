import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { AppLayout } from './components/Layout/AppLayout.jsx';
import './App.css';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Country from './pages/Country.jsx';
import About from './pages/page/About.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Root path
        element: <Home />,
      },
      {
        path: "Contact", // No leading "./"
        element: <Contact />,
      },
      {
        path: "Country", // No leading "./"
        element: <Country />,
      },
      {
        path: "About", // No leading "./"
        element: <About />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
