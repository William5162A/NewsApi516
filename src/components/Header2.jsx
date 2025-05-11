import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const Header2 = () => {
  const pathname = useLocation()
  const [openNav, setOpenNav] = useState(false)

  const toggleNavigation = () => {
    setOpenNav(!openNav)
  }
  const closeNav = () => {
    setOpenNav(false)
  }

  const arr = ['ll','llj']
  return (
    <div id={"Features"} className={' fixed top-0 left-0 px-20 w-screen z-50 bg-zinc-600 py-4'}>
      <div className={'flex justify-between '}>
        <div className={'cursor-pointer border-2 px-3 py-1 rounded-xl  hover:bg-zinc-300 hover:text-black hover:rounded-2xl transition-all'}>
          News Web
        </div>
        <div className={`${openNav ? 'fixed top-15 left-0 ' : ''}`}>
          <div className={
            `${openNav ? 'flex flex-col w-dvw h-dvh z-20 items-center ' +
              'bg-blue-100 gap-20 pt-20 opacity-80' :
            'lg:flex gap-14 hidden overflow-hidden'
            } `
          }
          >
            {arr.map((article) => (
              <a key={article}
                 href={`#${article}`}
                 className={`cursor-pointer hover:text-blue-300 transition-colors`}
                onClick={() => closeNav()}
              >
                {article}              </a>
            ))}
          </div>
        </div>
        <button
          className={`ml-auto lg:hidden cursor-pointer border-2 px-4 rounded-full
           ${openNav ? 'bg-zinc-300 text-black transition-all' : 'bg-zinc-600 text-white transition-all'}`}

          onClick={toggleNavigation}
        >
         ---
        </button>
      </div>

    </div>

  )
}
export default Header2
