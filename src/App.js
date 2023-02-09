// import React, { useState, useRef, useMemo, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/Layout/HomePage";
import Aboutus from "./components/pages/Aboutus";
import Project from "./components/pages/Project";
import Media from "./components/pages/Media";
import Mortgage from "./components/pages/Mortgage";
import Layout from "./components/pages/Layout";
import Contact from './components/pages/Contact/Contact';



function App() {

const router = createBrowserRouter([
  {path: '/', element: <Layout  />, children: [
    {index: true, element: <HomePage />},
    {path: '/contact', element: <Contact  />},
    {path: '/mortgage', element: <Mortgage />},
    {path: '/aboutus', element: <Aboutus  />},
    {path: '/project', element: <Project />},
    {path: '/media', element: <Media />},

  ]}
])

  return (
    <RouterProvider router={router}  />
  );
}


export default App;
