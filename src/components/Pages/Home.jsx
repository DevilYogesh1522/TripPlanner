import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const  Home=()=> {
  return (
    <div className='flex flex-col mx-56 gap-9'>
      <h1 className='font-extrabold text-3xl text-center mt-20'>
        <span className='text-red-400'>Discover Your Next Advanture With AI : </span>Personalized Itineraries At Your Fingertips</h1>
      <p className='text-sm text-gray-600'>Your personal trip planner snd travel curator,creating custom itineraries tailored to youe interest and budget  </p>
      <Link to={'/createtrip'}><Button>Get Started </Button></Link>
    </div>
  )
}

export default Home
