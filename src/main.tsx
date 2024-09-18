import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "/products",
    element: <div>Products</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
