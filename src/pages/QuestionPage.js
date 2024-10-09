import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionForm from '../components/QuestionForm';
import QuestionList from '../components/QuestionList';
import DisplayQuestion from '../components/DisplayQuestion';
import { Container } from '@mui/material';

const QuestionPage = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    
    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/questions');
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleQuestionSelect = (question) => {
        setSelectedQuestion(selectedQuestion ? null : question); // Toggle question
    };

    return (
        <Container>
            <h1>----</h1>
            <QuestionForm fetchQuestions={fetchQuestions} />
            <QuestionList questions={questions} fetchQuestions={fetchQuestions} onQuestionSelect={handleQuestionSelect} />
            {selectedQuestion && <DisplayQuestion fetchQuestions={fetchQuestions} setSelectedQuestion={setSelectedQuestion} question={selectedQuestion} />}
            
        </Container>
        
    );
};

export default QuestionPage;
