import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Snackbar, Alert, Card, CardContent, Typography  } from '@mui/material';
import '../css/QuestionForm.css'; // Import file CSS

const QuestionForm = ( { fetchQuestions }) => {
    const [text, setText] = useState('');
    const [optionsString, setOptionsString] = useState(''); // Chuỗi để nhập tùy chọn
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = optionsString.split(',').map(option => option.trim()); // Tách chuỗi thành mảng

        try {
            await axios.post('http://localhost:5000/questions', {
                text,
                options,
                correctAnswerIndex,
            });
            setSnackbarMessage('Question added successfully!');
            setOpenSnackbar(true);
            fetchQuestions();
            // Reset form
            setText('');
            setOptionsString(''); // Đặt lại chuỗi tùy chọn
            setCorrectAnswerIndex(0);
        } catch (error) {
            console.error('Error adding question:', error);
            setSnackbarMessage('Failed to add question.');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Card variant="outlined" style={{ marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Create Question
                </Typography>
        
        <form onSubmit={handleSubmit} className="question-form">
            <div className="form-field">
                <TextField
                    label="Question Text"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    fullWidth
                />
            </div>
            <div className="form-field">
                <TextField
                    label="Options (separated by commas)"
                    variant="outlined"
                    value={optionsString}
                    onChange={(e) => setOptionsString(e.target.value)}
                    required
                    fullWidth
                />
            </div>
            <div className="form-field">
                <TextField
                    type="number"
                    label="Correct Answer Index"
                    value={correctAnswerIndex}
                    onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value))}
                    required
                    fullWidth
                />
            </div>
            <Button  type="submit" variant="contained"  fullWidth className="custom-button">
               <h2 className='button'>Add Question</h2> 
            </Button>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </form>
        </CardContent>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default QuestionForm;