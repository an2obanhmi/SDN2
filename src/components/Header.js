import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Button
                    component={Link}
                    to="/"
                    sx={{
                        color: 'inherit', 
                        textTransform: 'none', 
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 'auto', 
                    }}
                >
                    <Typography variant="h6" component="span">
                        Quiz Management App
                    </Typography>
                </Button>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/questions">
                        Questions
                    </Button>
                    <Button color="inherit" component={Link} to="/quizzes">
                        Quizzes
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
