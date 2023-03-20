import {createBrowserRouter} from 'react-router-dom'
import Login from '../components/LogIn';
import Register from '../components/Register';
import Notfound from '../components/NotFound';
import App from '../App';
import Reset from '../components/Reset';
import Profile from '../components/Profile';

const router = createBrowserRouter([
    {
        path:'/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/user',
        element: <Profile />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '*',
        element: <Notfound />
    }
])

export default router;
