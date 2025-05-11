import React from 'react'

const ContactUs = () => {
  return (
    <div>

      <div id='contactUs'  className={'border-yellow-300 border-4 p-4 rounded-3xl  bg-blue-900 hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer transition-all font-bold lg:text-5xl text-3xl px-15  mx-auto mb-10 flex justify-center w-fit '}>
        Contact Us
      </div>

      <div className={'w-full h-[700px] flex items-center justify-center'}>
        <div className={'w-[80%] bg-white text-black h-[90%] rounded-3xl p-5 flex '}>
          <div className={'w-1/2 bg-yellow-300 p-10 font-bold text-3xl rounded-3xl '}>
            <div className={'flex items-center h-full'}>
              Contact Us By Sending Us An Email To Share Your Ideas And Your Suggestion
            </div>
          </div>


          <div className={'w-1/2 '}>
            <div className={'flex flex-col items-center justify-center h-full font-black '}>
              <form action="">
                <label className={' flex flex-col items-center '}>
                  Please Enter Your Letter Here
                  <textarea className={' outline-yellow-300 outline mt-10 p-1 resize-none w-[80%] h-[150px]'}  rows={5} // عدد الأسطر الابتدائي
                            cols={40}/>
                </label>
                <div className={'mt-10 flex justify-center items-center'}>
                  <button type={'submit'} className={'bg-yellow-300 p-3 rounded-2xl'}>Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

        {/*/////////*/}


    </div>
  )
}
export default ContactUs
