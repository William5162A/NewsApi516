// import ButtonUp from "./components/ButtonUp.jsx";
import React from "react";
import Api from "./components/Api.jsx";
// import ContactUs from "./components/ContactUs.jsx";

function App() {
  return (
        <div className="overflow-hidden bg-blue-950 select-none">

          <Api/>
          {/*<ContactUs/>*/}
        </div>
  )
}

export default App
//
// <div>
// <div id={"Features"} className={' fixed top-0 left-0 px-20 w-screen z-50 bg-zinc-600 py-4'}>
//   <div className={'flex justify-between '}>
//   <div className={'cursor-pointer h-10 flex items-center border-2 px-3 py-1 rounded-xl  hover:bg-zinc-300 hover:text-black hover:rounded-2xl transition-all'}>
//   NewsWeb
//   </div>
// <div
//   className={ `bg-gray-400 p-1 lg:ml-20 lg:mr-10 lg:flex
//             md:w-[90%]
//             ${openNav ? 'fixed top-20 left-10 w-[680px] bg-yellow-300' : 'hidden'}
//             `}
// >
//   {/*///////*/}
//   <div className={
//     `${openNav ? 'flex flex-col m-2 z-20 items-center  bg-blue-100 gap-3 pt-5 opacity-90' :
//       'flex flex-wrap gap-x-12 overflow-hidden bg-amber-500'
//     }`}
//   >
//     {arr.map((article) =>{
//       return (
//         <a key={article}
//            href={`#${article}`}
//            className={`cursor-pointer hover:text-blue-600 transition-colors text-black  `}
//            onClick={() => closeNav()}
//         >
//           {article}
//         </a>
//       )})}
//   </div>
// </div>
// <button
//   className={`ml-auto md:flex lg:hidden cursor-pointer border-2 px-4 rounded-full
//            ${openNav ? 'bg-zinc-300 text-black transition-all' : 'bg-zinc-600 text-white transition-all'}`}
//
//   onClick={toggleNavigation}
// >
//   ---
// </button>
// </div>
//
// </div>




