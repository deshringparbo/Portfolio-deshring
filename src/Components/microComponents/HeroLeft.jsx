import React from 'react'
import Button from '../../elements/Button'
const HeroLeft = () => {
  return (
    <div className='h-full md:w-5/6 bg-amber-50 p-4'>
      <h1 className='font-bold text-3xl'>Deshring Parbo</h1>
      <h4 className='pt-4 text-xl'>Lorem ipsum dolor sit amet  laboriosam!</h4>
      <Button name='Connect' />
        <Button name="Linkedin" />
    </div>
  )
}

export default HeroLeft
