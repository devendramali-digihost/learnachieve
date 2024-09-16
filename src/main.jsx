import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Error from './Component/Error/Error.jsx'
import Service from './Component/Service/Service.jsx'
import Bharatsat from './Component/Bharatsat/Bharatsat.jsx'
import Joinus from './Component/Joinus/Joinus.jsx'
import Faq from './Component/Faq/Faq.jsx'
import Privacypolicy from './Component/Privacy-policy/Privacypolicy.jsx'
import Termsandcondition from './Component/Termsandcondition/Termsandcondition.jsx'
import Cancellationpolicy from './Component/Cancellation-policy/Cancellationpolicy.jsx'
import Studentregistration from './Component/Student-registration/Studentregistration.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
      ,
      {
        path:"*",
        element:<Error/>
      },
      {
        path:"services",
        element:<Service/>
      },
      {
        path:"bharat-sat",
        element:<Bharatsat/>
      },
      {
        path:"Join-us",
        element:<Joinus/>
      },
      {
        path:"faq",
        element:<Faq/>
      },
      {
        path:"privacy-policy",
        element:<Privacypolicy/>
      },
      {
        path:"terms-and-condition",
        element:<Termsandcondition/>
      },
      {
        path:"cancellation-policy",
        element:<Cancellationpolicy/>
      },
      {
        path:"student-registration",
        element:<Studentregistration/>
      }
    ]  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename='/'>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
