import React from 'react'

const HeaderTitle = (props) => {
  return (
    <div className='underline py-10'>
        <h1 className="text-center text-2xl md:text-3xl font-sans py-6">
            {props.name}
            {/* <span className="absolute left-0 -bottom-2 w-full h-[3px] 
                         bg-sky-400 
                         shadow-[0_0_15px_#38bdf8,0_0_30px_#38bdf8] 
                         rounded-full"></span> */}
      </h1> 
    </div>
  )
}

export default HeaderTitle
