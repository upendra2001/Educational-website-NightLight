import React, { useState } from 'react'
import Option from './Option'

export default function Question(props) {
    const {
        questions, 
        setQuestions
    } = props
    const [questionObj, setQuestionObj] = useState({
        qId:1,
        question: "",
        options:[]
    })
    const [options, setOptions] = useState(0);


    return (
        <div className="quizmaker-question-format">
            <div className="quizmaker-question">
                <label htmlFor="">Question: </label>
                <input type="text" placeholder="Question . . ." onChange={(e)=>{
                    setQuestionObj({...questionObj, question: e.target.value} )
                    console.log("questionObj: ", questionObj)
                }} />
            </div>
            <div className="quizmaker-no-of-options">
                <label htmlFor="">No. of options</label>
                <input type="number" placeholder="1 - 5"
                    onChange={(e) => {
                        // if(e.target.value<6) 
                        setOptions(parseInt(e.target.value));
                    }}
                />
                {
                    (options > 5) ? <p className="quizmaker-option-err"><i className="fas fa-exclamation-triangle" /> Enter value less than equal to 5</p> : null
                }
            </div>
            {
                (options <= 5) ?
                    [...Array(options),].map((ele, idx) => {
                        return <Option key={idx + 1} optionNum={idx + 1} setQuestionObj={setQuestionObj} questionObj={questionObj} />
                    }) : null
            }
        </div>
    )
}
