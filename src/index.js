import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomeLeyout from './leyouts/HomeLeyout';
import Home from './pages/home/Home';
import News from './pages/news/News';
import './index.css';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<HomeLeyout />}>
          <Route index={true} element={<Home />} />
          <Route path={'/news'} element={<News />} />
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);