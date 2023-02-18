import React from 'react'
import { ContactLinks } from './HeroSection'
const Contact = () => {
    return (
        <div id='contact' className='mt-20 flex flex-col items-center justify-center'>
            <div className='p-14 flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-center mb-4 w-fit p-1 font-bold'>Get In Touch -&gt;</h1>
                <p className='text-lg text-gray-300 text-center'>I’m looking for any opportunities like internship ,remote work <br /> --&gt; full Stack ,frontend or backend ,developement<br /> my inbox is always open.
                </p>
                <br />
                <a target='blank' className='hover:shadow-amber-100 shadow-md text-xl p-1' href='mailto:gauravofficial201@gmail.com'> Say Hello</a>
            </div>
            <div className='w-fit px-4 py-2 mb-4 flex justify-center items-center '>
                <ContactLinks />
            </div>
        </div>
    )
}

export default Contact