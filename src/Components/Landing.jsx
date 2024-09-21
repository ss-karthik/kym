import React, {useState, useEffect} from 'react'
import Search from './Search';
import DisplayVids from './DisplayVids';

const Landing = () => {
    const [vidlist, setVidlist] = useState([]);
    useEffect(()=>{
        console.log(vidlist);
    }, [vidlist])
  return (
    <div>
      Welcome to Kym
      <Search setVidlist={setVidlist}/>
      <DisplayVids vidlist={vidlist}/>
    </div>
  )
}

export default Landing
