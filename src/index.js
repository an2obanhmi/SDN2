import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import Header from './components/Header';
// import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';
import App from './App';

const Root = () => {
    return (
        <Router>
         <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/questions" element={<QuestionPage />} />
                <Route path="/quizzes" element={<QuizPage />} />
            </Routes>
            
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
