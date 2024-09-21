import React, {useEffect, useState} from 'react'
import { Search } from 'lucide-react';

const SearchVids = ({setVidlist}) => {
    const [input, setInput] = useState("");
    
    async function searchVids(e){
      e.preventDefault();
      try {
        const respo = await fetch(`https://kym-backend.vercel.app/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            search : input,
          }),
        });
        const result = await respo.json();
        setVidlist(result.vidlist);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
  
    }
  return (
    <div>
      <form onSubmit={searchVids} className='flex text-lg items-center gap-4 justify-center flex-wrap'>
        <input className='border border-slate-300' type='text' onChange={(e)=>{setInput(e.target.value)}}/>
        <button type='submit'><Search/></button>
      </form>
    </div>
  )
}

export default SearchVids
