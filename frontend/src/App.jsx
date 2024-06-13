import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage";
import ListPage from "./components/ListPage/ListPage";
import GroupDetailsPage from "./components/GroupDetailsPage/";
import EventDetailsPage from "./components/EventDetailsPage/EventDetailsPage";
import * as sessionActions from './store/session';

function Layout() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    })
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/groups',
        element: <ListPage toggle={'Groups'}/>
      },
      {
        path: '/events',
        element: <ListPage toggle={'Events'} />
      },
      {
        path:'/groups/:groupId',
        element: <GroupDetailsPage />
      },
      {
        path: '/events/:eventId',
        element: <EventDetailsPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
