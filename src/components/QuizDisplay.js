import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const QuizDisplay = ({ quiz, fetchQuizzes, setSelectedQuiz }) => {
    const [isEditing, setIsEditing] = useState(false); // Quản lý trạng thái edit
    const [title, setTitle] = useState(quiz.title); // State lưu trữ title của quiz
    const [description, setDescription] = useState(quiz.description); // State lưu trữ description của quiz

    // Use effect to update local state when the quiz prop changes
    useEffect(() => {
        setTitle(quiz.title);
        setDescription(quiz.description);
    }, [quiz]); // Run this effect whenever quiz changes

    // Hàm xử lý khi người dùng muốn cập nhật quiz
    const handleUpdate = async () => {
        try {
            const updatedQuiz = { title, description }; 

            // Gửi yêu cầu PUT tới backend để cập nhật quiz
            await axios.put(`http://localhost:5000/quizzes/${quiz._id}`, updatedQuiz);
            setSelectedQuiz({
                ...quiz,
                ...updatedQuiz,
            });
            fetchQuizzes();

            setIsEditing(false); // Tắt chế độ edit sau khi cập nhật thành công
        } catch (error) {
            console.error('Error updating quiz:', error);
        }
    };

    return (
        <Box>
            {isEditing ? (
                <Box>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleUpdate} variant="contained" color="primary">
                        Update
                    </Button>
                    <Button onClick={() => setIsEditing(false)} variant="contained" color="secondary">
                        Cancel
                    </Button>
                </Box>
            ) : (
                <Box>
                    <Typography variant="h6">Title: {quiz.title}</Typography>
                    <Typography>Description: {quiz.description}</Typography>
                    <Button onClick={() => setIsEditing(true)} variant="contained" color="primary">
                        Edit
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default QuizDisplay;
