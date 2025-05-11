import React from 'react'

const ButtonUp = () => {
  return (
    <div>
      <a className="fixed right-20 bottom-40 bg-zinc-600 p-5 rounded-full
     hover:bg-zinc-300 hover:text-black transition-all cursor-pointer" href="#" onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}>
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <a href="#footer" className="fixed right-20 bottom-20 bg-zinc-600 p-5 rounded-full
     hover:bg-zinc-300 hover:text-black transition-all cursor-pointer">
        <i className="fa-solid fa-arrow-down"></i>
      </a>
    </div>
  )
}
export default ButtonUp
