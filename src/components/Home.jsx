import React from 'react'

const Home = () => {
  return (
    <div id={'home'} className={'flex flex-col'}>
      <div className={'border-yellow-300 border-4 p-4 rounded-3xl  bg-blue-900 hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer transition-all font-bold lg:text-5xl text-3xl px-15  mx-auto mb-10   flex justify-center'}>
        Home
      </div>

      <div className={'flex w-full justify-center'}>
        <div className={'text-black lg:h-[550px] h-[300px] w-2/3 mx-10 bg-yellow-300 border-[8px] border-white rounded-3xl lg:text-5xl text-2xl font-black flex items-center justify-center  px-20 lg:px-8 '}>
          <div className={'font-black  rounded-3xl flex items-center justify-center'}>
            Welcome To Our News Page
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home


