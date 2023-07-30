import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'

const Home = () => {
    const [info,setInfo] = useState([])
    console.log("ESTO ES INFO======>",info)
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ece9d7d09e9d45dab6fbc3db70733acf")
        .then(response=>response.json())
        .then(data=>{
            console.log("ESTO ES DATA==========>",data)
            setInfo(data.articles)
        })
    },[])
  return (
      <>
       <Nav/>
       <Card info ={info}/>
      </>
  )
}

export default Home