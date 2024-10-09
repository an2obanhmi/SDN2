import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                bgcolor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                py: 2,
            }}
        >
            <Typography variant="body1">
                &copy; 2024 Quiz Management App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
