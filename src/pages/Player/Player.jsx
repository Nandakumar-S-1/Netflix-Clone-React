import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const {id}=useParams()
  const navigate =useNavigate()

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type :""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGE2ZWI5MTk1YTQ2ZTE2MDY1YjNhNzIwYjJjMjEwYiIsIm5iZiI6MTc0OTkwNzkxMi42OTI5OTk4LCJzdWIiOiI2ODRkNzljOGI2YTlhYWM1NGUxZWMxNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uo5UIe5-OSdG50mVpFH46YjCvN4iCtnGkHx5v98tF9Q'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos? language=en-US`, options)
  .then(res => res.json())
  .then(res => {
    const trailer = res.results.find((video) => video.type === 'Trailer') || res.results[0];
    if (trailer) {
      setApiData({
        name: trailer.name,
        key: trailer.key,
        published_at: trailer.published_at,
        type: trailer.type,
      });
    }
  })
  .catch(err => setApiData(res.results[0]));
},[id])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
