import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
   const [searchQuery, setSearchQuery]=useState("");
   const[suggestions,setSuggestions]=useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  /** 
   * searchCache={
   * "iphone":["iphone 11","iphone14"]
   * }
   * searchQuery=iphone
  */
 
   const dispatch = useDispatch();
   useEffect(()=>{
//api call
//make an api call after every key press 
//but if the difference between 2 api calls is <200ms 
//decline the api call
const timer=setTimeout(()=> 
   {
if(searchCache[searchQuery])
   setSuggestions(searchCache[searchQuery]);
else
   getSearchSuggestions();
},200);
   return ()=>{
      clearTimeout(timer);
   };
},[searchQuery]);

/**
 * key-i
 * render component
 * useEffect()
 * start timer-make api call after 200ms
 * 
 * key-ip
 * destroy the component(useEffect return method)
 * re render again
 * useEffect()
 * 
 * and if no key press it will automatically call an api call after 200 ms
 * 
 */
const getSearchSuggestions=async ()=>{
   const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
   const json=await data.json();
   // console.log(json);
   setSuggestions(json[1]);
   dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })//passing object in cache result
    );
   };
    const toggleMenuHandler=()=>{
dispatch(toggleMenu());
    };
  return (
    <div className="grid grid-flow-col h-25 p-3 m-2 shadow-lg">
 <div className="flex col-span-1 justify-evenly">
    
    <img onClick={()=>toggleMenuHandler() }className="h-8 cursor-pointer" alt="menu"
    src="https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg"
    />
   <a href="/">
    <img  className="h-8 mx-2" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
 />
 </a>
 </div>
 <div className="col-span-10 text-center">
   <div>
    <input className="px-5 w-96 border-gray-400 p-2 rounded-l-full"
     type="text" placeholder="Search..." 
    value={searchQuery}
    onChange={(e)=>setSearchQuery(e.target.value)}
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
    />
    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search
    </button>
    </div>
    {showSuggestions && (
    <div className='fixed bg-white py-2 px-5 w-[37-rem] shadow-lg rounded-lg border border-gray-100'>
      <ul>
         {suggestions.map((s)=>(<li key={s} className='py-2 shadow-sm hover:bg-gray-100'>
            🔍{s}
            </li>
            ))}
         {/* // <li className='py-2 shadow-sm hover:bg-gray-100'>🔍IPhone</li>
         // <li className='py-2 shadow-sm hover:bg-gray-100'>🔍IPhone</li>
         // <li className='py-2 shadow-sm hover:bg-gray-100'>🔍IPhone</li>
         // <li className='py-2 shadow-sm hover:bg-gray-100'>🔍IPhone</li>   */}
      </ul>
    </div>
    )}
 </div>
 <div className='col-span-1'>
    <img className="h-9" alt="user" src="https://webstockreview.net/images/user-icon-png-4.png"/>
 </div>
    </div>
  )
};
export default Head;
