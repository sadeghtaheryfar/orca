import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomeLeyout from './leyouts/HomeLeyout';
import PostLeyout from './leyouts/PostLeyout';
import Home from './pages/home/Home';
import Announcements from './pages/announcements/Announcements';
import GreenBusinesses from './pages/GreenBusinesses/GreenBusinesses';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import SignUp from './pages/SignUp/SignUp';
import GreenBusinessessShow from './pages/GreenBusinesses/GreenBusinessessShow';
import Awareness from './pages/awareness/Awareness';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import NotFoundPage from './components/NotFoundPage';

const queryClient = new QueryClient();
const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<HomeLeyout />}>
          <Route index={true} element={<Home />} />
          <Route path={'/greenBusinesses/:postid'} element={<GreenBusinessessShow />} />
          <Route path={'/AboutUs'} element={<AboutUs />} />
          <Route path={'/ContactUs'} element={<ContactUs />} />
          <Route path={'/SignUp'} element={<SignUp />} />
      </Route>

      <Route path="" element={<PostLeyout />}>
          <Route path={'/announcements'} element={<Announcements />} />
          <Route path={'/greenBusinesses'} element={<GreenBusinesses />} />
          <Route path={'/awareness'} element={<Awareness />} />
      </Route>
        <Route path="*"  element={<NotFoundPage/>}/>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </React.StrictMode>
);