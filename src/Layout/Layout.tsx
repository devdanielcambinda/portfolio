import * as React from "react";
import {Container} from "@mui/material";
import {router} from "./Routers";
import {RouterProvider} from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
    return <Container maxWidth={false} disableGutters>
        <NavBar/>
        <RouterProvider router={router}/>
        <Footer/>
    </Container>

}

export default Layout;