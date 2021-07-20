import React from 'react'
import '../../css/home/LandingPage.css'
import bannerImage from '../../assets/324698.jpg'

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="container-fluid landing-page-main">
                <img src={bannerImage} alt="page"/>
                <div className="row landing-page-row">
                    <div className="col-sm banner-heading">
                        Learn Like a PRO With Upendra and Vaibhav
                    </div>
                </div>
            </div>


        </div>
    )
}
