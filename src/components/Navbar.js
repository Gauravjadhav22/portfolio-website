import React, { useRef, useState } from 'react'

const Nav = () => {
  const linkStyle = 'sm:my-4 sm:bg-blue-600 text-center mx-8 cursor-pointer border-2 border-aqua p-2 rounded-md xl:hover:bg-gray-800 xl:bg-transparent lg:bg-transparent transition hover:opacity-80'
  return (

    <div className={` flex justify-around w-44 md:flex-col sm:flex-col xl:flex-row lg:flex-row `}>

      <a className={`${linkStyle} `} href='#about'>About</a>
      <a className={`${linkStyle}`} href='#projects'>Work</a>
      <a className={`${linkStyle}`} href='#Skills'>Skills</a>
      <a className={`${linkStyle}`} href='#contact'>Contact</a>
      <a className={`${linkStyle} !bg-cyan-800`} href='https://drive.google.com/file/d/13JRHZJQ2-ECUWLZOmJLDXNQDEubj3ZE-/view?usp=sharing' target='_blank' >Resume</a>

    </div>



  )
}

const Navbar = () => {
  // const [menu, setMenu] = useState(false)
  const menu = useRef(false)
  const [menu2, setMenu2] = useState(false)
  const [stylemenu, setStyleMenu] = useState("")
  const setMenuCss = () => {
    setMenu2(!menu2)
    if (menu.current) {
      setStyleMenu("-translate-x-0")
    }
    else if (!menu.current) {
      setStyleMenu("-translate-x-full")
    }
  }
  return (
    <>
      <div onClick={() => {
        // setMenu(prev => !prev
        // )
        setMenuCss()
        menu.current = !menu.current
      }
      } className=' absolute top-1 left-2 cursor-pointer w-fit m-2 flex flex-col justify-center items-center xl:hidden lg:hidden '>
        {menu2 ? <> <span className='w-8 bg-white h-1 m-1'></span>
          <span className='w-8 bg-white h-1 m-1'></span>
          <span className='w-8 bg-white h-1 m-1 '></span>
        </> : <h1 style={{marginTop:"-15px"}} className='ml-1 text-6xl font-thin text-white'>x</h1>}
      </div>

      <div className='xl:flex lg:flex md:hidden sm:hidden justify-center mt-4'>
        <Nav />
      </div>
      <div className={`transition-all mt-14 xl:hidden lg:hidden md:${stylemenu} sm:${stylemenu} transition`}>
        <Nav />
      </div>



    </>
  )
}

export default Navbar