import React, {useEffect, useState} from 'react'
import axios from "axios";
const API_URL = "http://localhost:3000";

const Search = ({setVidlist}) => {
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
      <form onSubmit={searchVids}>
        <input type='text' onChange={(e)=>{setInput(e.target.value)}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Search
