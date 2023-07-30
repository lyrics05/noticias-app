import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({info}) => {
  return (
    <div  >
      <div className='sm:grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
      {info.length?
      info.map((n)=>{
        return(
          <div className='bg-[#18B7BE] rounded w-[300px] h-[400px] mb-12'>
              <div>
              <h1 className='text-white font-bold'>{n.title}</h1>
              </div>
             <Link to={n.url} target='_blank'><img className='w-[100%] h-[250px] rounded cursor-pointer' src={n.urlToImage} alt="" /></Link>
          </div>
        )
      })
        :<h1 className='text-white font-bold text-3xl'>loading...</h1>}
    </div>
    </div>
  )
}

export default Card