import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import book from '../icons/book.png';
import line from '../icons/line.png';
import DictionarySearch from '../dictionary/DictionarySearch';
import { LiaToggleOnSolid } from 'react-icons/lia';
import { HiOutlineMoon } from 'react-icons/hi';
import {MdToggleOff} from 'react-icons/md'

const ToggleHeader = () => {
  const [fonts, setFonts] = useState('font-sans');
  const [darkMode, setDarkMode] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // const handleFontClick = (selectedFont) => {
  //   setFonts(selectedFont);
  // };

  return (
    <>
   <div className={`h-auto ${fonts} min-h-screen w-full ${darkMode ? 'dark' : 'white'}`}    id='bg1'>
        <div className={`min-h-screen h-[890px] ${darkMode ? 'dark:bg-black' : 'bg-white text-black'}`}>
          <div className='flex justify-evenly items-center' id='header'>

   <div className='bg-sticky z-40 '>
       <img src={book} alt='logo' width={35} className='absolute left-96 top-7' id='book'/>
   </div>

<div className='flex gap-7 absolute right-96 top-5' id='right-icons'>
   
   <div className='fontsbox z-50'>
     <p className={`text-[18px] mt-3 ml-10 ${darkMode ? 'text-white' : 'text-black'}`} id='font'>{fonts}</p>
     
         <div className='relative left-5 top-3'>
             {isHidden && (
           <div
           className={`cursor-pointer ${darkMode ? 'bg-[#1F1F1F] text-white' : 'bg-white text-black'}`}
             id='fonts-box'
                    >
             <p
           className='pb-2 cursor-pointer hover:text-[#A445ED]'
            onClick={() => setFonts('font-mono')}
            id='manrope'
                >
             mano
             </p>
           <p
          className='pb-2 cursor-pointer hover:text-[#A445ED]'
           onClick={() => setFonts('font-serif')}
          id='roboto'
         >
      serif
   </p>
   <p
   className='pb-2 cursor-pointer hover:text-[#A445ED]'
   onClick={() => setFonts('font-san')}
   id='sans'
    >
   sans
    </p>
   </div>
  
   )}
  </div>

</div>

 <div className='text-[25px] mt-5'>
 <img
  onClick={() => setIsHidden(!isHidden)}
    alt='logo'
    src={arrow}
    className='cursor-pointer'
   id='arrow'
   />
 </div>

 <div className='text-[25px] '>
 <img src={line} alt='logo' className='h-[20px] mt-4 opacity-60'  id='line'/>
 </div>

 <div className='text-[25px] text-[#A445ED]' >
 {darkMode ? (
    <LiaToggleOnSolid onClick={() => setDarkMode(!darkMode)} className='bg-black  mt-3 text-white' id='toggle1'/>
  ) : (
 <MdToggleOff onClick={() => setDarkMode(!darkMode)} className='bg-white  mt-3  text-black' id='toggle2'/>
 )}
</div>

 <div>
   <HiOutlineMoon className='text-[#A445ED] mt-3  text-[25px]' id='moon'/>
 </div>

</div>
</div>

 <div className='absolute top-24 right-10 z-10 w-full' id='dictionary'>
 <div className='flex items-center justify-center'>
   <DictionarySearch darkMode={darkMode}/>
      </div>
 </div>
  </div> 
      </div>
    </>
  );
};

export default ToggleHeader;
