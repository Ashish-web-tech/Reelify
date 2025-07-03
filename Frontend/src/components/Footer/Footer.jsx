import React from 'react'

const Footer = () => {
  return (
    <div className=' py-5 text-white flex flex-col justify-center text-center items-center'>
      
      <img src="/img/logo.png" alt="" width="200px" />
      <nav>
        <ul className='flex gap-7'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Policy</a></li>
          <li><a href="/">Legal</a></li>
        </ul>
      </nav>
      <div>
        Made with love by @awt ❤️
      </div>
      </div>
  )
}

export default Footer