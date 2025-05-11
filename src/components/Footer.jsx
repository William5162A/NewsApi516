import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className={'bg-black h-[150px] flex p-5 justify-evenly '}>
      <div className={'font-bold '}>
        News Web Page
      </div>
      <div className={'flex flex-col gap-2 '}>
        <a href='#' className={'underline'}>FaceBook
          <i className="fa-brands fa-square-facebook pl-2 "></i>
        </a>
        <a href='#' className={'underline'}>Instagram
          <i className="fa-brands fa-instagram  pl-2 "></i>
        </a>
        <a href='#' className={'underline'}>LinkedIn
          <i className="fa-brands fa-linkedin pl-2"></i>
        </a>
        <a href='#' className={'underline'}>X
          <i className="fa-brands fa-twitter pl-2"></i>
        </a>
      </div>

      <div>
       <p> Number Support Team :</p>
        <p>+963937136019</p>
        <p>WhatsUp :</p>
        <p>+963937136019</p>
      </div>
    </div>
  )
}
export default Footer
