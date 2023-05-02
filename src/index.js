import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hostel from './Components/Hostel';
import AddBed from './Components/AddBed';
import AddTenant from './Components/AddTenant';
import Login from './Components/Login';
import AddRoom from './Components/AddRoom.jsx';
import Helpline from './Components/Helpline.jsx';
import Booking from './Components/Booking.jsx';
import Signup from './Components/Signup.jsx';
import Mail from './Components/Mail.jsx';
import Verify from './Components/Verify.jsx';
import Overview from './Components/Overview.jsx';
import Payment from './Components/Payment.jsx';
import Endpage from './Components/Endpage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/mail',
        element:<Mail></Mail>
      },
      {
        path:'/verify',
        element:<Verify></Verify>
      },
      {
        path:'/dashboard',
        element:<Hostel></Hostel>
      },
      {
        path:'/AddBed',
        element:<AddBed></AddBed>
      },
      {
        path:'/AddTenant',
        element:<AddTenant></AddTenant>
      },
      {
        path:'/AddRoom',
        element:<AddRoom></AddRoom>
      },
      {
        path:'/Helpline',
        element:<Helpline></Helpline>
      }
    ]
  },
      {
        path:'/Booking',
        element:<Booking></Booking>
      },
      {
        path:'/Overview/:id',
        element:<Overview></Overview>
      },
      {
        path:'/Payment/:radio/:id/:ab',
        element:<Payment></Payment>
      },
      {
        path:'/Endpage/:id/:ab',
        element:<Endpage></Endpage>
      }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
