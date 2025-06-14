import React,{useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({title,category}) => {

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGE2ZWI5MTk1YTQ2ZTE2MDY1YjNhNzIwYjJjMjEwYiIsIm5iZiI6MTc0OTkwNzkxMi42OTI5OTk4LCJzdWIiOiI2ODRkNzljOGI2YTlhYWM1NGUxZWMxNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uo5UIe5-OSdG50mVpFH46YjCvN4iCtnGkHx5v98tF9Q'
  }
};

  const [apiData,SetApiData]=useState([])

  const cardsRef =useRef()

const handleWheel =(e)=>{
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}

useEffect(()=>{

  
fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => SetApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='titlecards'> 
      <h2> {title?title:"Trending Now"}</h2>
      <div className="card-list" ref={cardsRef}> 
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="/" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
