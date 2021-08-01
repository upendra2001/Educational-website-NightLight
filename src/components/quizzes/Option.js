import React from 'react'

export default function Option(props) {
    const { 
        optionNum,
        opt, 
        setOpt ,
        optionArray
    } = props;
    return (
        <div className="quizmaker-options">
            <span>{optionNum}.</span>
            <input type="text " placeholder="option" onChange={(e)=>{ 
                optionArray[optionNum-1]={
                    opId: optionNum,
                    value: e.target.value
                }; 
                setOpt(optionArray) 
            }} />
        </div>
    )
}
