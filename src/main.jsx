import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Errorpage/Errorpage.jsx';
import Mainoutlet from './Componants/Mainoutlet/Mainoutlet.jsx';
import Availablefoods from './Componants/Pages/availablefoods/Availablefoods.jsx';
import Addfood from './Componants/Pages/addfood/Addfood.jsx';
import Foodsrequest from './Componants/Pages/foodsrequest/Foodsrequest.jsx';
import Login from './Componants/login&ragistration/Login.jsx';
import Register from './Componants/login&ragistration/Register.jsx';
import Home from './Componants/Pages/Home/Home.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';
import Singlefoods from './Componants/Pages/Singlefoods/Singlefoods.jsx';
import MyPage from './Componants/Pages/managefoods/MyPage.jsx';
import Updatefoods from './Componants/Pages/managefoods/Updatefoods.jsx';
import Privet from './Componants/Privetrout/Privet.jsx';
import Managesingle from './Componants/Pages/managefoods/Managesingle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    element: <Mainoutlet></Mainoutlet>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/availablefoods',
        element: <Availablefoods></Availablefoods>
      },
      {
        path: '/addfood',
        element: <Privet><Addfood></Addfood></Privet>
      },
      {
        path: '/managefoods',
        element: <Privet><MyPage></MyPage></Privet>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: '/foodsrequest',
        element: <Privet><Foodsrequest></Foodsrequest></Privet>,
        loader: () => fetch('http://localhost:5000/requestfoods')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/availablefoods/foods/:id',
        element: <Privet><Singlefoods></Singlefoods></Privet>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/foods/:id',
        element: <Privet><Updatefoods></Updatefoods></Privet>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/manage/:id',
        element: <Managesingle></Managesingle>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
