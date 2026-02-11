import React from 'react'
import Button1 from '../../elements/Button1'

const Hero = () => {
  return (
    <div className='h-screen w- ful bg-linear-to-t from-pink-30 to-sky-400'>
      <div className='h-3/4 w-full pt-26 px-6 border-2  md:pt-40 md:text-center border-amber-400'>
        <h1 className='text-lg font-serif py-3 text-center md:text-2xl md:py-6 bg-green-200 '>Hi, I'm Deshring — A Passionate Python Developer.</h1>
        <div>
        <h2 className='text-sm text-center py-1 md:text-lg bg-amber-100'>I build efficient, scalable, and user-focused applications that solve real-world problems.</h2>
        </div>
        <div className="py-3 flex items-center justify-around bg-green-400 md:justify-center md:gap-9">
        <Button1 name="View My Works"/>
        <Button1 name="View My Works"/>

        </div>
      </div>
      <div 
      onScroll={()=>{
        console.log("scrolling")
      }}
      className='bg-green-400 h-screen w-full'><h3 className=''>lorkdjfer</h3></div>
    </div>
  )
}

export default Hero


