import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Statistic from './Components/Statistic/Statistic.jsx';
import Cards from './Components/Cards/Cards.jsx';
import CardDetails from './Components/CardDetails/CardDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/donations.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>
      },
      {
        path: '/cards',
        element: <Cards></Cards>
       
      },
      {
        path:'/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: ()=> fetch('/donations.json')

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
