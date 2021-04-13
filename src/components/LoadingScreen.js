import React from 'react'
import { Spinner } from 'react-bootstrap'
import Logo from '../assets/Logo.svg'

const LoadingScreen = () => {
  return (
    <div className='loading'>
      <div className='loading__item'>
        <img src={Logo} alt={Logo} />
        <Spinner animation='border' className='mt-3' />
      </div>
    </div>
  )
}

export default LoadingScreen