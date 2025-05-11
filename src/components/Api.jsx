import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'
import ContactUs from "./ContactUs.jsx";
import Home from "./Home.jsx";
import ButtonUp from "./ButtonUp.jsx";
import Footer from "./Footer.jsx";
import AboutUs from "./AboutUs.jsx";

 
const Api = () => {
  const pathname = useLocation()
  const [openNav, setOpenNav] = useState(false)
  const [activeId, setActiveId] = useState('');
  const [activeSearchBtn, setActiveSearchBtn] = useState(false);
  const [activeAuthor, setActiveAuthor] = useState(false);
  const [activeTitle, setActiveTitle] = useState(false);
  const [activeAuthorNav, setActiveAuthorNav] = useState(false);
  const [activeTitleNav, setActiveTitleNav] = useState(false);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleNavigation = () => {
    setOpenNav(!openNav)
  }
  const closeNav = () => {
    setOpenNav(false)
    setActiveAuthorNav(false)
    setActiveTitleNav(false)
    setActiveSearchBtn(false)
  }


  //Hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(window.location.hash.slice(1));
      // إزالة الـ # من البداية
    };
    // استمع لتغييرات الـ hash عند التحميل وعند التغيير
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // تحقق من الـ hash الأولي عند التحميل

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeId]);

  //Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // حجم LG في Tailwind (1024px)
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // API
  useEffect(() => {
    const API_KEY = '8f48e056283d47c8baa0338f653222f4';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to get News');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className={'bg-black w-full flex items-center justify-center h-dvh text-5xl font-bold'}>Loading...</div>;
  if (error) return <div  className={'bg-black w-full flex items-center justify-center h-dvh text-5xl font-bold '}>{error}...</div>;

  // console.log(articles)

  let arrAuthor =[]
  let arrTitle =[]
  let z = 0

  const ArrNavAuthor = () => {
    let x = 0
    for(let i = 0; i < articles.length; i++) {
      articles[i].author && articles[i].urlToImage ?
        arrAuthor.push(x + 1 + '_' + articles[i].author.split(" ")[0]) : ''
      articles[i].author && articles[i].urlToImage ? x += 1 : ''
    }
    return arrAuthor
  }
  ArrNavAuthor()

  const ArrNavTitle = () => {
    let x = 0
    for(let i = 0; i < articles.length; i++) {
      articles[i].author && articles[i].urlToImage ?
        arrTitle.push(x + 1 + '_' + articles[i].title.split(" ")[0]
        + ' ' + articles[i].title.split(" ")[1] + ' ' + articles[i].title.split(" ")[2] + '...') : ''
      articles[i].author && articles[i].urlToImage ? x += 1 : ''
    }
    return arrTitle
  }
  ArrNavTitle()


  const handleSearchBtn = () => {
    if(activeSearchBtn){
      setActiveAuthorNav(false)
      setActiveTitleNav(false)
    }
    setActiveSearchBtn(!activeSearchBtn)
  }

  const clickOnPageCloseSearch = () => {
    if(activeSearchBtn){
      setActiveAuthorNav(false)
      setActiveTitleNav(false)
    }
    setActiveSearchBtn(false)
    if(openNav){
      setOpenNav(false)
    }
  }

  return (
    <div className={'mt-28'}>
      <div id={"Features"} className={' fixed top-0 left-0 lg:px-40 ' +
        ' px-20 w-screen z-50 py-4 bg-black opacity-80 '}>
        <div className={'flex justify-between items-center'}>
          <div className={'cursor-pointer h-10 flex justify-center items-center border-2 px-3 py-1 rounded-xl  hover:bg-zinc-300 hover:text-black hover:rounded-2xl transition-all'}>
            NewsWeb
          </div>
          {/*<div*/}
          {/*  className={`p-1 lg:ml-20 lg:mr-10 lg:flex */}
          {/*  rounded-lg md:w-[90%] lg:w-[60%] justify-end */}
          {/*  ${openNav ? 'fixed top-[60px] left-10 w-[680px]  bg-blue-100 opacity-95 transition-all' : 'hidden'}*/}
          {/*  `}*/}
          {/*>*/}

          <div
            className={`p-1 lg:ml-20 lg:mr-10 lg:flex 
            rounded-lg w-[50%] lg:w-[60%] justify-end transition-all 
            opacity-100 
            ${openNav ? 'fixed top-[60px] right-10 w-[680px]  bg-white opacity-100 scale-100' : 'hidden '}
            `}
          >
            {/*<div*/}
            {/*className={`p-1 lg:ml-20 lg:mr-10 lg:flex */}
            {/*rounded-lg w-[50%] lg:w-[60%] justify-end transition-all */}
            {/*opacity-100 fixed duration-3000*/}
            {/*${openNav ? ' top-[60px] right-10 w-[680px]  bg-white opacity-100 scale-100' : ' top-[-660px] right-10 w-[680px]  bg-white opacity-100 scale-100 '}*/}
            {/*`}*/}

            {/*///////*/}
            <div className={
              ` transition-all duration-3000 ${openNav ? 'flex flex-col flex-wrap items-center ' +
                'justify-center h-[88dvh]  m-2 z-20  ' :
                'flex gap-x-10 w-[500px] overflow-hidden '
              }`}
            >

              <a href="#home" className={`transition-all ${openNav ?
                'text-black opacity-70 mb-28 border-b-black font-bold border-b-2 border-black ' : 'text-white opacity-50'}   hover:opacity-100`}
                 onClick={() => closeNav()}
              >Home</a>

              <a href="#newssection" className={` transition-all
                ${openNav ? 
                'text-black opacity-70 mb-28 border-b-black font-bold border-b-2 border-black ' : 'text-white opacity-50'}   hover:opacity-100`}
                onClick={() => closeNav()}
              >News Section</a>

              <a href="#contactUs" className={`transition-all ${openNav ? 
                'text-black opacity-70 mb-28 border-b-black font-bold border-b-2 border-black ' : 'text-white opacity-50'}   hover:opacity-100`}
                 onClick={() => closeNav()}
              >Contact Us</a>

              <a href="#aboutUS" className={`transition-all ${openNav ? 
                'text-black opacity-70 mb-28 border-b-black font-bold border-b-2 border-black ' : 'text-white opacity-50'}   hover:opacity-100`}
                 onClick={() => closeNav()}
              >About Us</a>

            <p className={`transition-all cursor-pointer hover:opacity-100 
              ${openNav ? `text-black opacity-70 border-b-black font-bold border-b-2 border-black ` : `${activeSearchBtn ? 'text-white opacity-100' : 'text-white opacity-50 '}`}
              `}
                 onClick={()=> {
                   handleSearchBtn()
                   setOpenNav(false)
                 }}>Search</p>
            </div>
          </div>

          <div className={`${activeSearchBtn ? 'fixed top-20 right-[110px]' +
            ' bg-white text-black py-5 px-8 rounded-xl opacity-90 ' :
           'hidden'} `}>
            <p className={`my-10 cursor-pointer font-bold hover:text-gray-600 transition-all 
            ${activeAuthor ? 'text-gray-600' : ''}`} onClick={() => {
              setActiveAuthor(!activeAuthor)
              setActiveAuthorNav(!activeAuthorNav)
              setActiveTitle(false)
              setActiveTitleNav(false)
            }}>Author</p>
            <p className={`my-10 cursor-pointer font-bold hover:text-gray-600 transition-all ${activeTitle ? 'text-gray-600' : ''}`} onClick={() => {
              setActiveTitle(!activeTitle)
              setActiveTitleNav(!activeTitleNav)
              setActiveAuthorNav(false)
              setActiveAuthor(false)
            }}>Title</p>
          </div>

          <div className={`fixed top-[70px] right-[250px] bg-white 
          w-[440px] rounded-3xl`}>
                    <div className={`${activeAuthorNav ? 'flex flex-wrap overflow-hidden p-5 ' :'hidden'}`}>
                      {arrAuthor.map((article) =>{
                        return (
                          <a
                            key={article}
                            href={`#${article}`}
                            className={`cursor-pointer hover:text-red-600 transition-colors text-black w-[200px] my-1
              ${activeId === article ? 'text-red-600 font-bold' : ''} // تغيير اللون إذا كان مطابقًا`}
                            onClick={() => {closeNav()}
                          }>
                            {article}
                          </a>
                        )})}
                    </div>
          </div>

          <div className={`fixed top-[70px] right-[250px] bg-white 
          w-[480px] rounded-3xl`}>
            <div className={`${activeTitleNav ? 'flex flex-wrap overflow-hidden p-5 ' :'hidden'}`}>
              {arrTitle.map((article) =>{
                const idFromArrAuthor = arrAuthor.filter((e) => {
                  if(e[0]+e[1] === article[0] + article[1]) {
                    // console.log(e)
                    return e
                  }

                })
                return (
                  <a
                    key={article}
                    href={`#${idFromArrAuthor[0]}`}
                    className={`cursor-pointer hover:text-yellow-600 transition-colors text-black w-[220px] my-2
              ${(activeId[0]+activeId[1] === article[0] + article[1]) ? 'text-yellow-600 font-bold' :''} // تغيير اللون إذا كان مطابقًا`}
                    onClick={() => {closeNav()}
                    }>
                    {article}
                  </a>
                )})}
            </div>
          </div>

          <button
            className={`ml-auto md:flex lg:hidden cursor-pointer border-2 px-4 rounded-full
           ${openNav ? 'bg-zinc-300 text-black transition-all' : 'bg-zinc-600 text-white transition-all'}`}
            onClick={toggleNavigation}
          >
            ---
          </button>
        </div>

      </div>

      {/*//////*/}

      <Home/>

      {/*//////*/}

     <div>
       <div  id={'newssection'} className={'mt-5 transition-all p-12 '} onClick={() =>clickOnPageCloseSearch()}>
         <div className={'flex justify-center items-center font-bold lg:text-5xl  text-3xl '}>
           <div className={'border-yellow-300 border-4 p-4 rounded-3xl  bg-blue-900 hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer transition-all'}>
             News Section
           </div>
         </div>
         <div className="flex flex-wrap pt-20 mx-20  justify-evenly">
           {
             articles.map((article, index) => {

               if(article.urlToImage && article.author ){
                 z += 1
                 return (
                   <div key={index} id={z +'_' +article.author.split(' ')[0]} className=" border-4 m-4 p-8 bg-blue-700 rounded-xl lg:w-[45%]">
                     <h1 className=" text-2xl font-bold border-2 p-7 rounded-2xl bg-yellow-300 text-black">{article.title}</h1>

                     <img
                       src={article.urlToImage || ''}
                       alt={article.title}
                       className="my-5"
                     />

                     <p className="">{article.description}</p>
                     <a
                       href={article.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-400 "
                     >
                       {`>>>  `}  Read More...
                     </a>

                     <div className={''}>
                       <hr className={'my-3 '} />
                       <div className={' flex justify-center '}>
                         <div className={'text-black lg:font-bold bg-blue-300 p-4 border border-transparent justify-center flex  rounded-full w-1/2 transition-all cursor-pointer hover:bg-yellow-300 hover:border hover:border-black m-2 '}>
                           Author :
                           {" " + article.author}
                         </div>
                       </div>
                     </div>
                   </div>
                 )
               }
             })}
         </div>
       </div>
     </div>

      <ContactUs/>
      <AboutUs/>
      <Footer/>
      <ButtonUp/>
    </div>

  );
};

export default Api ;




//////////

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {useLocation} from 'react-router-dom'
//
//
// const Api = () => {
//
//   const pathname = useLocation()
//   const [openNav, setOpenNav] = useState(false)
//   const [activeId, setActiveId] = useState('');
//
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   const toggleNavigation = () => {
//     setOpenNav(!openNav)
//   }
//   const closeNav = () => {
//     setOpenNav(false)
//   }
//
//   useEffect(() => {
//     const handleHashChange = () => {
//       setActiveId(window.location.hash.slice(1)); // إزالة الـ # من البداية
//     };
//
//     // استمع لتغييرات الـ hash عند التحميل وعند التغيير
//     window.addEventListener('hashchange', handleHashChange);
//     handleHashChange(); // تحقق من الـ hash الأولي عند التحميل
//
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) { // حجم LG في Tailwind (1024px)
//         setOpenNav(false);
//       }
//     };
//
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   useEffect(() => {
//     const API_KEY = '8f48e056283d47c8baa0338f653222f4';
//     const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
//
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(url);
//         setArticles(response.data.articles);
//       } catch (err) {
//         setError('Failed to get News');
//         console.error('Error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchNews();
//   }, []);
//
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//
//   // console.log(articles)
//
//   let arr =[]
//   let z = 0
//
//   const ArrNav = () => {
//     let x = 0
//     for(let i = 0; i < articles.length; i++) {
//       articles[i].author && articles[i].urlToImage ?
//         arr.push(x + 1 + '_' + articles[i].author.split(" ")[0]) : ''
//       articles[i].author && articles[i].urlToImage ? x += 1 : ''
//     }
//     return arr
//   }
//   ArrNav()
//   // console.log(arr)
//
//   // let arrr = ['1_Megan','2_Diana','3_Myra','1_Megan','2_Diana','3_Myra','1_Megan','2_Diana','3_Myra','1_Megan','2_Diana','3_Myra','1_Megan','2_Diana','3_Myra','1_Megan','2_Diana','3_Myra']
//
//   return (
//     <div>
//       <div id={"Features"} className={' fixed top-0 left-0 px-20 w-screen z-50 bg-zinc-600 py-4 '}>
//         <div className={'flex justify-between items-center'}>
//           <div className={'cursor-pointer h-10 flex justify-center items-center border-2 px-3 py-1 rounded-xl  hover:bg-zinc-300 hover:text-black hover:rounded-2xl transition-all'}>
//             NewsWeb
//           </div>
//           <div
//             className={ `bg-yellow-300 border-2 border-red-50 p-1 lg:ml-20 lg:mr-10 lg:flex
//             rounded-lg md:w-[90%] lg:w-[80%]
//             ${openNav ? 'fixed top-20 left-10 w-[680px] bg-yellow-300' : 'hidden'}
//             `}
//           >
//             {/*///////*/}
//             <div className={
//               `${openNav ? 'flex flex-col flex-wrap h-[300px] gap-3 m-2 z-20 bg-blue-100 p-5 opacity-90' :
//                 'flex flex-wrap gap-x-12 overflow-hidden '
//               }`}
//             >
//               {arr.map((article) =>{
//                 return (
//                   <a
//                     key={article}
//                     href={`#${article}`}
//                     className={`cursor-pointer hover:text-red-600 transition-colors text-black w-[70px] my-1
//         ${activeId === article ? 'text-red-600 font-bold' : ''} // تغيير اللون إذا كان مطابقًا
//       `}
//                     onClick={() => closeNav()}
//                   >
//                     {article}
//                   </a>
//                 )})}
//             </div>
//           </div>
//           <button
//             className={`ml-auto md:flex lg:hidden cursor-pointer border-2 px-4 rounded-full
//            ${openNav ? 'bg-zinc-300 text-black transition-all' : 'bg-zinc-600 text-white transition-all'}`}
//
//             onClick={toggleNavigation}
//           >
//             ---
//           </button>
//         </div>
//
//       </div>
//
//       {/*//////*/}
//
//       <div className="flex flex-wrap mt-20 mx-20 justify-evenly">
//         {
//           articles.map((article, index) => {
//
//             if(article.urlToImage && article.author ){
//               z += 1
//               return (
//                 <div key={index} id={z +'_' +article.author.split(' ')[0]} className=" border-4 m-4 p-8 bg-blue-700 rounded-xl  lg:w-[45%] ">
//                   <h1 className=" text-2xl font-bold border-2 p-7 rounded-2xl bg-yellow-300 text-black">{article.title}</h1>
//
//                   <img
//                     src={article.urlToImage || ''}
//                     alt={article.title}
//                     className="news-image my-5"
//                   />
//
//                   <p className="news-description">{article.description}</p>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 "
//                   >
//                     >>> Read More...
//                   </a>
//
//                   {/*<hr className={'my-3'} />*/}
//                   {/*<div className={'text-black font-bold bg-blue-300 p-4 rounded-full w-1/2 '}>*/}
//                   {/*  Author :*/}
//                   {/*  {" " + article.author}*/}
//                   {/*</div>*/}
//                 </div>
//               )
//             }
//           })}
//       </div>
//
//
//     </div>
//
//   );
// };
//
// export default Api ;
//

/////////

///deepseek

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
//
// const Api = () => {
//   const pathname = useLocation();
//   const [openNav, setOpenNav] = useState(false);
//   const [activeId, setActiveId] = useState('');
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const sectionRefs = useRef([]);
//
//   // إنشاء Observer لتتبع الأقسام المرئية
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const id = entry.target.id;
//             setActiveId(id);
//             window.history.replaceState(null, null, `#${id}`);
//           }
//         });
//       },
//       { threshold: 0.5, rootMargin: '0px 0px -50% 0px' }
//     );
//
//     sectionRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });
//
//     return () => observer.disconnect();
//   }, [articles]);
//
//   // إغلاق القائمة عند تغيير الحجم
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setOpenNav(false);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   // جلب البيانات
//   useEffect(() => {
//     const API_KEY = '8f48e056283d47c8baa0338f653222f4';
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
//         );
//         setArticles(response.data.articles);
//       } catch (err) {
//         setError('Failed to get News');
//         console.error('Error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, []);
//
//   // إنشاء مصفوفة عناصر القائمة
//   const generateNavItems = () => {
//     return articles
//       .filter(article => article.author && article.urlToImage)
//       .map((article, index) => `${index + 1}_${article.author.split(' ')[0]}`);
//   };
//
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//
//   return (
//     <div>
//       {/* شريط التنقل */}
//       <div id="Features" className="fixed top-0 left-0 px-20 w-screen z-50 bg-zinc-600 py-4">
//         <div className="flex justify-between items-center">
//           <div
//             className="cursor-pointer h-10 flex items-center border-2 px-3 py-1 rounded-xl hover:bg-zinc-300 hover:text-black transition-all"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             NewsWeb
//           </div>
//
//           {/* القائمة المنبثقة */}
//           <div className={`bg-gray-400 p-1 lg:ml-20 lg:mr-10 rounded-lg md:w-[90%] lg:w-[70%] ${
//             openNav ? 'fixed top-20 left-10 w-[680px] bg-yellow-300' : 'hidden'
//           } lg:flex`}>
//             <div className={`${
//               openNav ? 'grid grid-cols-2 gap-3 m-2 z-20 bg-blue-100 p-5 opacity-90' : 'flex flex-wrap gap-x-12'
//             }`}>
//               {generateNavItems().map((article, index) => (
//                 <a
//                   key={article}
//                   href={`#${article}`}
//                   className={`cursor-pointer hover:text-blue-600 transition-colors text-black ${
//                     activeId === article ? 'text-red-600 font-bold' : ''
//                   }`}
//                   onClick={() => setOpenNav(false)}
//                 >
//                   {article}
//                 </a>
//               ))}
//             </div>
//           </div>
//
//           {/* زر القائمة */}
//           <button
//             className={`ml-auto md:flex lg:hidden cursor-pointer border-2 px-4 rounded-full ${
//               openNav ? 'bg-zinc-300 text-black' : 'bg-zinc-600 text-white'
//             } transition-all`}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             ---
//           </button>
//         </div>
//       </div>
//
//       {/* محتوى المقالات */}
//       <div className="flex flex-wrap mt-20 mx-20 justify-evenly">
//         {articles.map((article, index) => {
//           if (article.urlToImage && article.author) {
//             const sectionId = `${index + 1}_${article.author.split(' ')[0]}`;
//             return (
//               <div
//                 key={index}
//                 id={sectionId}
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 className="border-4 m-4 p-8 lg:w-[45%] scroll-mt-20"
//               >
//                 <h1 className="text-2xl font-bold border-2 p-7 rounded-2xl bg-yellow-300 text-black">
//                   {article.title}
//                 </h1>
//                 <img
//                   src={article.urlToImage}
//                   alt={article.title}
//                   className="my-5 w-full h-64 object-cover"
//                 />
//                 <p className="text-gray-700 mb-4">{article.description}</p>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   >>> Read More...
//                 </a>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };
//
// export default Api;
//
