import React from 'react'
import projecticn from "../icns/icons8-projects-64.png"

const projectdiv = 'capatalize hover:bg-gray-800 w-96 m-4 border-2 border-aqua-text p-4 shadow-md shadow-white'
const Projects = () => {
    return (
        <div id='projects' className='my-20'>
            <div className='text-2xl text-center font-bold flex justify-center items-center'><h1>Projects</h1> <img src={projecticn} height={30} width={30} /></div>

            <div className='flex flex-wrap justify-center items-stretch'>

                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Blogging App(MERN)</h1>
                    <p>
                        create a Blogging App where a valid user can post their Blog<br /> And A valid user  can comment like their blog
                        <br />features:
                        .. uploading Blogs, ..comments , ..searching other user,
                        <br />

                    </p>
                    <br />
                    <a  href='https://bloggin-app-frontend-react.herokuapp.com/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500'>view demo</a>
                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Ecommerce Site(MERN)</h1>
                    <p>
                        Created fully Ecommerce site where user can create an Account
                        <br />
                        features:
                        <br /> ..cart, ..search products, ..Stripe Payment
                    </p>
                    <br />
                    <a href='https://shopping-app-mern-stack.herokuapp.com/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Movies-Info(NEXT JS)</h1>
                    Created A web App where user can search any Movie and get all details of that movie

                    <br />
                    <br />
                    <a  href='https://movies-info-next.herokuapp.com/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Food Rcipe App (NEXT JS)</h1>
                    Created A web App where user can search any Recipe and get all details of that Recipe

                    <br />
                    <br />
                    <br />
                    <a  href='https://food-recipe-app-nextjs.herokuapp.com/' target='_blank' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Managing Customers Details (Kotlin And Express js)</h1>
                  Created Android App for managing members details like updating user details 
                  using express js and mongodb(Api)

                    <br />
                    <br />
                    <a href='https://github.com/Gauravjadhav22/customer_info_api_nodejs' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500' target='_blank'>view demo</a>

                </div>
                <div className={`${projectdiv} hover:scale-110 transition`}><h1>Birthday Remider App (Kotlin And express js)</h1>
                    Created Android App for group of people where Any one can add birthday of anyone in their team 
                    <br/>
                    and when they open app see whoes birthday is today!..

                    <br />
                    <br />
                    <a href='https://github.com/Gauravjadhav22/birthday-reminderApi' className='border-2 text-center pb-1 px-2 underline text-green-400 border-blue-500' >view demo</a>

                </div>
            </div>

        </div>
    )
}

export default Projects