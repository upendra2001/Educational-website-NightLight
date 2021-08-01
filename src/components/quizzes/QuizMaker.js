import React, { useEffect, useState } from 'react'
import Question from './Question'
import '../../css/quizzes/quizMaker.css'

export default function QuizMaker() {
    const [questions, setQuestions] = useState([])
    const [questionObj, setQuestionObj] = useState({
        question: "",
        options: []
    })
    const [isAdd, setIsAdd] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
    const [quesArray, setquesArray] = useState([]) 
    const [que, setQue] = useState(0)
    const [saveQuestionsClicked, setSaveQuestionsClicked] = useState(false)


    return (
        <div className="quizmaker-container">
            <div className="quizmaker-main-container">
                <div className="quizmaker-heading">
                    <h1>Create your own customized quiz</h1>
                </div>
                <div className="quizmaker-title-time">
                    <div className="quizmaker-title">
                        <label htmlFor="">Title </label>
                        :<input type="text" placeholder="Add Quiz title" />
                    </div>
                    <div className="quizmaker-time">
                        <label htmlFor="">Time </label>
                        :<input type="text" placeholder="Add Time" />
                    </div>
                </div>
                <div className="quizmaker-no-of-questions"> 
                <label htmlFor="">No. of questions :</label>
                <input type="text" placeholder="1-50" onChange={(e)=>{
                    setNumberOfQuestions(parseInt(e.target.value))
                    setSaveQuestionsClicked(false)
                    }}/>
                <button onClick={(e) => { 
                        e.preventDefault();
                        setQue(numberOfQuestions); 
                        setSaveQuestionsClicked(true)
                    }} > 
                    {
                        saveQuestionsClicked? "Saved":"Save"
                    }
                </button>
                {
                    (que > 50) ? <p className="quizmaker-question-err"><i className="fas fa-exclamation-triangle" /> Enter value less than equal to 50</p> : null
                }
                </div>
                
                {
                (que <= 50) ? 
                    [...Array(que),].map((ele, idx) => {  
                        const questionArray= [...quesArray]; 
                        return (<Question key={idx + 1} isSubmit={isSubmit} isAdd={isAdd} setQuestionObj={setQuestionObj} questionObj={questionObj} questions={questions} setQuestions={setQuestions} questionNum={idx + 1} que={que} setQue={setQue} questionArray={questionArray}/>)
                    }) : null
                }
                 {/* <Question key={idx + 1} questionNum={idx + 1} que={que} setQue={setQue} questionArray={questionArray}/> */}
                {
                    que>0?<button className="quizmaker-submit">Submit</button> :null
                }
            </div>
        </div>
    )
}
