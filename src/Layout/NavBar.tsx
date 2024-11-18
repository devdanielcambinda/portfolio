import * as React from "react";
import {AppBar, Box, Toolbar, Button} from "@mui/material";
import Typography from "@mui/material/Typography";

const NavBar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color={"default"} elevation={0}>
                <Toolbar>
                    <Typography href="/" variant="h6" component="a"
                                sx={{flexGrow: 1, textDecoration: "none", color: "inherit"}}>
                        Daniel Cambinda
                    </Typography>
                    <Button href={"/technologies"} sx={{color: 'text.secondary'}}>Technologies</Button>
                    <Button href={"/education"} sx={{color: 'text.secondary'}}>Education</Button>
                    <Button href={"/experience"} sx={{color: 'text.secondary'}}>Experience</Button>
                    <Button href={"/certificates"} sx={{color: 'text.secondary'}}>Certificates</Button>
                    <Button href={"/projects"} sx={{color: 'text.secondary'}}>Projects</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;