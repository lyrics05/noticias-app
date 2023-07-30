import React from 'react'
import img from "../../img/descarga.png"
import gitHub from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='flex justify-between'>
      <div >
         <h1 className='text-6xl text-white font-bold'>EL Universo</h1>
        </div>

        <div className='flex'>
        <Link to={"https://github.com/lyrics05"} target='_blank'><img className='w-[50px] h-[50px] cursor-pointer' src={gitHub} alt="" /></Link>
       <Link to={"https://www.linkedin.com/in/isidro-rivera-bab6971a5/"} target='_blank'> <img className='w-[50px] h-[50px] cursor-pointer' src={linkedin} alt="" /></Link>
      </div>
       
    </div>
  )
}

export default Nav