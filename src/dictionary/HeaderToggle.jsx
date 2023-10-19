import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import book from '../icons/book.png';
import line from '../icons/line.png';
// import toggle from '../icons/toggle.png';

import { LiaToggleOnSolid } from 'react-icons/lia';
import { MdToggleOff } from 'react-icons/md';
import {HiOutlineMoon} from 'react-icons/hi'



const HeaderToggle = () => {
  const [fonts, setFonts] = useState('sans');
  const [darkMode, setDarkMode] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleFontClick = (selectedFont) => {
    setFonts(selectedFont);
  };

  return (
    <>
      <div className={`h-[1000px] w-[100%] ${darkMode ? 'dark' : 'white'}`}>
        <div
          className={`flex justify-evenly md:flex md:justify-evenly md:h-full h-full ${
            darkMode ? 'dark:bg-black' : 'bg-white text-black'
          }`}
        >
<div className='flex justify-around' id='wholeheader'>

   <div className='mt-10 book absolute left-[25.90rem]  ' id='bookicon'>
    <img src={book} alt='logo' width={35}/>
 </div>

   <div className='flex absolute right-[21rem]  mt-1' id='right-header'>

     <div className='mt-1'>
      <div className='flex items-center relative'>
         <div>
         {isHidden && (
   <div className={` cursor-pointer absolute top-16 left-40 z-20 ${darkMode ? "bg-[#1F1F1F] text-white" : "bg-white text-black"}`} id='fonts-box'>
      <p
         className='pb-2 cursor-pointer hover:text-[#A445ED]'
           onClick={() => handleFontClick('manrope')}
          >
           manrope
       </p>
       <p
           className='pb-2 cursor-pointer hover:text-[#A445ED]'
           onClick={() => handleFontClick('roboto')}
          >
             roboto
       </p>
       <p
         className='pb-2 cursor-pointer hover:text-[#A445ED]'
            onClick={() => handleFontClick('sans')}
            >
            sans
        </p>
     </div>
   )}
</div>
<div className='flex gap-5'>
 <p className={` ml-48 mt-7 text-[18px] ${darkMode ? "text-white" :"text-black"}`}>{fonts}</p>
    <img
        onClick={() => setIsHidden(!isHidden)} // Toggle isHidden state
             alt='logo'
              src={arrow}
          className='h-2 cursor-pointer mt-10'
    />
    <img src={line} alt='logo' className='h-5 mt-8' />

    <div className='flex gap-5 h-4 mt-8 '>
      {
        darkMode ? (
          <MdToggleOff  onClick={() => setDarkMode(!darkMode)} className='bg-black text-white text-[25px]'/>
        ):
        <LiaToggleOnSolid  onClick={() => setDarkMode(!darkMode)} className='bg-white text-black text-[25px]'/>
      }
      <HiOutlineMoon className='text-[#A445ED] text-[20px]'/>
   
   </div>
    </div>
   </div>
 </div>
 </div>
 
          </div>
          {/* Move DictionarySearch here */}
          
        </div>
      </div>
    </>
  );
};

export default HeaderToggle;
