import React from 'react'
import projecticn from "../assets/icons8-projects-64.png"

const projectdiv = 'capatalize hover:rounded-2xl hover:shadow-green-300 hover:bg-gray-800 w-96 m-4 p-4 shadow-sm shadow-blue-400 flex flex-col justify-between'
const Projects = () => {
    return (
        <div id='projects' className='my-20'>
            <div className='text-2xl text-center font-bold flex justify-center items-center mb-8'><h1>Projects</h1> <img src={projecticn} height={30} width={30} /></div>

            <div className='capitalize flex flex-wrap justify-center items-stretch'>

                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Blogging App(MERN)</h1>

                    <ul className='leading-6'>
                        <br />
                        <li className='bg-cyan-200 bg-opacity-20 p-2 '>

                            created a Blogging App where a valid user can post their Blog<br /> And A valid user  can comment like their blog
                        </li>
                        <li>
                            <br />
                            features:
                            .. uploading Blogs, ..comments , ..searching other user,
                        </li>
                        <br />

                    </ul>
                    <br />
                    <a href='https://blogging-app-react-b5zomog0g-rgaurav22ak-gmailcom.vercel.app/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl'>view demo</a>
                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Ecommerce Site(MERN)</h1>


                    <ul className='leading-6'>
                        <br />
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>

                            Created fully Ecommerce site where user can create an Account
                        </li>
                        <li>
                            <br />
                            features:
                            <br /> ..cart, ..search products, ..Stripe Payment
                        </li>
                        <br />

                    </ul>
                    <br />
                    <a href='https://ecommerce-mern-frontend-lemon.vercel.app/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition `}><h1>Voting System(MERN & FIREBASE)</h1>
                    <ul className='leading-6'>
                        <br />
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>

                            Created a voting website where anyone can create a Voting room and anyone can join that room using a room Key

                        </li>


                    </ul>
                    <br />
                    <br />
                    <a href='https://online-voting-frontend-k32j.vercel.app/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Movies Info App (NEXT JS)</h1>
                    <br />
                    <ul className='leading-6'>
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>
                            Created A web App where a user can enter details to generate college id card 


                        </li>


                    </ul>

                    <br />
                    <br />
                    <a href='https://icard-generator-1eg6-f52l7dck1-rgaurav222001-gmailcom.vercel.app/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Movies Info App (NEXT JS)</h1>
                    <br />
                    <ul className='leading-6'>
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>
                            Created A web App where user can search any Movie and get all details of that Movie


                        </li>


                    </ul>

                    <br />
                    <br />
                    <a href='https://movies-info-rgtdr9z6m-iamgaurav9130-gmailcom.vercel.app/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Managing Customers Details (Kotlin And Express js)</h1>

                    <ul className='leading-6'>
                        <br />
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>
                            Created Android App for managing members details like updating user details
                            using express js and mongodb(Api)

                        </li>


                    </ul>



                    <br />
                    <br />
                    <a href='https://github.com/Gauravjadhav22/customer_info_api_nodejs' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl' target='_blank'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Birthday Remider App (Kotlin And express js)</h1>
                    <br />
                    <ul className='leading-6'>
                        <li className='bg-cyan-200 bg-opacity-20 p-2'>
                            Created Android App for group of people where Any one can add birthday of anyone in their team
                            and when they open app see whoes birthday is today!..
                        </li>


                    </ul>


                    <br />
                    <br />
                    <a href='https://github.com/Gauravjadhav22/birthday-reminderApi' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500 self-end border-none bg-blue-900 p-1 rounded-xl' >view demo</a>

                </div>
            </div>

        </div>
    )
}

export default Projects