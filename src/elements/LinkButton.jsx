import React from 'react'

const LinkButton = (props) => {
  return (
    <button className='py-1 px-4 bg-gray-500 cursor-pointer rounded-lg hover:bg-gray-600 active:bg-gray-700'>
        {props.name}      
    </button>
  )
}

export default LinkButton
