import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/home/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <div>Products</div>,
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
