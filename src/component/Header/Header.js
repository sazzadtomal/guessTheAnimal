import React from 'react'
import HeaderImg from "../../assets/HeaderImg.gif"


const Header = () => {
  return (
    <div className='absolute w-full top-8 box-border px-2'>
      <img className='m-auto pl-2' src={HeaderImg} alt="find the animal Header"/>
    </div>
  )
}

export default Header