import React from 'react'

export default function Option(props) {
    const { 
        optionNum,
        setQuestionObj,
        questionObj 
    } = props;
    return (
        <div className="quizmaker-options">
            <span>{optionNum}.</span>
            <input type="text " placeholder="option" onChange={(e)=>{
                setQuestionObj({options: [e.target.value]})
                console.log("questionObj: ", questionObj)
            }} />
        </div>
    )
}
