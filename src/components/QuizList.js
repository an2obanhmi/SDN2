import React from 'react';
import { List, ListItem, ListItemText, Button, Snackbar, Alert  } from '@mui/material';
import ThemeProvider from '@mui/material/styles';
import axios from 'axios';

const QuizList = ({ quizzes, fetchQuizzes, onQuizSelect }) => {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleDelete = async (event, quizId) => {
        event.stopPropagation();
        try {
            await axios.delete(`http://localhost:5000/quizzes/${quizId}`);
            setSnackbarMessage('Quiz deleted successfully!');
            setOpenSnackbar(true);
            fetchQuizzes();
        } catch (error) {
            console.error('Error deleting quiz:', error);
            setSnackbarMessage('Quiz to delete question.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <h2>Quiz List</h2>
            <List>
                {quizzes.map((quiz) => (
                    <ListItem key={quiz._id} onClick={() => onQuizSelect(quiz)} style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '10px', 
                        margin: '10px 0', 
                        border: '1px solid #ccc', 
                        borderRadius: '5px', 
                        backgroundColor: '#0A092D', 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 

                       
                    }}>
                        <ListItemText primary={quiz.title}  />
                        <Button onClick={(event) => handleDelete(event, quiz._id)} color="secondary">
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default QuizList;
