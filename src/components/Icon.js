import React from 'react'

const Icon = ({ icn, url }) => {
    console.log();
    return (
        <div className='shadow-slate-700 shadow-lg hover:opacity-70 m-2 ml-4 bg-gray-200 w-fit rounded-lg p-2 cursor-pointer'>
            <a href={url} target="_blank">  <img src={icn} height={30} width={30} /> </a>
        </div>
    )
}

export default Icon