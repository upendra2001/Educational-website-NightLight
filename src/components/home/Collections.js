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
                    <div className="col-items col-left-mid col-left-mid-bottom">
                        <p>Quizzes/MCQs</p>
                    </div>
                    <div className="col-items col-left-bottom col-left-mid-bottom"> 
                        <p>Resume</p>
                    </div>
                </div>
                <div className="container-col col-mid">
                    <p> QUOTES / MOTIVATIONAL THOUGHTS / THOUGHT OF THE DAY Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem explicabo corporis quisquam dolorum saepe, voluptatem facilis distinctio deserunt cumque totam, voluptas quidem unde. Atque laborum repudiandae accusantium expedita eum, nostrum veniam nesciunt quidem.</p>
                    {/* <img src={quote} alt="..." /> */}
                </div>
                <div className="container-col col-right">
                    <div className="col-items col-right-top col-right-top-mid">
                        <p>Notes</p>
                    </div>
                    <div className="col-items col-right-mid col-right-top-mid">
                        <p>Video Links</p>
                    </div>
                    <div className="col-items col-right-bottom">
                        <p>FAQs!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
