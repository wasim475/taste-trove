import React, { useEffect, useState } from 'react';

const UserFeedBack = () => {
    const [userFeedbackData, setuserFeedbackData]= useState([])

useEffect(()=>{

    fetch("https://taste-trove-server-sigma.vercel.app/userChoice")
    .then(res=> res.json())
    .then(resData=>setuserFeedbackData(resData))
 
},[])

console.log("feedbackData", userFeedbackData);
    return (
        <div className='bg-black'>
            <div className='text-center px-40 py-10'>
                <h1 className='lg:text-xl md:text-lg font-Raleway text-red-300 mb-4 mt-3'>CLIENTS</h1>
                <h1 className='lg:text-4xl md:text-2xl text-xl font-Lora text-white mb-4'>What Our Clients Says <br/> About Designthemes</h1>
                <p className='text-gray-100'>We understand that you have questions, and we welcome them. Below is the collection of queries which comes frequently from our clients.</p>
            </div>
            <div>
                {
                    userFeedbackData.map((userFb,index)=>(
                        <h1 key={index}>{}</h1>
                    ))
                }
            </div>
        </div>
    );
};

export default UserFeedBack;