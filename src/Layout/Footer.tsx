import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Copyright = () => {
    return (
        <Typography variant="body2" sx={{color: 'text.secondary', mt: 1}}>
            {'Copyright © Daniel Cambinda'}
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

const Footer = () =>  {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: {sm: 10},
                textAlign: {sm: 'center', md: 'left'},
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Copyright/>
                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{justifyContent: 'left', color: 'text.secondary'}}
                >
                    <IconButton
                        color="inherit"
                        size="small"
                        href="mailto:danielcambinda@gmail.com"
                        target="_blank"
                        aria-label="Email"
                        sx={{alignSelf: 'center'}}
                    >
                        <AlternateEmailIcon/>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://github.com/devdanielcambinda"
                        target="_blank"
                        aria-label="GitHub"
                        sx={{alignSelf: 'center'}}
                    >
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        href="https://www.linkedin.com/in/daniel-cambinda/"
                        target="_blank"
                        aria-label="LinkedIn"
                        sx={{alignSelf: 'center'}}
                    >
                        <LinkedInIcon/>
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}

export default Footer;