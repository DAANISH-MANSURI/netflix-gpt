import React from 'react'
import inflixLogo from "../images/INFLIX_LOGO.png";

const Header = () => {
  return (
    <div className='absolute px-50 ml-20'>
      <img className='w-60 h-20 object-cover  ml-10 mt-4' src={inflixLogo} alt="inflix-logo" />
    </div>
  )
}

export default Header