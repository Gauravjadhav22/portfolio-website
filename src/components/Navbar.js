import React, { useRef, useState } from 'react'

const Nav = () => {
  const linkStyle = 'sm:my-4 xl:border-none lg:border-none sm:border-2 shadow-md hover:shadow-amber-200 text-center mx-8 cursor-pointer p-2 rounded-md xl:hover:bg-gray-700 xl:bg-transparent lg:bg-transparent transition '
  return (

    <div className={`flex justify-around w-44 md:flex-col sm:flex-col xl:flex-row lg:flex-row `}>

      <a className={`${linkStyle} `} href='#about'>About</a>
      <a className={`${linkStyle}`} href='#projects'>Work</a>
      <a className={`${linkStyle}`} href='#Skills'>Skills</a>
      <a className={`${linkStyle}`} href='#contact'>Contact</a>
      {/* <a className={`${linkStyle} !bg-cyan-800`} href='https://drive.google.com/file/d/1r7SszG17yE8DMzYLoiPILTjgxQ7JpZsX/view?usp=sharing' target='_blank' >Resume</a> */}
      {/* <a className={`${linkStyle} !bg-cyan-800`} href='https://drive.google.com/file/d/1r7SszG17yE8DMzYLoiPILTjgxQ7JpZsX/view?usp=sharing' target='_blank' >Resume</a> */}

    </div>



  )
}

const Navbar = () => {
  const menu = useRef(true)
  const [menu2, setMenu2] = useState(false)
  const [stylemenu, setStyleMenu] = useState("")
  const [styleTranslate, setStyleTranslate] = useState("-ml-44")
  const setMenuCss = () => {
    setMenu2(!menu2)
    if (menu.current) {
      setStyleTranslate("translate-x-0")
      // setStyleMenu("visible")
    }
    else if (!menu.current) {
      setStyleTranslate("-ml-44")

    }
  }
  return (
    <>
      <div onClick={() => {
        setMenuCss()
        menu.current = !menu.current
        
      }
      } className='absolute top-1 left-0 cursor-pointer w-fit m-2 flex flex-col justify-center items-center xl:hidden lg:hidden '>
        {!menu2 ? <div className='flex flex-col' >
          <span className='px-4 bg-white p-0.5  rounded-2xl border-1' ></span>
          <span className='px-4 bg-white p-0.5 my-1.5 rounded-2xl border-1' ></span>
          <span className='px-4 bg-white p-0.5  rounded-2xl border-1' ></span>
        </div> : <div >
          <span className='py-1 bg-white p-0.5  rounded-2xl' ></span>
          <span className='py-1 bg-white p-0.5 mx-1.5 rounded-2xl' ></span>
          <span className='py-1 bg-white p-0.5  rounded-2xl' ></span>
        </div>}
      </div>

      <div className='xl:flex lg:flex md:hidden sm:hidden justify-center mt-4'>
        <Nav />
      </div>

      <div className={`absolute mt-2 left-0 bg-teal-800 rounded-md xl:hidden lg:hidden md:${stylemenu} sm:${stylemenu} ${styleTranslate} ease-in-out duration-300 z-50 `}>
        <Nav />
      </div>



    </>
  )
}

export default Navbar