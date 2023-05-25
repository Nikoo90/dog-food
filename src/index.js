import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,
          RouterProvider,
        } from 'react-router-dom';  
import { App } from './App';
import { PrivateRouter } from './components/PrivateRoute';
import { Cabinet } from './pages/Cabinet';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Products } from './pages/Products';
import { Registration } from './pages/Registration';
import { SignIn } from './pages/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index : true,
        element:<Home />
      },
      {
        path: "/products",
        element:<PrivateRouter><Products/></PrivateRouter>
                    
      },
      {
        path: "/products/:id",
        element:<PrivateRouter><Product/></PrivateRouter>
                    
      },
      {
        path:"/sign-in",
        element:<SignIn/>
      },
      {
        path:"/cabinet",
        element:<PrivateRouter><Cabinet/></PrivateRouter>
      },
      {
      path:"/registration",
      element:<Registration/>
      }
     
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

