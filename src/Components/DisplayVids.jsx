import React from 'react'
import { ThumbsUp } from 'lucide-react'

const DisplayVids = ({vidlist}) => {
    
  return (
    <div className='m-5'>
        {vidlist.map((v) => (
        <div key={v.ind} className="flex flex-wrap gap-10 border border-black justify-between  items-center">
        <form method="POST" >
                  <button name="video" value={v.vidid} type="submit" className="block p-2 my-2">
                     {v.title}
                  </button> 
        </form>
        <button className="block p-2 my-2"><ThumbsUp /></button>
        </div>  
        ))} 
    </div>
  )
}

export default DisplayVids
