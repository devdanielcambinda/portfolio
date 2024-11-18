import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Education from "../Pages/Education";
import Certificates from "../Pages/Certificates";
import Experience from "../Pages/Experience";
import Technologies from "../Pages/Technologies";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/education",
        element: <Education/>
    },
    {
        path: "/certificates",
        element: <Certificates/>
    },
    {
        path: "/experience",
        element: <Experience/>
    },
    {
        path: "/technologies",
        element: <Technologies/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "*",
        element: <p> 404 not found</p>
    }
]);