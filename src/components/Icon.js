import React from 'react'

const Icon = ({ icn, url }) => {
    return (
        <div className='shadow-slate-700 shadow-lg hover:opacity-70 m-1 bg-gray-200 w-fit rounded-lg p-2 cursor-pointer xl:ml-4 md:ml-4 lg:ml-4'>
            <a href={url} target="_blank">  <img src={icn} height={40} width={40} /> </a>
        </div>
    )
}

export default Icon