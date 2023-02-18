import React from 'react'
import reactIcn from '../icns/atom.png'
import coding from '../icns/coding.png'
import xd from '../icns/icons8-adobe-xd-96.png'
import aws from '../icns/icons8-amazon-web-services-96.png'
import api from '../icns/icons8-api-96.png'
import django from '../icns/icons8-django-96.png'
import redux from '../icns/icons8-redux-96.png'
import mongodb from '../icns/icons8-mongodb-96.png'
import js from '../icns/java-script.png'
import java from '../icns/java.png'
import mysql from '../icns/mysql.png'
import nodejs from '../icns/icons8-nodejs-96.png'
import git from '../icns/icons8-git-96.png'
import python from '../icns/python.png'
import ex from '../icns/icons8-express-js-50.png'
import cpp from '../icns/icons8-c-plus-plus-50.png'
import kotlin from '../icns/icons8-kotlin-96.png'

const Item = ({ icon }) => {
    return <div className='shadow-slate-700 shadow-lg m-2 rounded-xl bg-white hover:opacity-70 xl:ml-4 p-1'>
        <img src={icon} height={50} width={50} />
    </div>
}


const Skills = () => {
    return (
        <div id='Skills' className='p-2 my-10 mt-20'>
            <h1 className='text-xl text-center font-bold hover:opacity-75'>My Skills</h1>
            <div className='p-12 flex justify-center lg:flex-col xl:flex-col'>

                <div className='mx-0.5 md:flex-col sm:flex-col xl:flex-row lg:flex-row flex justify-center items-center'>
                    <Item icon={coding} />
                    <Item icon={js} />
                    <Item icon={nodejs} />
                    <Item icon={reactIcn} />
                    <Item icon={redux} />
                    <Item icon={api} />
                    <Item icon={ex} />
                    <Item icon={mongodb} />
                </div>
                <br />
                <div className='mx-0.5 md:flex-col sm:flex-col xl:flex-row lg:flex-row flex justify-center items-center'>
                    <br />
                    <Item icon={java} />
                    <Item icon={cpp} />
                    <Item icon={python} />
                    <Item icon={django} />
                    <Item icon={kotlin} />
                    <Item icon={git} />
                    <Item icon={mysql} />
                    <Item icon={xd} />
                    <Item icon={aws} />
                </div>
            </div>

        </div>
    )
}

export default Skills