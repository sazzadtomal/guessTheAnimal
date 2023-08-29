import React from 'react'
import HeaderImg from "../../assets/HeaderImg.gif"

const Header = () => {
  return (
    <div className='absolute w-full top-12 box-border px-2'>
      <img className='m-auto' src={HeaderImg} alt="find the animal Header"/>
    </div>
  )
}

export default Header