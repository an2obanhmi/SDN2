// QuestionList.js
import React from 'react';
import { List, ListItem, ListItemText, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import '../css/QuestionList.css';

const QuestionList = ({ questions, fetchQuestions, onQuestionSelect }) => {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleDelete = async (questionId) => {
        try {
            await axios.delete(`http://localhost:5000/questions/${questionId}`);
            setSnackbarMessage('Question deleted successfully!');
            setOpenSnackbar(true);
            fetchQuestions();
        } catch (error) {
            console.error('Error deleting question:', error);
            setSnackbarMessage('Failed to delete question.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <h2>Question List</h2>
            <List>
                {questions.map((question) => (
                    <ListItem key={question._id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        margin: '10px 0',
                        border: '5px solid #ccc',
                        borderRadius: '5px',
                        backgroundColor: '#rgb(10,9,45)',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <ListItemText
                            primary={question.text}
                            onClick={() => onQuestionSelect(question)}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        />
                        <Button onClick={() => handleDelete(question._id)} color="warning">
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

export default QuestionList;
