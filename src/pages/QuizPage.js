import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import QuizDisplay from '../components/QuizDisplay';
import { Container } from '@mui/material';

const QuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const fetchQuizzes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/quizzes');
            setQuizzes(response.data);
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const handleQuizSelect = (quiz) => {
        setSelectedQuiz(selectedQuiz ? null : quiz); // Toggle quiz
    };

    return (
        <Container>
            <h1>----</h1>
            <QuizForm fetchQuizzes={fetchQuizzes} />
            <QuizList quizzes={quizzes} fetchQuizzes={fetchQuizzes} onQuizSelect={handleQuizSelect} />
            {selectedQuiz && <QuizDisplay quiz={selectedQuiz} fetchQuizzes={fetchQuizzes} setSelectedQuiz={setSelectedQuiz} />}
            
        </Container>
        
    );
};

export default QuizPage;
