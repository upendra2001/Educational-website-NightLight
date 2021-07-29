import React from 'react'
import '../../css/home/collections.css'
import resume from '../../assets/resume-copy-on-work-place-260nw-1434400523.jpg'
import faqs from '../../assets/FAQ_0130.jpg'
import quote from '../../assets/Bhagavad-Gita-Quotes-1.jpg'

export default function Collections() {
    return (
        <div className="collection-container">
            <div className="main-container">
                <div className="container-col col-left">
                    <div className="col-items col-left-top">
                        <p>Article</p>
                    </div>
                    <div className="col-items col-left-mid">
                        <p>Quizzes/MCQs</p>
                    </div>
                    <div className="col-items col-left-bottom">
                        <img src={resume} alt="..." />
                    </div>
                </div>
                <div className="container-col col-mid">
                    {/* <p> QUOTES / MOTIVATIONAL THOUGHTS / THOUGHT OF THE DAY</p> */}
                    <img src={quote} alt="..." />
                </div>
                <div className="container-col col-right">
                    <div className="col-items col-right-top">
                        <p>Notes</p>
                    </div>
                    <div className="col-items col-right-mid">
                        <p>Video Links</p>
                    </div>
                    <div className="col-items col-right-bottom">
                        <img src={faqs} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
