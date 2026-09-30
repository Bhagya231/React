import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './util/http.js';

import Events from './components/Events/Events.jsx';
import EventDetails from './components/Events/EventDetails.jsx';
import NewEvent from './components/Events/NewEvent.jsx';
import EditEvent, {loader as editLoader, action as editEventAction} from './components/Events/EditEvent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events" />,
  },
  {
    path: '/events',
    element: <Events />,

    children: [
      {
        path: 'new',
        element: <NewEvent />,
      },
    ],
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: 'edit',
        element: <EditEvent />,
        loader: editLoader,
        action: editEventAction,
      },
    ],
  },
]);



function App() {
  return (
    <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />
    </QueryClientProvider>
  )
  
}

export default App;
