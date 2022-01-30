import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import App from './App.tsx'
import './index.css'
import ErrorPage from './routes/ErrorPage.tsx'
import ProductsPage from './routes/ProductsPage.tsx'
import HomePage from './routes/HomePage.tsx'
import SignUpPage from './routes/SignUpPage.tsx'
import SignInPage from './routes/SignInPage.tsx'
import WishListPage from './routes/WishListPage.tsx'
import ProductDetailPage from './routes/ProductDetailPage.tsx'
import ContactUsPage from './routes/ContactUsPage.tsx'
import AboutPage from './routes/AboutPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "signup",
        element: <SignUpPage />
      },
      {
        path: "signin",
        element: <SignInPage />
      },
      {
        path: "wishlist",
        element: <WishListPage />
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "contactus",
        element: <ContactUsPage />
      },
      {
        path: "about",
        element: <AboutPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
