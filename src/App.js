import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import ThemeProvider from '@mui/material/styles';
import theme from './components/Theme';


const App = () => {
    return (
        <>
            
            <Container 
                sx={{
                    backgroundColor: 'rgb(10,9,45)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    pt: 10, 
                    pb: 8,  
                }}
            >
                <Box sx={{ textAlign: 'center',color :'white' }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Quiz and Question Management
                    </Typography>
                    <Button variant="contained" color="primary" component={Link} to="/questions">
                        Manage Questions
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/quizzes"
                        sx={{ ml: 2 }}
                    >
                        Manage Quizzes
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default App;
