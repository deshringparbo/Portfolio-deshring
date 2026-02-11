import React from 'react'

const Button1 = (props) => {
  return (
    <div>
      <button className='py-2 px-2 bg-linear-to-l from-sky-500 to-green-100 rounded-lg hover:cursor-pointer hover:bg-amber-400'>{props.name}</button>
    </div>
  )
}

export default Button1
