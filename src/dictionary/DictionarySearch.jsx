import React, { useState, useEffect } from 'react';
import search from '../icons/search.png';
import long from '../icons/long.png';
import play from '../icons/play.png'
import link from '../icons/link.png'

const Dictionary = ({ darkMode }) => {
  const [word, setWord] = useState('keyboard');
  const [data, setData] = useState("");
  const [searched, setSearched] = useState(false);
  const [audio, setAudio] =useState("")

  
  const fetchData = () => {
    if (word.trim() !== '') {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.log('Error', err));
    }
    setSearched(true);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  useEffect(() => {
    if (!searched) {
      fetchData();
    }
  }, []);
  let sound = data[0] && data[0].phonetics 
  
  console.log(sound)

  useEffect(() => {
    setAudio(data && data[0].phonetics.find((sound)=> sound.audio !==""));
    console.log(data && data[0].phonetics.find((sound)=> sound.audio !==""))


    if(data && data.find)
    console.log(data);

  }, [data]);
  

  const handlePlay = () =>{
    document.getElementById("audio").play()
  }

  return (
    <>
      <div
        className={` flex flex-wrap  justify-between ml-20 bg-[#1F1F1F] h-[45px] rounded-lg w-[45%] ${
          darkMode ? 'bg-[#1F1F1F] text-white' : 'bg-[#F4F4F4]  text-black text-[20px]'
        }` }
      id='border-bg'>
        <div className='border rounded-lg border-none flex hover:border-[#A445ED] '    id='border-input'>
          <input
            type='text'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className='w-[550px] ml-4 bg-transparent text-[18px] outline-none shadow h-[41px] placeholder:mt-4'
            onKeyPress={handleKeyPress}
            style={{ caretColor: '#A445ED' }}
            placeholder='Search for any word'
          />
       <img
       src={search}
      alt='search'
      onClick={handleSearch}
      className='w-[18px] h-[18px] mt-3 ml-3 cursor-pointer'
      id='search'
    />
  </div>

  {searched ? (
   <div className='mt-16 text-lg' id='word-items'>
     {data && data.length > 0 ? (
  <>
 <div className=' flex justify-between mb-24 ' id='play'>

   <div className='flex flex-wrap flex-col' id='word'>
     <h4 className={`text-[30px]  ${darkMode ? 'text-white' : 'text-black'}`} id='manrope sans manrope'>
      {data[0].word}
    </h4>

   <h4 className='text-[#A445ED] mr-14 mt-2' id='phonetic manrope sans manrope' 
   
   >{data[0].phonetic}
   </h4>
   </div>
    
 
<div className='audio'>
   <audio src={audio && audio.audio} id='audio'></audio>
    <button onClick={() => handlePlay()}>
       <img src={play} alt="audio" width={40}/>
    </button>
 </div>
    </div>

   <div className='flex items-center relative bottom-16 ml-2 gap-6' id='noun'>
         <p>noun</p>
    <div className='opacity-40'>
      <img src={long} alt="long" />
    </div>
  </div>

            
 <div className='text-left'>
    <h4 className='text-green-700 '>{data[0].meanings[0].antonyms}</h4>
          
<ul className={`space-y-4 mt-[-40px] ${darkMode ? "text-gray-300 " : "text-gray-900"}`} id='definition'>
  <h5 className='text-gray-600 '>meaning</h5>

 <li className='flex  text-[15px] gap-5 items-center' id='manrope sans manrope'>
      <div className=' h-[4px] bg-[#A445ED] w-[5px] p-[2px]  rounded-full'></div>
             {data[0].meanings[0].definitions[0].definition}
 </li>

 <li className='flex items-center text-[15px] gap-5 ' id='manrope sans manrope'>
 <div className=' h-[4px] flex w-[5px] bg-[#A445ED] mb-14 p-[2px] rounded-full'></div>
     {data[0].meanings[0].definitions[1].definition}
  </li>

 <li className='flex items-center gap-5 text-[15px] ' id=' manrope sans manrope'>
 <div className=' h-[4px] w-[5px] p-[2px] mb-7 bg-[#A445ED] rounded-full'></div>
     {data[0].meanings[0].definitions[2].definition}
</li>
                      
 </ul>
                  
 <span className='space-x-5 flex gap-5' id='synonyms'>
    <span className='text-gray-400 text-[16px]'>synonyms:</span>
    <span className=' text-[#A445ED] text-[15px]'>{data[0].meanings[0].synonyms[0]}</span>
  </span>

  <div className='flex items-center mt-5 gap-6' id='verb'>
         <p>verb</p>
    <div className='opacity-40' >
      <img src={long} alt="long" />
    </div>
  </div>

  <div className='meaning'>
    <ul >
      <h4 className='text-gray-600' id='manrope sans manrope'>meaning</h4>
      <li className={`text-[15px] ml-6 flex gap-5 items-center ${darkMode ? "text-gray-300" : "text-black"}`} id='manrope sans manrope'>
      <div className=' h-[4px] w-[5px] p-[2px] bg-[#A445ED] rounded-full'></div>
        {data[0].meanings[1].definitions[0].definition}
      </li>
      <p className='text-gray-500 ml-6 tracking-wider text-[15px] ' id='manrope sans manrope'>"{data[0].meanings[1].definitions[0].example}"</p>
    </ul>
  </div>

<div className='footer'>
   <img src={long} alt="long" className='opacity-60 mt-5' id='footer-line'/>
   <div className='flex gap-6' id='urlicon'>
    <p className='text-gray-400'>Source</p>
   <a href="sourceUrls" className={`flex gap-1 text-[15px] ${darkMode ? "text-gray-400" : "text-black"}`} >{data[0].sourceUrls[0]}
   <img src={link} alt="link" width={10} className='h-[10px] mt-2' />
   </a>
   </div>
</div> 
</div>
  
  </>
 ) : (
  <p className='text-[#A445ED]'>No results found</p>
 )}
  </div>
   ) : (
  <div className='mt-16 text-lg text-[#A445ED]'>
     {'Start typing to search'}
 </div>
   )}
    </div>
 </>
  );
};

export default Dictionary;
