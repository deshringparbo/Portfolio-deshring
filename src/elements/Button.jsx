import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
      className='px-3 py-1 font-mono bg-sky-300 rounded-md text-xl hover:bg-sky-400 hover:cursor-pointer active:bg-sky-500'>{props.name}</button>
    </div>
  )
}

export default Button
