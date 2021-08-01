import React, { useEffect, useState } from 'react'
import Option from './Option'

export default function Question(props) {
    const {
        questions,
        setQuestions,
        questionObj, 
        setQuestionObj,
        isAdd,
        isSubmit
    } = props 

    const [options, setOptions] = useState(0);
    const [numberOfOptions, setNumberOfOptions] = useState(0)
    const [opt, setOpt] = useState([]) 
    const [saveOptionsClicked, setSaveOptionsClicked] = useState(false)
    
    return (
        <div className="quizmaker-question-format">
            <div className="quizmaker-question">
                <label htmlFor="">Question: </label>
                <input type="text" placeholder="Question . . ." 
                onChange={(e) => { 
                    setQuestionObj({ ...questionObj, question: e.target.value })
                    console.log("questionObj: ", questionObj)
                }} />
            </div>
            <div className="quizmaker-no-of-options">
                <label htmlFor="">No. of options</label>
                :<input type="number" placeholder="1 - 5" onChange={(e)=>{
                    setNumberOfOptions(parseInt(e.target.value))
                    setSaveOptionsClicked(false)
                    }}/>
                <button onClick={(e) => { 
                        e.preventDefault(); 
                        setOptions(numberOfOptions); 
                        setSaveOptionsClicked(true)
                    }} >
                    {
                        saveOptionsClicked&&options<6? "Saved":"Save"
                    }
                </button>
                {
                    (options > 5) ? <p className="quizmaker-option-err"><i className="fas fa-exclamation-triangle" /> Options can only be 1 to 5 in number</p> : null
                }
            </div>
            {
                (options <= 5) ? 
                    [...Array(options),].map((ele, idx) => {  
                        const optionArray= [...opt]; 
                        return (<Option key={idx + 1} optionNum={idx + 1} opt={opt} setOpt={setOpt} optionArray={optionArray}/>)
                    }) : null
            } 
            {/* {
                isAdd?
                setQuestionObj({...questionObj, options: opt}): null
            } */}
        </div>
    )
} 