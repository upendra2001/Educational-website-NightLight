import React from 'react'
import Option from './Option'
import Options from './Option'

export default function Question() {
    return (
        <div className="quizmaker-question-format">
            <div className="quizmaker-question">
            <label htmlFor="">Question: </label>
                <input type="text" placeholder="Question . . ." />
            </div>
            <div className="no-of-options">
                <label htmlFor="">no-of-options</label>
                <input type="text" placeholder="no-of-options" />
            </div>
            <Option/>
        </div>
    )
}
