import React, { useState } from 'react'
import { Link } from 'react-router'

const menulinks = [
    {name:"Home", path:"/"},
    {name:"About", path:"/a"},
    {name:"Amonal", path:"/w"},
    {name:"Akjfue", path:"/er"},
]
const Navbar2 = () => {
    const [isOpen , setOpen] = useState(false);
  return (
    <nav className='bg-purple-500'>
        <div className="h-16 items-center flex justify-between px-4">
            {/* logo */}
            <div>Logo</div>
            {/* view for desktop */}
            <div className="hidden sm:block">
                {menulinks.map((item) =>(
                    <Link
                    className='text-white px-4'
                    key={item.path}
                    to={item.path}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <button
            onClick={()=> setOpen(!isOpen)}
            className='block sm:hidden '
            >Menu</button>
        </div>
        {/* view for mobile */}
        <div className={`${isOpen? "block" : "hidden"} block transition delay-500 duration-400 sm:hidden`}>
                {menulinks.map((item) =>(
                    <Link
                    className='text-white  block p-3 '
                    key={item.path}
                    to={item.path}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

    </nav>
  )
}

export default Navbar2
