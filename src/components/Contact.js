import React from 'react'
import { ContactLinks } from './HeroSection'
const Contact = () => {
    return (
        <div id='contact' className='mt-20 flex flex-col items-center justify-center'>
            <div className='p-14 flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-center mb-4 w-fit p-1 font-bold'>Get In Touch -&gt;</h1>
                <p className='text-lg text-gray-300'>I’m looking for any opportunities like internship ,remote work <br/> --&gt; full Stack ,frontend or backend ,developement my inbox is always open. 
                </p>
                <br/>
                <a target='blank' className='text-xl border-2 border-aqua p-1' href='mailto:gauravofficial201@gmail.com'> Say Hello</a>
            </div>
            <div className='h-fit shadow-aqua shadow-2xl border-2 my-14 xl:px-14 xl:w-fit'>
            <ContactLinks/>
            </div>
        </div>
    )
}

export default Contact