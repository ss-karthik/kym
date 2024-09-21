import React, {useState, useEffect} from 'react'
import Search from './SearchVids';
import DisplayVids from './DisplayVids';
import Footer from './Footer';

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
      <Footer/>
    </div>
  )
}

export default Landing
