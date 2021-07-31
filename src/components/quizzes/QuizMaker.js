import React, { useState } from 'react'
import Question from './Question'
import '../../css/quizzes/quizMaker.css'

export default function QuizMaker() {
    const [questions, setQuestions] = useState([])
    
    
    const [numberOfQuestions, setNumberOfQuestions] = useState(1)
    return (
        <div className="quizmaker-container">
            <div className="quizmaker-main-container">
                <div className="quizmaker-heading">
                    <h1>Create your own customized quiz</h1>
                </div>
                <div className="quizmaker-title-time">
                    <div className="quizmaker-title">
                        <label htmlFor="">Title: </label>
                        <input type="text" placeholder="Add Quiz title" />
                    </div>
                    <div className="quizmaker-time">
                        <label htmlFor="">Time: </label>
                        <input type="text" placeholder="Add Time" />
                    </div>
                </div>
                <Question questions={questions} /> 
                <button className="quizmaker-add-question" >Add Question</button>

            <button className="quizmaker-submit">Submit</button>
            </div>
        </div>
    )
}
