import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomeLeyout from './leyouts/HomeLeyout';
import PostLeyout from './leyouts/PostLeyout';
import Home from './pages/home/Home';
import News from './pages/news/News';
import GreenBusinesses from './pages/GreenBusinesses/GreenBusinesses';
import GreenBusinessessShow from './pages/GreenBusinesses/GreenBusinessessShow';
import Awareness from './pages/awareness/Awareness';
import './index.css';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<HomeLeyout />}>
          <Route index={true} element={<Home />} />
          <Route path={'/greenBusinesses/:postid'} element={<GreenBusinessessShow />} />
      </Route>

      <Route path="" element={<PostLeyout />}>
          <Route path={'/news'} element={<News />} />
          <Route path={'/greenBusinesses'} element={<GreenBusinesses />} />
          <Route path={'/awareness'} element={<Awareness />} />
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);