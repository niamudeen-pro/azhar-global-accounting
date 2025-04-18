import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';


export const _router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
]);
