import React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0  flex items-center w-full left-0  h-[8vh] z-50 bg-gradient-to-r from-emerald-400 to-blue-500 shadow-lg">
        <div className="flex justify-around items-center w-full h-full ">
            <Link to='/'><Search/></Link>
        </div>
    </footer>
    </div>
  )
}

export default Footer
