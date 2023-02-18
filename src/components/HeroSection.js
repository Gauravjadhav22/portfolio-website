import React from 'react'
import programmer from "../icns/programmer.png"
import insta from "../icns/icons8-instagram-96.png"
import whatsapp from "../icns/whatsapp.png"
import linkedin from "../icns/linkedin.png"
import github from "../icns/icons8-github-50.png"
import Icon from '../components/Icon';

export const ContactLinks = () => {
  return (
    <div className='gap-2 xl:flex-row lg:flex-row mt-2 w-fit h-fit flex justify-center items-center '>
      <Icon icn={github} url={'https://github.com/Gauravjadhav22?'} />
      <Icon icn={linkedin} url={'https://www.linkedin.com/in/gaurav-jadhav-0134071bb/'} />
      <Icon icn={whatsapp} url={'https://wa.me/+919130745878'} />
      <Icon icn={insta} url={'https://www.instagram.com/gaurav.jadhav22/'} />
    </div>
  )
}

const HeroSection = () => {
  return (
    <div id='about' className='xl:px-20 justify-around items-center flex mt-8 pt-14 xl:flex-row md:flex-col sm:flex-col xl:mr-20'>
      <div>
        <h1 className='text-lg' >  Hi, my name is</h1>
        <h1 className='text-2xl text-white font-bold'>Gaurav Jadhav.</h1><br />
        <h1 className='text-3xl opacity-60 text-white font-bold'>I build things for the web & android.</h1><br />
        <p className='my-8 text-2xl break-words text-gray-200 capitalize'>
          I’m a computer science student and passionate Full Stack Developer crazy About building Stuff. &nbsp;I built some projects in web and android <br />
        </p>
      </div>
      <div className='shadow-white shadow-md mt-4 p-4 bg-white rounded-xl flex-col transition'>

        <div className='shadow-lg flex flex-col items-center border-4 px-8 pt-2 text-black '>
          <img src={programmer} className='max-w-xs' />
          <h1 className='font-bold text-xl mt-1'>GAURAV JADHAV</h1>
          <h1 className='font-bold text-gray-500'>(Full Stack Developer)</h1>
        </div>
        <div className='flex justify-center'>

          <ContactLinks />
        </div>
      </div>

    </div>
  )
}

export default HeroSection